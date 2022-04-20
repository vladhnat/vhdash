/**
 *
 * @param {*} value Value to compare.
 * @returns {boolean} Returns `true` if `value` is object, else `false`.
 */
const isObject = (value: any): boolean => typeof value === 'object';

export default isObject;
