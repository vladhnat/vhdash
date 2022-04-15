/**
 *
 * @param {Object} object The object to iterate over
 * @param {Function} iteratee The function invoked per iteration
 * @returns {Object} Returns the new mapped object
 */
const mapValue = (object, iteratee) => {
  object = Object(object)
  const result = {}

  for (const key in object) {
    result[key] = iteratee(object[key], key, object);
  }

  return result;
};

export default mapValue;
