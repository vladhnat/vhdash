import isString from './is-string.js';

/**
 *
 * @param {*} value The value to compare
 * @param {*} other The other value to compare
 * @returns {boolean} Returns `true` if `value` is greater than `other`,
 *  else `false`.
 */
const gt = (value, other) => {
  if (!(isString(value) && isString(other))) {
    value = +value;
    other = +other;
  }

  return value > other;
};

export default gt;
