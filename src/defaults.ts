import { ObjectType } from './types';
import eq from './eq';
import isNil from './is-nil';
import isUndefined from './is-undefined';

const objectProto: ObjectType = Object.prototype;
const hasOwnProperty = objectProto.hasOwnProperty

/**
 * @param {Object} object The destination object
 * @param {...Object} [sources] The source objects
 * @returns {Object} Returns `object`
 */
const defaults = (object: ObjectType, ...sources: any[]): ObjectType => {
  object = Object(object);

  for (let i = 0; i <= sources.length; i++) {
    if (isNil(sources[i])) break;

    const source: ObjectType = Object(sources[i]);

    for (const key in source) {
      const value: any = object[key];

      if (
        isUndefined(value) ||
        (eq(value, objectProto[key]) && !hasOwnProperty.call(object, value))
      ) {
        object[key] = source[key];
      }
    }
  }

  return object;
};

export default defaults;
