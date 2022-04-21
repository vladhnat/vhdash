import map from "./map"

/**
 *
 * @param {Function[]} iteratees The iteratees to invoke
 * @returns {Function} Returns the new function
 */
const over = (iteratees: Function[]): Function =>
  (function(...props: any[]): any[] {
    return map(iteratees, (iteratee: Function) => iteratee.apply(this, props));
  });

export default over;
