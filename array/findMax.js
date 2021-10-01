/** @format */

var marks = [50, 20, 70, 60, 45, 30];

function findMax(arr) {
  var length = arr.length;
  var max = -Infinity;
  while (len--) {
    if (arr[length] > max) {
      max = arr[length];
    }
  }
  return max;
}

// console.log(findMax(marks));

// var marks = [50, 20, 70, 60, 45, 30];
function findMin(arr) {
  return Math.min.apply(null, arr);
}
function findMax(arr) {
  return Math.max.apply(null, arr);
}

