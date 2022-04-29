import isFunction from "./is-function";

/**
 *
 * @param {Function} fn  The function to flip arguments for
 * @returns {Function} Return the new flipped function
 */
const flip = (fn: Function): Function => {
  if (!isFunction(fn)) {
    throw new TypeError("Expected a function");
  }

  return function(...args: any[]): Function {
    return fn.apply(this, args.reverse());
  }
};

export default flip;
