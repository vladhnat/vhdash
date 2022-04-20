/**
 *
 * @param {string} [string=''] The string to inspect
 * @param {string} [target] The string to search for
 * @param {number} [position=string.length] The position to search up to
 * @returns {boolean} Returns `true` if `string` ends with `target`,
 *  else `false`.
 */
const endsWith = (string: string, target: string, position: number): boolean => {
  const { length } = string;

  position = position === undefined ? length : +position;

  if (position < 0 || position != position) {
    position = 0;
  } else if (position > length) {
    position = length;
  }

  const end: number = position;

  position -= target.length;

  return position >= 0 && string.slice(position, end) == target;
};

export default endsWith;
