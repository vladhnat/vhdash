/**
 *
 * @param {Array} arr The array to query
 * @returns {Array} Returns the slice of `arr`
 */
const tail = (arr = []) => {
  if (!arr.length) return arr;

  const [, ...rest] = arr;

  return rest;
};

export default tail;
