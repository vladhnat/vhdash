/**
 *
 * @param {string} string The string to inspect
 * @param {string} target The string to search for
 * @param {number} position The position to search from
 * @returns {boolean} Returns `true` if `string` starts with `target`,
 *  else `false`.
 */
const startsWith = (string: string, target: string, position: number = 0): boolean => {
  const { length } = string;

  if (position < 0) {
    position = 0;
  } else if (position > length) {
    position = length;
  }

  target = `${target}`;

  return string.slice(position, position + target.length) == target;
};

export default startsWith;
