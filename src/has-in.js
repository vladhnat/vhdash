import isObject from './is-object';

/**
 *
 * @param {Object} object The object to query
 * @param {string} key The key to check
 * @returns {boolean} Returns `true` if `key` exists, else `false`
 */
const hasIn = (object, key) => {
  if (!isObject(object)) throw new TypeError('Expected an object');

  return key in object;
};

export default hasIn;
