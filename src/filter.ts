/**
 *
 * @param {Array} arr The array to iterate over
 * @param {Function} fn The function invoked per iteration
 * @returns {Array} Returns the new filtered array
 */
const filter = (arr: Array<any> = [], fn: Function): Array<any> => {
  let index: number = -1;
  const result: Array<any> = [];

  while (++index < arr.length) {
    const value: any = arr[index];

    if (fn(value, index, arr)) {
      result[index] = value;
    }
  }

  return result;
};

export default filter;
