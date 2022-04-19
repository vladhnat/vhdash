const htmlUnescapes = {
  '&amp;': '&',
  '&lt;': '<',
  '&gt;': '>',
  '&quot;': '"',
  '&#39;': "'"
}

const reEscapedHtml = /&(?:amp|lt|gt|quot|#(0+)?39);/g;
const reHasEscapedHtml = RegExp(reEscapedHtml.source);

/**
 *
 * @param {string} string The string to unescape
 * @returns {string} Returns unescaped string
 */
const unescape = (string = '') =>
  reHasEscapedHtml.test(string) ?
  string.replace(reEscapedHtml, (entity) => (htmlUnescapes[entity] || "'")) :
  string;

export default unescape;
