/**
 *
 * @param {Array} arr The array to iterate over
 * @param {Function} fn The function invoked per iteration
 * @returns {Array} Returns the new filtered array
 */
const filter = (arr = [], fn) => {
  let index = -1;
  const result = [];

  while (++index < arr.length) {
    const value = arr[index];

    if (fn(value, index, arr)) {
      result[index] = value;
    }
  }

  return result;
};

export default filter;
