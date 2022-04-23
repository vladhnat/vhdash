const reRegExpChar: RegExp = /[\\^$.*+?()[\]{}|]/g;
const reHasRegExpChar: RegExp = RegExp(reRegExpChar.source);

/**
 *
 * @param {string} string The string to escape
 * @returns {string} Returns the escaped string
 */
const escapeRegExp = (string: string = ''): string =>
  reHasRegExpChar.test(string) ? string.replace(reRegExpChar, '\\$&') : string;

export default escapeRegExp;
