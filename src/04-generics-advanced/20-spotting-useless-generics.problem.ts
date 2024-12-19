import { expect, it } from "vitest";
import { Equal, Expect } from "../helpers/type-utils";

const returnBothOfWhatIPassIn = <TProps extends { a: unknown, b: unknown }>(params: TProps): [TProps['a'], TProps['b']] => {
  return [params.a, params.b];
};

it("Should return a tuple of the properties a and b", () => {
  const result = returnBothOfWhatIPassIn({
    a: 1,
    b: 'a',
  });

  expect(result).toEqual([1, 'a']);

  type test1 = Expect<Equal<typeof result, [number, string]>>;
});
