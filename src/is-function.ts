/**
 *
 * @param {*} value Value to check
 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
 */
const isFunction = (value: any): boolean => typeof value === 'function';

export default isFunction;
