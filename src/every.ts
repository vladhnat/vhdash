import isFunction from "./is-function";

/**
 *
 * @param {Array} arr The array to iterate
 * @param {Function} fn The function invoked per iteration
 * @returns {boolean} Returns `true` if all elements pass the fn check,
 *  else `false`.
 */
const every = (arr: Array<any> = [], fn: Function): boolean => {
  if (!isFunction(fn)) throw new TypeError('Expected a function');

  let index: number = -1;

  while(++index < arr.length) {
    if (!fn(arr[index], index, arr)) return false;
  }

  return true;
};

export default every;
