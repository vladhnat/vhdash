import { ObjectType } from './types';
import isNull from './is-null';

/**
 *
 * @param {Object} object The object to iterate over
 * @param {Function} iteratee The function invoked per iteration
 * @returns {Object} Returns `object`
 */
const forOwnRight = (object: ObjectType, iteratee: Function): ObjectType => {
  if (isNull(object)) return;

  const props = Object.keys(object);
  let length = props.length;

  while(length--) {
    iteratee(object[props[length]], iteratee, object);
  }
};

export default forOwnRight;
