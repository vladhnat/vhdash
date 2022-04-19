const idCounter = {}
const lodashPrefix = '$lodash$';

/**
 *
 * @param {string} prefix The value to prefix the ID with
 * @returns {string} Returns the unique ID
 */
const uniqueId = (prefix=lodashPrefix) => {
  if (!idCounter[prefix]) idCounter[prefix] = 0;

  const id = ++idCounter[prefix];

  if (prefix === lodashPrefix) return id;

  return `${prefix}${id}`;
};

export default uniqueId;
