/**
 *
 * @param {Array} arr The array to compact
 * @returns {Array} Compacted array
 */
const compact = (arr: Array<any>): Array<any> => {
  let index: number = 0;
  const result: Array<any> = [];

  if (arr === null) return result;

  for (const value of arr) {
    if (value) {
      result[index++] = value;
    }
  }

  return result;
};

export default compact;
