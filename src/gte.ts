import isString from './is-string.js';

/**
 *
 * @param {*} value The value to compare
 * @param {*} other The other value to compare
 * @returns {boolean} Returns `true` if `value` is greater than or equal to
 *  `other`, else `false`.
 */
const gte = (value: any, other: any): boolean => {
  if (!(isString(value) && isString(other))) {
    value = +value;
    other = +other;
  }

  return value >= other;
};

export default gte;
