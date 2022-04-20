import isFunction from "./is-function";

/**
 *
 * @param {number} n The number of calls before `fn` is invoked
 * @param {Function} fn The function to restrict
 * @returns {Function} Returns the new restricted function
 */
const after = (n: number = n || 0, fn: Function): Function => {
  if (!isFunction(fn)) throw new TypeError('Expected a function');

  return function(...args: any) {
    if (--n < 1) {
      return fn.apply(this, args);
    }
  }
};

export default after;
