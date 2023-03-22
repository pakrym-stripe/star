import Diff from "./diff";

export type Diffable =
    | DiffPrimitive
    | {
    [s: string]: Diffable | Array<Diffable>;
};

export type DiffPrimitive =
    | {
    kind: "primitive";
    [s: string]: DiffPrimitive;
}
    | boolean
    | string
    | null;

export type DiffProperties<T> = {
    [P in keyof T]: P extends "kind"
        ? T[P]
        : T[P] extends (infer U)[]
            ? Diff<U>[]
            : Diff<T[P]>;
};

export type DiffValue<T> =
    | Extract<T, DiffPrimitive>
    | DiffProperties<Exclude<T, DiffPrimitive>>;

export type Diff<T> =
    | (T extends DiffPrimitive
    ? never
    : {
        diff: "changed";
        value: DiffValue<T>;
    })
    | {
    diff: "replaced";
    before: DiffValue<T> | null;
    after: DiffValue<T> | null;
}
    | {
    diff: "unchanged";
    value: DiffValue<T>;
};

export const dddd = <T>(before: T, after: T): Diff<T> => {
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

    const isPrimitive = (v: unknown): v is DiffPrimitive => {
        return (
            v == null ||
            typeof v == "string" ||
            typeof v == "boolean" ||
            (typeof v == "object" && "kind" in v && v.kind == "primitive")
        );
    };

    const isComposite = (
        v: unknown
    ): v is { kind: string; [s: string]: Diffable } => {
        return !isPrimitive(v);
    };

    const wrapIntoUnchanged = <K>(v: K): DiffValue<K> => {
        if (isComposite(v)) {
            const diffObj: any = {};
            for (const k of Object.keys(v)) {
                const vv = v[k];
                if (Array.isArray(vv))
                {
                    diffObj[k] = vv.map(vvv => ({
                        diff: "unchanged",
                        value: wrapIntoUnchanged(vvv),
                    }))
                }
                else
                {
                    diffObj[k] = {
                        diff: "unchanged",
                        value: wrapIntoUnchanged(vv),
                    };
                }
            }
            if (v.kind)
            {
                diffObj.kind = v.kind;
            }
            return diffObj;
        } else {
            return v as any;
        }
    };

    if (isComposite(before) && isComposite(after) && before.kind == after.kind) {
        const allKeys = new Set<string>([
            ...Object.keys(before),
            ...Object.keys(after),
        ]);
        const diffObj: any = {};
        let changed = false;
        for (const k of allKeys) {
            const pb = before[k];
            const pa = after[k];

            if (Array.isArray(pb) && Array.isArray(pa)) {
                const named = [...pa, ...pb].every(
                    (o) => typeof o === "object" && "name" in o
                );

                if (named) {
                    // Do name based matching
                    const b = Object.fromEntries<T>(pb.map((i) => [i.name, i]));
                    const bKeys = Object.keys(b);
                    if (bKeys.length != pb.length) {
                        throw new Error("non unique before keys");
                    }
                    const a = Object.fromEntries<T>(pa.map((i) => [i.name, i]));
                    const aKeys = Object.keys(a);
                    if (aKeys.length != pa.length) {
                        throw new Error("non unique after keys");
                    }
                    const allKeys = Array.from(new Set([...aKeys, ...bKeys]));
                    const diffs = allKeys.map((k) => dddd(b[k], a[k]));
                    if (!diffs.every((d) => d.diff == "unchanged")) {
                        changed = true;
                    }
                    diffObj[k] = diffs;
                }
                else if (pa.every(isPrimitive) && pb.every(isPrimitive)) {
                    // Do value based matching
                    const befores = [...pb];
                    const afters = [...pa];
                    const diffs : Diff<any>[] = [];

                    for (const b of befores) {
                        const aaa = afters.find(a => deepEqual(a, b));
                        if (aaa)
                        {
                            afters.splice(afters.indexOf(aaa), 1);
                            diffs.push(dddd(b, aaa))
                        }
                        else
                        {
                            diffs.push(dddd(b, null))
                        }
                    }

                    diffs.push(...afters.map(a => dddd(null, a)));

                    if (!diffs.every((d) => d.diff == "unchanged")) {
                        changed = true;
                    }
                    diffObj[k] = diffs;
                } else {
                    // TODO: THIS IS BROKEN!
                    const diffs = [
                        ...pa.map((p) => dddd(p, p)),
                        ...pb.map((p) => dddd(p, p)),
                    ];
                    if (!diffs.every((d) => d.diff == "unchanged")) {
                        changed = true;
                    }
                    diffObj[k] = diffs;
                }
            } else {
                const pd = dddd(pb, pa);
                if (pd.diff != "unchanged") {
                    changed = true;
                }
                diffObj[k] = pd;
            }
        }

        diffObj.kind = before.kind;

        return {
            diff: changed ? "changed" : "unchanged",
            value: diffObj,
        } as any;
    }

    if (isPrimitive(before) && isPrimitive(after)) {
        if (deepEqual(before, after)) {
            return {
                diff: "unchanged",
                value: after as any,
            };
        } else {
            return {
                diff: "replaced",
                before: before as any,
                after: after as any,
            };
        }
    }

    return {
        diff: "replaced",
        before: wrapIntoUnchanged(before),
        after: wrapIntoUnchanged(after),
    };
};
