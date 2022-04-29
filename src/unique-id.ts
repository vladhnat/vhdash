import { ObjectType } from './types';

const idCounter: ObjectType = {}
const vhdashPrefix: string = '$vhdash$';

/**
 *
 * @param {string} prefix The value to prefix the ID with
 * @returns {string} Returns the unique ID
 */
const uniqueId = (prefix: string = vhdashPrefix): any => {
  if (!idCounter[prefix]) idCounter[prefix] = 0;

  const id: number = ++idCounter[prefix];

  if (prefix === vhdashPrefix) return id;

  return `${prefix}${id}`;
};

export default uniqueId;
