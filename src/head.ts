/**
 *
 * @param {Array} arr The array to query
 * @returns {number} Returns the first element of passed array
 */
const head = (arr: Array<number>): number => {
  if (!Array.isArray(arr)) throw new TypeError('Expected an array');

  return arr[0];
};

export default head;
