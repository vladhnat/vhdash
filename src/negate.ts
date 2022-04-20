import isFunction from "./is-function";

/**
 *
 * @param {Function} fn The predicate to negate
 * @returns {Function} Returns the new negated function.
 */
const negate = (fn: Function): Function => {
  if (!isFunction(fn)) throw new TypeError('Expected a function');

  return function(...args: any) {
    return !fn.apply(this, args);
  };
};

export default negate;
