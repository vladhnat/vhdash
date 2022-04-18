const htmlEscapes = {
  '&': '&amp;',
  '<': '&lt;',
  '>': '&gt;',
  '"': '&quot;',
  "'": '&#39;'
};

const reUnescapedHtml = /[&<>"']/g;
const reHasUnescapedHtml = RegExp(reUnescapedHtml.source);

/**
 *
 * @param {String} string The string to escape
 * @returns {String} Returns escaped string
 */
const escape = (string = '') => reHasUnescapedHtml.test(string)
  ? string.replace(reUnescapedHtml, (chr) => htmlEscapes[chr]) :
  string;

export default escape;
