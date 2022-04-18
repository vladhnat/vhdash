import isNull from "./is-null";

/**
 *
 * @param {*} value The value to check
 * @param {*} defaultValue The default value
 * @returns {*} Returns the resolved value
 */
const defaultTo = (value, defaultValue) => (isNull(value) || value !== value) ? defaultValue : value;

export default defaultTo;
