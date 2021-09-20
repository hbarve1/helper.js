/** @format */
import isFunction from "./isFunction";

describe("isFunction", () => {
  test("1", () => {
    expect(isFunction(isFunction)).toBe(true); //true)
    expect(isFunction(function () {})).toBe(true); //true)
    expect(isFunction(() => {})).toBe(true); //true)
    expect(
      isFunction(() => {
        return 1;
      })
    ).toBe(true); //true
    expect(isFunction(async function asyncFunction() {})).toBe(true); //true)
    expect(isFunction(Array)).toBe(true); //true)
    expect(isFunction(Date)).toBe(true); //true)
    expect(isFunction(Object)).toBe(true); //true)
    expect(isFunction(Number)).toBe(true); //true)
    expect(isFunction(String)).toBe(true); //true)
    expect(isFunction(Symbol)).toBe(true); //true)
    expect(isFunction({})).toBe(false); //false)
    expect(isFunction([])).toBe(false); //false)
    expect(isFunction("function")).toBe(false); //false)
    expect(isFunction(true)).toBe(false); //false)
    expect(isFunction(1)).toBe(false); //false)
    expect(isFunction("Alireza Dezfoolian")).toBe(false); //false)
  });
});
