/**
 *
 * @param {*} value The value to compare
 * @param {*} other The other value to compare
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 */
const eq = (value, other) => value === other || (value !== value && other !== other);

export default eq;
