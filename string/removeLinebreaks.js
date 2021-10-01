/** @format */

function removeLinebreaks(string) {
  return string.replace(/[\r\n]+/gm, "");
}

module.exports = removeLinebreaks;
