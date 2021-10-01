/** @format */

function flattenMultiArray(arr) {
  const flattened = [].concat(...arr);

  return flattened.some((item) => Array.isArray(item))
    ? flattenMultiArray(flattened)
    : flattened;
}

module.exports = flattenMultiArray;
