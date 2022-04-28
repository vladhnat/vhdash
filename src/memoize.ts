import { ObjectType } from './types';
import isFunction from "./is-function";

/**
 *
 * @param {Function} fn The function to have it's output memoized
 * @param {Function} resolver  The function to resolve the cache key
 * @return {Function} Returns the new memoized function
 */
function memoize(fn: Function, resolver: Function): ObjectType {
  if (!isFunction(fn) || (resolver != null && !isFunction(resolver))) {
    throw new TypeError('Expected a function');
  }

  const memoized: ObjectType = function(...props: Array<any>): ObjectType {
    const key: any = resolver ? resolver.apply(this, props) : props[0];
    const cache = memoized.cache;

    if (cache.has(key)) return cache.get(key);

    const result: ObjectType = fn.apply(this, props);

    memoized.cache = cache.set(key, result) || cache;

    return result;
  }

  memoized.cache = new (memoize.Cache || Map);

  return memoized;
};

memoize.Cache = Map;

export default memoize;
