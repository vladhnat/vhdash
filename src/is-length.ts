import isNumber from "./is-number";

const MAX_SAFE_INTEGER = 9007199254740991;

/**
 *
 * @param {*} value The value to check
 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`
 */
const isLength = (value: any): boolean =>
  isNumber(value) && value > -1 && value % 1 === 0 && value <= MAX_SAFE_INTEGER;

export default isLength;
