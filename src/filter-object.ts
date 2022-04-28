import { ObjectType } from './types';

/**
 *
 * @param {Object} object The object to iterate over
 * @param {Function} predicate The function to invoke per iteration
 * @returns {Array} Returns the new filtered array
 */
const filterObject = (object: ObjectType, predicate: Function): any[] => {
  object = Object(object);
  const result = [];
  const props = Object.keys(object);

  for (const key in props) {
    const value = object[key];

    if (predicate(value, key, object)) {
      result.push(value);
    }
  }

  return result;
};

export default filterObject;
