/** @format */

/**
 *
 * @param {String} string
 * @param {String[]} array
 * @returns {Boolean}
 */
function isStringPresentInArray(string, array = []) {
  return array.findIndex((route) => route === string) > -1;
}

module.exports = isStringPresentInArray;
