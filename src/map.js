/**
 *
 * @param {Array} array The array to iterate over
 * @param {Function} iteratee The function invoked per iteration
 * @returns {Array} Returns the new mapped array
 */
const map = (arr = [], iteratee) => {
  let index = -1;
  const length = arr.length;
  const result = new Array(length);

  while(++index < length) {
    result[index] = iteratee(arr[index], index, arr);
  }

  return result;
};

export default map;
