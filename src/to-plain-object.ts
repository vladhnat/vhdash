/**
 *
 * @param {*} value The value to convert
 * @returns {Object} Returns converted object
 */
const toPlainObject = (value: any): { [key: string]: any } => {
  const result: { [key: string]: any } = {};
  value = Object(value);

  for (const key in value) {
    result[key] = value[key];
  }

  return result;
};

export default toPlainObject;
