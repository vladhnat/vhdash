/**
 *
 * @param {Array} arr The array to query
 * @returns {Array} Returns the slice of `arr`
 */
const tail = (arr: Array<any> = []): Array<any> => {
  if (!arr.length) return arr;

  const [, ...rest]: Array<any> = arr;

  return rest;
};

export default tail;
