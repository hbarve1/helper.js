/** @format */

const isStringPresentInArray = require("./isStringPresentInArray");

describe("", () => {
  test("", () => {
    const string = "hi";
    const array = ["hi", "by", "this"];

    const result = isStringPresentInArray(string, array);

    expect(result).toBe(true);
  });

  test("", () => {
    const string = "hii";
    const array = ["hi", "by", "this"];

    const result = isStringPresentInArray(string, array);

    expect(result).toBe(false);
  });
});
