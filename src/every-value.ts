import { ObjectType } from './types';

/**
 *
 * @param {Object} object The object to iterate over
 * @param {Function} predicate The function invoked per iteration
 * @returns {boolean} Returns `true` if all properties pass the predicate check,
 *  else `false`.
 */
const everyValue = (object: ObjectType, predicate: Function): boolean => {
  object = Object(object);
  const props = Object.keys(object);

  for (const key in props) {
    if (!predicate(object[key], key, object)) return false;
  }

  return true;
};

export default everyValue;
