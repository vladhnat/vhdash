import { ObjectType } from './types';
import isNull from './is-null';

/**
 *
 * @param {Object} object The object to inspect
 * @param {Function} predicate The function invoked per iteration
 * @returns {string|undefined} Returns the key of the matched element,
 *  else `undefined`.
 */
function findKey(object: ObjectType, predicate: Function): string | undefined {
  let result;

  if (isNull(object)) return result;

  Object.keys(object).some((key: string): boolean => {
    const value = object[key];

    if (predicate(value, key, object)) {
      result = key;
      return true;
    }
  });

  return result;
}

export default findKey;
