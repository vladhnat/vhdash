/**
 *
 * @param  {...*} props The value to inspect
 * @returns {Array} Returns the cast array
 */
const castArray = (...props) => {
  if (!props.length) return [];

  const value = props[0];

  return Array.isArray(value) ? value : [value];
};

export default castArray;
