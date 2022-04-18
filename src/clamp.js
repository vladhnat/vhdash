/**
 *
 * @param {number} number The number to clamp
 * @param {number} lower The lower bound
 * @param {number} upper The upper bound
 * @returns {number} Returns the clamped number
 */
const clamp = (number, lower, upper) => {
  number = +number;
  lower = +lower;
  upper = +upper;
  lower = lower === lower ? lower : 0;
  upper = upper === upper ? upper : 0;

  if (number === number) {
    number = number <= upper ? number : upper;
    number = number >= lower ? number : lower;
  }

  return number;
};

export default clamp;
