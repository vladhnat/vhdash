/**
 *
 * @param {Object} prototype The object to inherit from
 * @param {Object} props The properties to assign to the object
 * @returns {Object} Returns the new object
 */
const create = (prototype = {}, props = {}) => {
  prototype = Object(prototype);
  props = Object(props);
  const result = Object.create(prototype);

  return Object.assign(result, props);
};

export default create;
