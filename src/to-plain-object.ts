/**
 *
 * @param {*} value The value to convert
 * @returns {Object} Returns converted object
 */
const toPlainObject = (value: any): Object => {
  const result: Object = {};
  value = Object(value);

  for (const key in value) {
    result[key] = value[key];
  }

  return result;
};

export default toPlainObject;
