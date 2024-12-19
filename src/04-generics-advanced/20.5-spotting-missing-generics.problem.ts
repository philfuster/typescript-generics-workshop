import { Equal, Expect } from "../helpers/type-utils";

const getValue = <TObj, TKey extends keyof TObj>(obj: TObj, key: TKey): TObj[TKey] => {
  return obj[key];
};

const obj = {
  a: 1,
  b: "some-string",
  c: true,
  d: new Date()
};

const numberResult = getValue(obj, "a");
const stringResult = getValue(obj, "b");
const booleanResult = getValue(obj, "c");
const dateResult = getValue(obj, 'd')

type tests = [
  Expect<Equal<typeof numberResult, number>>,
  Expect<Equal<typeof stringResult, string>>,
  Expect<Equal<typeof booleanResult, boolean>>,
  Expect<Equal<typeof dateResult, Date>>,
];

export { };
