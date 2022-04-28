import { ObjectType } from './types';

/**
 *
 * @param {Object} object The object to iterate over
 * @param {Function} iteratee The function invoked per iteration
 * @returns {Object} Returns the new mapped object
 */
const mapValue = (object: ObjectType, iteratee: Function): ObjectType => {
  object = Object(object)
  const result: ObjectType = {}

  for (const key in object) {
    result[key] = iteratee(object[key], key, object);
  }

  return result;
};

export default mapValue;
