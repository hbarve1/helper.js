/** @format */

const getRandomValueFromArray = require("./getRandomValueFromArray");

// TODO: Write better test for this case
describe("", () => {
  test("", () => {
    const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    const result = getRandomValueFromArray(array);

    expect(result).toBeGreaterThanOrEqual(array[0]);
    expect(result).toBeLessThanOrEqual(array[array.length - 1]);
  });
});
