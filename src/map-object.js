/**
 *
 * @param {Object} object The object to iterate over
 * @param {Function} iteratee The function invoked per iteration
 * @returns {Array} Returns the new mapped array
 */
const mapObject = (object, iteratee) => {
  const keys = Object.keys(object);
  const result = new Array(keys.length);

  for (const key in keys) {
    const value = keys[key];

    result[key] = iteratee(object[value], value, object);
  }

  return result;
};

export default mapObject;
