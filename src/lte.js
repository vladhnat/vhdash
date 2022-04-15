import isString from './is-string';

/**
 *
 * @param {*} value The value to compare
 * @param {*} other The other value to compare
 * @returns {boolean} Returns `true` if `value` is less than or equal to
 *  `other`, else `false`.
 */
const lte = (value, other) => {
  if (!(isString(value) && isString(other))) {
    value = +value;
    other = +other;
  }

  return value <= other;
};

export default lte;
