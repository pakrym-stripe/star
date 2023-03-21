#!/usr/bin/env -S node --loader ts-node/esm

import chalk from "chalk";

import { Project, Type, Symbol, SymbolFlags, Node } from "ts-morph";

type PrimitiveType =
  | {
      kind: "string" | "boolean" | "number" | "uknown";
    }
  | {
      kind: "literal";
      value: string;
    };

type UnionValue = {
  kind: "union";
  items: Array<Value>;
};

type ArrayValue = {
  kind: "array";
  item: Value;
};
type Property = {
  name: string;
  value: Value;
  optional: boolean;
};

type ObjectValue = {
  kind: "object";
  properties: Array<Property>;
};

type Value = PrimitiveType | ArrayValue | ObjectValue | UnionValue;

type Endpoint = {
  name: string;
  request: Value;
  response: Value;
};

type PrimitiveDiff = {
  kind: "primitive";
  before: Value;
  after: Value;
};
type AttributeDiff<T> = {
  changed: boolean;
  before: T;
  after: T;
};
type PropertyDiff = {
  name: string;
  optional: AttributeDiff<boolean>;
  value: ValueDiff;
};
type ObjectDiff = {
  kind: "object";
  properties: CollectionDiff<PropertyDiff>;
};

type ArrayDiff = {
  kind: "array";
  item: ValueDiff;
};

type UnionDiff = {
  kind: "union";
  items: CollectionDiff<ValueDiff>;
};

type Unchanged = {
  kind: "unchanged";
  value: Value;
};
type ValueDiff = Unchanged | ObjectDiff | ArrayDiff | PrimitiveDiff | UnionDiff;

type EndpointDiff = {
  name: string;
  request: ValueDiff;
  response: ValueDiff;
};
type CollectionDiffItem<TDiff> = {
  kind: "added" | "removed" | "unchanged";
  value: TDiff;
};

type CollectionDiff<TDiff> = Array<CollectionDiffItem<TDiff>>;

type ApiDiff = {
  endpoints: CollectionDiff<EndpointDiff>;
};

type Api = {
  endpoints: Array<Endpoint>;
};

const defaultTsConfigFilePath = "./tsconfig.json";

const projects = new Map<string, Project>();

const project = (tsConfigFilePath: string) => {
  const project = projects.get(tsConfigFilePath);
  const result =
    project ??
    new Project({
      tsConfigFilePath,
    });
  projects.set(tsConfigFilePath, result);
  return result;
};

function isPrimitive(type: Type): PrimitiveType | null {
  if (type.isString()) {
    return { kind: "string" };
  }
  if (type.isStringLiteral()) {
    return { kind: "literal", value: type.getLiteralValueOrThrow() as string };
  }
  if (type.isUndefined()) {
    return { kind: "uknown" };
  }
  if (type.isNull()) {
    return { kind: "uknown" };
  }
  if (type.isUnknown()) {
    return { kind: "uknown" };
  }
  if (type.isAny()) {
    return { kind: "uknown" };
  }
  if (type.isNumber()) {
    return { kind: "number" };
  }
  if (type.isNumberLiteral()) {
    return { kind: "number" };
  }
  if (type.isBoolean()) {
    return { kind: "boolean" };
  }
  if (type.isBooleanLiteral()) {
    return { kind: "boolean" };
  }
  if (intrinsicNameOf(type) === "void") {
    return { kind: "uknown" };
  }
  return null;
}

function intrinsicNameOf(type: Type) {
  return (type.compilerType as unknown as { intrinsicName: string })
    .intrinsicName;
}

function typeToValue(
  type: Type,
  node: Node,
  cache: Record<string, Value>
): Value {
  const alias = type.getAliasSymbol()?.getFullyQualifiedName();
  if (alias) {
    //console.log(alias);
    const cached = cache[alias];
    if (cached) {
      return cached;
    }
  }

  const next = (nextType: Type) => {
    return typeToValue(nextType, node, cache);
  };

  const primitive = isPrimitive(type);

  if (primitive) {
    return primitive;
  }

  if (type.isArray()) {
    const subType = type.getArrayElementTypeOrThrow();
    return {
      kind: "array",
      item: next(subType),
    };
  }

  if (type.isTuple()) {
    return { kind: "uknown" };
  }

  if (type.isObject()) {
    const obj: Value = {
      kind: "object",
      properties: [],
    };

    if (alias) {
      cache[alias] = obj;
    }

    const props = type.getProperties();

    obj.properties = properties(props, node, next);
    return obj;
  }

  if (type.isUnion()) {
    const uts = type
      .getUnionTypes()
      .filter((ut) => !ut.isUndefined())
      .map((type) => next(type));

    return { kind: "union", items: uts };
  }

  if (type.isIntersection()) {
    const types = type.getIntersectionTypes().map((type) => next(type));

    const allProps: Record<string, Property> = {};

    for (const ut of types) {
      if (ut.kind != "object") {
        throw new Error("Only unions of objects are supported");
      }

      for (const prop of ut.properties) {
        allProps[prop.name] = prop;
      }
    }

    return {
      kind: "object",
      properties: Object.values(allProps),
    };
  }

  // when you encounter this, consider changing the function
  return { kind: "uknown" };
}

