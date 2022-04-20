const idCounter: Object = {}
const lodashPrefix: string = '$lodash$';

/**
 *
 * @param {string} prefix The value to prefix the ID with
 * @returns {string} Returns the unique ID
 */
const uniqueId = (prefix: string = lodashPrefix): string => {
  if (!idCounter[prefix]) idCounter[prefix] = 0;

  const id: string = ++idCounter[prefix];

  if (prefix === lodashPrefix) return id;

  return `${prefix}${id}`;
};

export default uniqueId;
