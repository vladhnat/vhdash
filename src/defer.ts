import isFunction from './is-function';

/**
 *
 * @param {Function} fn The function to put in stack
 * @param  {...*} props The rest props to invoke with function
 * @returns {number} Returns the timer id
 */
const defer = (fn: Function, ...props: any): number => {
  if (!isFunction(fn)) throw new TypeError('Expected a function');

  return setTimeout(fn, 1, ...props);
};

export default defer;
