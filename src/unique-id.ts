import { ObjectType } from './types';

const idCounter: ObjectType = {}
const lodashPrefix: string = '$lodash$';

/**
 *
 * @param {string} prefix The value to prefix the ID with
 * @returns {string} Returns the unique ID
 */
const uniqueId = (prefix: string = lodashPrefix): any => {
  if (!idCounter[prefix]) idCounter[prefix] = 0;

  const id: number = ++idCounter[prefix];

  if (prefix === lodashPrefix) return id;

  return `${prefix}${id}`;
};

export default uniqueId;
