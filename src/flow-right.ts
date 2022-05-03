import flow from './flow';

/**
 *
 * @param {Function[]} fns The functions to invoke
 * @returns {Function} Returns the new composite function
 */
const flowRight = (...fns: Function[]): Function =>
  flow(...fns.reverse());

export default flowRight;
