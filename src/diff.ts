#!/usr/bin/env -S node --loader ts-node/esm --no-warnings

import chalk from "chalk";

import { Project, Type, Symbol, SymbolFlags, Node, LeftHandSideExpression } from "ts-morph";
import {dddd, Diff, DiffValue} from "./dddd.js";

type ApiPrimitive = {
  kind: 'primitive',
  primitive: 'string' | "boolean" | "number" | "uknown" | 'null',
} | {
  kind: 'primitive',
  primitive: "literal";
  value: string;
}

type ApiUnion = {
  kind: "union";
  items: Array<ApiType>;
};

type ApiArray = {
  kind: "array";
  item: ApiType;
};
type ApiProperty = {
  name: string;
  value: ApiType;
  optional: boolean;
};

type ApiObject = {
  kind: "object";
  properties: Array<ApiProperty>;
};

type ApiType = ApiPrimitive | ApiArray | ApiObject | ApiUnion;

type ApiEndpoint = {
  name: string,
  request: ApiType,
  response: ApiType,
}

type Api = {
  endpoints: Array<ApiEndpoint>;
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

function isPrimitive(type: Type): ApiType | null {
  if (type.isString()) {
    return { kind: 'primitive', primitive: "string" };
  }
  if (type.isStringLiteral()) {
    return { kind: 'primitive', primitive:  "literal",
      value: type.getLiteralValueOrThrow() as string
    };
  }
  if (type.isUndefined()) {
    return { kind: 'primitive', primitive: "uknown" };
  }
  if (type.isNull()) {
    return { kind: 'primitive', primitive: "null" };
  }
  if (type.isUnknown()) {
    return { kind: 'primitive', primitive: "uknown" };
  }
  if (type.isAny()) {
    return { kind: 'primitive', primitive: "uknown" };
  }
  if (type.isNumber()) {
    return { kind: 'primitive', primitive: "number" };
  }
  if (type.isNumberLiteral()) {
    return { kind: 'primitive', primitive: "number" };
  }
  if (type.isBoolean()) {
    return { kind: 'primitive', primitive: "boolean" };
  }
  if (type.isBooleanLiteral()) {
    return { kind: 'primitive', primitive:  "boolean" };
  }
  if (intrinsicNameOf(type) === "void") {
    return { kind: 'primitive', primitive: "uknown" };
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
  cache: Record<string, ApiType>
): ApiType {

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
    return { kind: 'primitive', primitive: "uknown"};
  }

  if (type.isObject()) {
    const props = type.getProperties();

    return {
      kind: "object",
      properties: properties(props, node, next)
    };
  }

  if (type.isUnion()) {
    const uts = type
      .getUnionTypes()
      .filter((ut) => !ut.isUndefined())
      .map((type) => next(type));

    if (uts.length == 1) return uts[0];

    return {kind: "union", items: uts };
  }

  if (type.isIntersection()) {
    const types = type.getIntersectionTypes().map((type) => next(type));

    const allProps: Record<string, ApiProperty> = {};

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
  return { kind: 'primitive', primitive: "uknown"};
}

function properties(
  props: Symbol[],
  node: Node,
  next: (type: Type) => ApiType
): Array<ApiProperty> {
  return props.map((value) => property(value, node, next));
}

function property(
  prop: Symbol,
  node: Node,
  next: (type: Type) => ApiType
): ApiProperty {
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
      "Unknown Endpoints type, expected a union of three element tuples"
    );
  }

  const endpoints: Array<ApiEndpoint> = [];

  t.getUnionTypes().forEach((ut) => {
    const elements = ut.getTupleElements();
    if (elements.length != 3) {
      throw new Error(
        "Unknown Endpoints type, expected a union of three element tuples"
      );
    }

    const verbPath = elements[0].getLiteralValueOrThrow(
      "Expected first element of endpoint tuple to be a literal string"
    ) as string;

    endpoints.push({
      name: verbPath,
      request: typeToValue(elements[1], a, cache),
      response: typeToValue(elements[2], a, cache),
    });
  });
  return { endpoints };
};


const out = process.stdout;

const renderDiff = (diff: Diff<Api>) => {
  let bg: typeof chalk = chalk;
  let addedLine = "";
  let removedLine = "";
  let w : (s: string) => void = (s) => {
    addedLine += s;
    removedLine += s;
  };

  const addedBlock = (f: () => void) => {
    const oldBg = bg;
    const oldW = w;
    w = (s) => {
      addedLine += s;
    };
    bg = chalk.bgGreen.black;
    f();
    bg = oldBg;
    w = oldW;
  };
  const removedBlock = (f: () => void) => {
    const oldBg = bg;
    const oldW = w; w = (s) => {
      removedLine += s;
    };
    bg = chalk.bgRed.black;
    f();
    bg = oldBg;
    w = oldW;
  };
  let indentLevel = 0;
  let wroteIndent = false;
  const write = (s: string) => {
    if (!wroteIndent) {
      wroteIndent = true;
      for (let i = 0; i < indentLevel; i++) {
        w("  ");
      }
    }
    w(s);
  };
  const line = (s: string = "") => {
    w(s);
    w("\n");
    if (addedLine != removedLine)
    {
      if (removedLine.length > 0)
      {
        out.write("-" + removedLine);
      }
      if (addedLine.length > 0)
      {
        out.write("+" + addedLine);
      }
    }
    else
    {
      out.write(addedLine);
    }
    addedLine = "";
    removedLine = "";
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
    write("[");
    indentBlock(f);
    write("]");
  };

  const r = <T>(d: Diff<T>, rf : (dv: DiffValue<T>) => void, unchanged?: () => void) => {
    if (d.diff == 'replaced')
    {
      const before = d.before;
      if (before != null)
      {
        removedBlock(() => rf(before));
      }

      const after = d.after;
      if (after != null)
      {
        addedBlock(() => rf(after));
      }
    }
    else if (d.diff == 'unchanged' && unchanged )
    {
      unchanged();
    }
    else
    {
      rf(d.value);
    }
  }

  const renderPropertyDiff = (p: DiffValue<ApiProperty>) => {
    r(p.name, v => write(v));
    r(p.optional, v => write(v ? '?' : ''));
    write(": ");
    r(p.value, v => renderValueDiff(v))
    line(",");
  };

  const renderValueDiff = (e: DiffValue<ApiType>) => {
    switch (e.kind) {
      case "array":
        sqbraceBlock(() => r(e.item, renderValueDiff));
        break;
      case "object":
        braceBlock(() => {
          for (const p of e.properties) {
            r(p, renderPropertyDiff, () => {});
          }
        });
        break;
      case "union":
        line();
        indentBlock(() => {
          for (const [i, p] of e.items.entries()) {
            write('| ')
            indentBlock(() => r(p, renderValueDiff));
            if (i != e.items.length - 1)
            {
              line();
            }
          }
        })
        break;
      case 'primitive':
        switch (e.primitive) {
          case "literal":
            write(`'${e.value}'`);
            break;
          default:
            write(e.primitive);
            break;
        }
    }
  };

  const renderEnpointDiff = (e: DiffValue<ApiEndpoint>) => {
    r(e.name, v => line(v));
    r(e.request, renderValueDiff, () => write('{...}'));
    line();
    r(e.response, renderValueDiff, () => write('{...}'));
    line();
  };

  r(diff, d=> {
    for (let endpoint of d.endpoints) {
      r(endpoint, renderEnpointDiff, () => {});
    }
  })
};

const api1 = loadApi(process.argv.at(-2)!);
const api2 = loadApi(process.argv.at(-1)!);
const d = dddd(api1, api2);

renderDiff(d);

export default {};
