/**
 *
 * @param {Array} array The array to iterate over
 * @param {Function} iteratee The function invoked per iteration
 * @returns {Array} Returns the new mapped array
 */
const map = (arr: Array<any> = [], iteratee: Function): Array<any> => {
  let index: number = -1;
  const length: number = arr.length;
  const result: Array<any> = new Array(length);

  while(++index < length) {
    result[index] = iteratee(arr[index], index, arr);
  }

  return result;
};

export default map;
