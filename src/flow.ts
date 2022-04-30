import isFunction from "./is-function";

/**
 *
 * @param {Function[]} fncs The functions to invoke
 * @returns {Function} Returns the new composite function
 */
const flow = (...fncs: Function[]): Function => {
  const length = fncs.length;
  let index = length;

  while (index--) {
    if (!isFunction(fncs[index])) {
      throw new TypeError('Expected a function')
    }
  }

  return function(...args: any[]) {
    let index = 0;
    let result = length ? fncs[index].apply(this, args) : args[0];

    while (++index < length) {
      result = fncs[index].call(this, result);
    }

    return result;
  };
};


export default flow;
