import { ObjectType } from './types';

/**
 *
 * @param {Object} object The object to iterate over
 * @param {Function} iteratee The function invoked per iteration
 */
const forOwn = (object: ObjectType, iteratee: Function): void => {
  object = Object(object);
  Object.keys(object).forEach((key: string | number): void => iteratee(object[key], key, object));
};

export default forOwn;
