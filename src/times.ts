const MAX_SAFE_INTEGER: number = 9007199254740991;
const MAX_ARRAY_LENGTH: number = 4294967295;

/**
 *
 * @param {number} n The number to invoke `iteratee`
 * @param {Function} iteratee The function invoked per iteration
 * @returns {Array} Returns the array of results
 */
const times = (n: number, iteratee: Function): Array<any> => {
  if (n < 1 || n > MAX_SAFE_INTEGER) return [];

  let index: number = -1;
  const length: number = Math.min(n, MAX_ARRAY_LENGTH);
  const result: Array<number> = new Array(length);

  while (++index < length) {
    result[index] = iteratee(index);
  }

  index = MAX_ARRAY_LENGTH;
  n -= MAX_ARRAY_LENGTH;

  while (++index < n) {
    iteratee(index);
  }

  return result;
};

export default times;
