/**
 *
 * @param {Array} arr The array to compact
 * @returns {Array} Compacted array
 */
const compact = (arr) => {
  let index = 0;
  const result = [];

  if (arr === null) return result;

  for (const value of arr) {
    if (value) {
      result[index++] = value;
    }
  }

  return result;
};

export default compact;
