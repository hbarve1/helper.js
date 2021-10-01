/** @format */

// Using Object entries(ECMA 7+): You can use object entries length along with constructor type.
function isEmpty(obj) {
  // Since date object length is 0, you need to check constructor check as well
  return Object.entries(obj).length === 0 && obj.constructor === Object;
}

// Using Object keys(ECMA 5+): You can use object keys length along with constructor type.
// function isEmpty(obj) {
//   // Since date object length is 0, you need to check constructor check as well
//   return Object.keys(obj).length === 0 && obj.constructor === Object;
// }

// Using for-in with hasOwnProperty(Pre-ECMA 5): You can use a for-in loop along with hasOwnProperty.
// function isEmpty(obj) {
//   for (var prop in obj) {
//     if (obj.hasOwnProperty(prop)) {
//       return false;
//     }
//   }

//   return JSON.stringify(obj) === JSON.stringify({});
// }

module.exports = isEmpty;
