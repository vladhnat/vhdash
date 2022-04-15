/**
 *
 * @param {Object} object The object to iterate over
 * @param {Function} iteratee The function invoked per iteration
 * @returns {Object} Returns the new mapped object
 */
const mapKey = (object, iteratee) => {
  object = Object(object);
  const result = {};

  for (const key in object) {
    const value = object[key];

    result[iteratee(value, key, object)] = value;
  }

  return result;
};

export default mapKey;
