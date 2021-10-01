/** @format */

/**
 * @param {String} string
 */
function capitaliseFirstLetter(string) {
  if (typeof string !== "string") throw new Error("Invalid Input.");

  if (string.length === 0) return string;

  if (string.length === 1) return string.toUpperCase();

  return `${string[0].toUpperCase()}${string.slice(1)}`;
}

// function capitalizeFirstLetter(string) {
//   return string.charAt(0).toUpperCase() + string.slice(1);
// }

module.exports = capitaliseFirstLetter;
