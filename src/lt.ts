import isString from './is-string';

/**
 *
 * @param {*} value The value to compare
 * @param {*} other The other value to compare
 * @returns {boolean} Returns `true` if `value` is less than `other`, else `false`.
 */
const lt = (value: any, other: any): boolean => {
  if (!(isString(value) && isString(other))) {
    value = +value;
    other = +other;
  }

  return value < other;
};

export default lt;
