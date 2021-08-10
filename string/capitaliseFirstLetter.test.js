/** @format */

const capitaliseFirstLetter = require("./capitaliseFirstLetter");

describe("", () => {
  test("", () => {
    expect(() => capitaliseFirstLetter()).toThrow(Error);
    expect(() => capitaliseFirstLetter()).toThrow("Invalid Input.");

    expect(capitaliseFirstLetter("")).toBe("");
    expect(capitaliseFirstLetter("h")).toBe("H");
    expect(capitaliseFirstLetter("hi there")).toBe("Hi there");
  });
});
