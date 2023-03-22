import {dddd, Diff} from './dddd'

describe('primitive bool', () => {
    test('not equal', () => {
        expect(dddd(true, false)).toEqual({
            diff: 'replaced',
            before: true,
            after: false,
        });
    });
    test('equal', () => {
        expect(dddd(true, true)).toEqual({
            diff: 'unchanged',
            value: true,
        });
    });
});

describe('primitive string', () => {
    test('not equal', () => {
        expect(dddd("a", "b")).toEqual({
            diff: 'replaced',
            before: "a",
            after: "b",
        });
    });
    test('equal', () => {
        expect(dddd("a", "a")).toEqual({
            diff: 'unchanged',
            value: "a",
        });
    });
});

describe('primitive object', () => {
    test('not equal', () => {
        expect(dddd({
            kind: 'primitive',
            value: 'a'
        }, {
            kind: 'primitive',
            value: 'b'
        })).toEqual({
            diff: 'replaced',
            before: {
                kind: 'primitive',
                value: 'a'
            },
            after: {
                kind: 'primitive',
                value: 'b'
            },
        });
    });
    test('equal', () => {
        expect(dddd({
            kind: 'primitive',
            value: 'a'
        }, {
            kind: 'primitive',
            value: 'a'
        })).toEqual({
            diff: 'unchanged',
            value: {
                kind: 'primitive',
                value: 'a'
            },
        });
    });
});

describe('object', () => {
    test('not equal', () => {
        expect(dddd({
            kind: 'obj',
            value: 'a'
        }, {
            kind: 'obj',
            value: 'b'
        })).toEqual({
            diff: 'changed',
            value: {
                kind: 'obj',
                value: {
                    diff: 'replaced',
                    before: 'a',
                    after: 'b'
                }
            },
        });
    });
    test('equal', () => {
        type A = { kind: 'obj', value: string};
        expect(dddd<A>({
            kind: 'obj',
            value: 'a'
        }, {
            kind: 'obj',
            value: 'a'
        })).toEqual<Diff<A>>({
            diff: 'unchanged',
            value: {
                kind: 'obj',
                value: {
                    diff: 'unchanged',
                    value: 'a',
                }
            },
        } satisfies Diff<A>);
    });
});

describe('object with named list', () => {
    const before = {
        kind: 'obj',
        value: [
            {
                kind: 'sub',
                name: 'a',
                value: 'a'
            }
        ]
    };

    test('not equal', () => {
        const after = deepClone(before);
        after.value[0].value = 'b';

        expect(dddd(before, after)).toEqual({
            diff: 'changed',
            value: {
                kind: 'obj',
                value: [
                    {
                        diff: 'changed',
                        value: {
                            kind: 'sub',
                            name: {
                                diff: 'unchanged',
                                value: 'a'
                            },
                            value: {
                                diff: 'replaced',
                                before: 'a',
                                after: 'b'
                            }
                        }
                    }
                ]
            },
        } satisfies Diff<typeof after>);
    });
    test('equal', () => {
        const after = deepClone(before)
        expect(dddd(before, after)).toEqual({
            diff: 'unchanged',
            value: {
                kind: 'obj',
                value: [
                    {
                        diff: 'unchanged',
                        value: {
                            kind: 'sub',
                            name: {
                                diff: 'unchanged',
                                value: 'a'
                            },
                            value: {
                                diff: 'unchanged',
                                value: 'a',
                            }
                        }
                    }
                ]
            },
        } satisfies Diff<typeof after>);
    });
});

describe('object with primitive list', () => {
    const before = {
        kind: 'obj',
        value: [
            {
                kind: 'primitive' as const,
                primitive: 'string',
            },
        ]
    };

    test('not equal', () => {
        const after = deepClone(before);
        after.value[0].primitive = 'boolean';

        expect(dddd(before, after)).toEqual({
            diff: 'changed',
            value: {
                kind: 'obj',
                value: [
                    {
                        diff: 'replaced',
                        before: {
                            kind: 'primitive',
                            primitive: 'string'
                        },
                        after: null
                    },

                    {
                        diff: 'replaced',
                        before: null,
                        after: {
                            kind: 'primitive',
                            primitive: 'boolean'
                        }
                    },

                ]
            },
        } satisfies Diff<typeof after>);
    });
    test('equal', () => {
        const after = deepClone(before)

        expect(dddd(before, after)).toEqual({
            diff: 'unchanged',
            value: {
                kind: 'obj',
                value: [
                    {
                        diff: 'unchanged',
                        value: {
                            kind: 'primitive',
                            primitive: 'string'
                        }
                    },
                ]
            },
        } satisfies Diff<typeof after>);
    });
});


describe('object with composite list', () => {
    const before = {
        kind: 'obj',
        value: [
            {
                kind: 'sub' as const,
                prop: 'string',
            },
        ]
    };

    test('not equal', () => {
        const after = deepClone(before);
        after.value[0].prop = 'boolean';

        expect(dddd(before, after)).toEqual({
            diff: 'changed',
            value: {
                kind: 'obj',
                value: [
                    {
                        diff: 'replaced',
                        before: null,
                        after: {
                            kind: 'sub',
                            prop: {
                                diff: 'unchanged',
                                value: 'boolean'
                            }
                        }
                    },

                    {
                        diff: 'replaced',
                        before: {
                            kind: 'sub',
                            prop:  {
                                diff: 'unchanged',
                                value: 'string'
                            }
                        },
                        after: null
                    }
                ]
            },
        } satisfies Diff<typeof after>);
    });
    test('equal', () => {
        const after = deepClone(before)

        expect(dddd(before, after)).toEqual({
            diff: 'changed',
            value: {
                kind: 'obj',
                value: [
                    {
                        diff: 'replaced',
                        before: null,
                        after: {
                            kind: 'sub',
                            prop: {
                                diff: 'unchanged',
                                value: 'string'
                            }
                        }
                    },

                    {
                        diff: 'replaced',
                        before: {
                            kind: 'sub',
                            prop:  {
                                diff: 'unchanged',
                                value: 'string'
                            }
                        },
                        after: null
                    }
                ]
            },
        } satisfies Diff<typeof after>);
    });
});

const deepClone = <T>(o: T):T => JSON.parse(JSON.stringify(o));
