import isFunction from "./is-function";

/**
 *
 * @param {number} n The number of calls at which `fn` is no longer invoked
 * @param {Function} fn The function to restrict
 * @returns {Function} Returns the new restricted function
 */
const before = (n, fn) => {
  if (!isFunction(fn)) throw new TypeError('Expected a function');

  let result;

  return function(...args) {
    if (--n > 0) {
      result = func.apply(this, args);
    }
    if (n <= 1) {
      fn = undefined;
    }
    return result;
  }
};

export default before;
