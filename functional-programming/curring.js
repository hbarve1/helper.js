/** @format */

function curry(func) {
  return function curried(...args) {
    if (args.length >= func.length) {
      return func.apply(this, args);
    } else {
      return function (...args2) {
        curried.apply(this, args.concat(args2));
      };
    }
  };
}
