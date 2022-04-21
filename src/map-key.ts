/**
 *
 * @param {Object} object The object to iterate over
 * @param {Function} iteratee The function invoked per iteration
 * @returns {Object} Returns the new mapped object
 */
const mapKey = (object: { [key: string]: any }, iteratee: Function): Object => {
  object = Object(object);
  const result: { [key: string]: any } = {};

  for (const key in object) {
    const value: any = object[key];

    result[iteratee(value, key, object)] = value;
  }

  return result;
};

export default mapKey;
