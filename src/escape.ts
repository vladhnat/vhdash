const htmlEscapes: Object = {
  '&': '&amp;',
  '<': '&lt;',
  '>': '&gt;',
  '"': '&quot;',
  "'": '&#39;'
};

const reUnescapedHtml: RegExp = /[&<>"']/g;
const reHasUnescapedHtml: RegExp = RegExp(reUnescapedHtml.source);

/**
 *
 * @param {String} string The string to escape
 * @returns {String} Returns escaped string
 */
const escape = (string: string = ''): string => reHasUnescapedHtml.test(string)
  ? string.replace(reUnescapedHtml, (chr: any) => htmlEscapes[chr]) :
  string;

export default escape;
