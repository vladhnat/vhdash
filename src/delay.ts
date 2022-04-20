import isFunction from "./is-function";

/**
 *
 * @param {Function} fn The function to delay
 * @param {number} wait The number of milliseconds to delay invocation
 * @param  {...*} props The arguments to invoke `fn` with
 * @returns {number} Returns the timer id
 */
const delay = (fn: Function, wait: number, ...props: any): number => {
  if (!isFunction(fn)) throw new TypeError('Expected a function');

  return setTimeout(fn, +wait || 0, ...props);
};

export default delay;