function properties(
  props: Symbol[],
  node: Node,
  next: (type: Type) => Value
): Array<Property> {
  return props.map((value) => property(value, node, next));
}

function property(
  prop: Symbol,
  node: Node,
  next: (type: Type) => Value
): Property {
  const type = prop.getTypeAtLocation(node);
  const isOptional = prop.hasFlags(SymbolFlags.Optional);
  return {
    name: prop.getName(),
    optional: isOptional,
    value: next(type),
  };
}

const loadApi = (path: string): Api => {
  const p = project(defaultTsConfigFilePath);
  const s = p.addSourceFileAtPath(path);
  const a = s.getTypeAliasOrThrow("Endpoints");
  const t = a.getType();
  const cache = {};

  if (!t.isUnion()) {
    throw new Error(
      "Uknonwn Endpoints type, expected a union of three element tupples"
    );
  }

  const endpoints: Array<Endpoint> = [];

  t.getUnionTypes().forEach((ut) => {
    const elements = ut.getTupleElements();
    if (elements.length != 3) {
      throw new Error(
        "Uknonwn Endpoints type, expected a union of three element tupples"
      );
    }

    const verbPath = elements[0].getLiteralValueOrThrow(
      "Expected first element of endpoint tupple to be a literal string"
    ) as string;

    endpoints.push({
      name: verbPath,
      request: typeToValue(elements[1], a, cache),
      response: typeToValue(elements[2], a, cache),
    });
  });
  return { endpoints };
};

const diff = (before: Api, after: Api): ApiDiff => {
  const deepEqual = <T>(x: T, y: T) => {
    if (x === y) {
      return true;
    } else if (
      typeof x == "object" &&
      x != null &&
      typeof y == "object" &&
      y != null
    ) {
      if (Object.keys(x).length != Object.keys(y).length) return false;

      for (var prop in x) {
        if (y.hasOwnProperty(prop)) {
          if (!deepEqual(x[prop], y[prop])) return false;
        } else return false;
      }

      return true;
    } else return false;
  };

  const namedDiff = <T, TDiff>(
    before: Array<T>,
    after: Array<T>,
    nf: (t: T) => string,
    df: (before: T, after: T) => TDiff
  ): CollectionDiff<TDiff> => {
    const b = Object.fromEntries<T>(before.map((i) => [nf(i), i]));
    const bKeys = Object.keys(b);
    if (bKeys.length != before.length) {
      throw new Error("non unique before keys");
    }
    const a = Object.fromEntries<T>(after.map((i) => [nf(i), i]));
    const aKeys = Object.keys(a);
    if (aKeys.length != after.length) {
      throw new Error("non unique after keys");
    }
    const allKeys = new Set([...aKeys, ...bKeys]);

    const diffs: CollectionDiff<TDiff> = [];

    for (const k of allKeys) {
      const aa = a[k];
      const bb = b[k];
      if (!aa) {
        diffs.push({
          kind: "removed",
          value: df(bb, bb),
        });
      } else if (!bb) {
        diffs.push({
          kind: "added",
          value: df(aa, aa),
        });
      } else {
        diffs.push({
          kind: "unchanged",
          value: df(bb, aa),
        });
      }
    }
    return diffs;
  };

  const attributeDiff = <T>(before: T, after: T): AttributeDiff<T> => {
    return {
      changed: before != after,
      before,
      after,
    };
  };
  const diffProperties = (before: Property, after: Property): PropertyDiff => {
    if (before.name != after.name) {
      throw new Error("names should be equal");
    }
    return {
      name: before.name,
      optional: attributeDiff(before.optional, after.optional),
      value: diffValues(before.value, after.value),
    };
  };

  const diffValues = (before: Value, after: Value): ValueDiff => {
    if (before.kind == "array" && after.kind == "array") {
      return {
        kind: "array",
        item: diffValues(before.item, after.item),
      };
    } else if (before.kind == "object" && after.kind == "object") {
      return {
        kind: "object",
        properties: namedDiff(
          before.properties,
          after.properties,
          (p) => p.name,
          diffProperties
        ),
      };
    } else if (before.kind == "union" && after.kind == "union") {
      return {
        kind: "union",
        items: after.items.map((i) => ({
          kind: "unchanged",
          value: { kind: "unchanged", value: i },
        })),
      };
    }
    if (before.kind == after.kind && deepEqual(before, after)) {
      return {
        kind: "unchanged",
        value: after,
      };
    }
    return {
      kind: "primitive",
      before: before,
      after: after,
    };
  };
  const diffEndpoints = (before: Endpoint, after: Endpoint): EndpointDiff => {
    if (before.name != after.name) {
      throw new Error("names should be equal");
    }
    return {
      name: before.name,
      request: diffValues(before.request, after.request),
      response: diffValues(before.response, after.response),
    };
  };

  return {
    endpoints: namedDiff(
      before.endpoints,
      after.endpoints,
      (e) => e.name,
      diffEndpoints
    ),
  };
};

