import isFunction from "./is-function";

/**
 *
 * @param {number} n The number of calls at which `fn` is no longer invoked
 * @param {Function} fn The function to restrict
 * @returns {Function} Returns the new restricted function
 */
const before = (n: number, fn: Function): Function => {
  if (!isFunction(fn)) throw new TypeError('Expected a function');

  let result: Function;

  return function(...args: any) {
    if (--n > 0) {
      result = fn.apply(this, args);
    }
    if (n <= 1) {
      fn = undefined;
    }
    return result;
  }
};

export default before;