const renderDiff = (diff: ApiDiff) => {
  let bg: typeof chalk = chalk;
  const addedBlock = (f: () => void) => {
    const oldBg = bg;
    bg = chalk.bgGreen.black;
    f();
    bg = oldBg;
  };
  const removedBlock = (f: () => void) => {
    const oldBg = bg;
    bg = chalk.bgRed.black;
    f();
    bg = oldBg;
  };
  const out = process.stdout;
  let indentLevel = 0;
  let wroteIndent = false;
  const write = (s: string) => {
    if (!wroteIndent) {
      wroteIndent = true;
      for (let i = 0; i < indentLevel; i++) {
        write("  ");
      }
    }
    out.write(bg(s));
  };
  const line = (s: string = "") => {
    write(s);
    write("\n");
    wroteIndent = false;
  };

  const indentBlock = (f: () => void) => {
    indentLevel++;
    f();
    indentLevel--;
  };

  const braceBlock = (f: () => void) => {
    line("{");
    indentBlock(f);
    write("}");
  };
  const sqbraceBlock = (f: () => void) => {
    line("[");
    indentBlock(f);
    write("]");
  };

  const renderValue = (e: Value) => {
    switch (e.kind) {
      case "array":
        sqbraceBlock(() => renderValue(e.item));
        break;
      case "object":
        braceBlock(() => {
          e.properties.forEach((p) => {});
        });
        break;
        case "literal":
          write(`'${e.value}'`);
          break;
        case "union":
          line();
          indentBlock(() => {
              e.items.forEach(ee => {
                renderValue(ee);
                line(' |');
              })
          })
          write(`'${e.items}'`);
          break;
      default:
        write(e.kind);
        break;
    }
  };

  const renderNamedCollectionDiff = <T, TDiff>(
    d: CollectionDiff<TDiff>,
    rd: (td: TDiff) => void
  ) => {
    for (const e of d) {
      switch (e.kind) {
        case "added":
          addedBlock(() => rd(e.value));
          break;
        case "removed":
          removedBlock(() => rd(e.value));
          break;
        case "unchanged":
          rd(e.value);
          break;
      }
    }
  };

  const renderPropertyDiff = (p: PropertyDiff) => {
    write(p.name);
    if (!p.optional.changed) {
      write(p.optional.after ? "?" : "");
    } else if (p.optional.after) {
      addedBlock(() => write("?"));
    } else {
      removedBlock(() => write("?"));
    }

    write(": ");
    renderValueDiff(p.value);
    line(",");
  };

  const renderValueDiff = (e: ValueDiff) => {
    switch (e.kind) {
      case "array":
        sqbraceBlock(() => renderValueDiff(e.item));
        break;
        case "object":
          braceBlock(() => {
            renderNamedCollectionDiff(e.properties, renderPropertyDiff);
          });
          break;
      case "union":
        indentBlock(() => {
            renderNamedCollectionDiff(e.items, ee => {
              renderValueDiff(ee);
              line(' |');
            });
        })
        break;
      case "unchanged":
        renderValue(e.value);
        break;
      case "primitive": {
        removedBlock(() => {
          renderValue(e.before);
        });
        addedBlock(() => {
          renderValue(e.after);
        });
        break;
      }
    }
  };

  const renderEnpointDiff = (e: EndpointDiff) => {
    line(e.name);
    renderValueDiff(e.request);
    line();
    renderValueDiff(e.response);
    line();
  };

  renderNamedCollectionDiff(diff.endpoints, renderEnpointDiff);
};

const api1 = loadApi("./src/endpoints.d.ts");

const api2 = loadApi("./src/endpoints.d copy.ts");

const d = diff(api1, api2);

renderDiff(d);

export default {};
