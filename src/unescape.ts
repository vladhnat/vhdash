const htmlUnescapes: { [key: string]: string } = {
  '&amp;': '&',
  '&lt;': '<',
  '&gt;': '>',
  '&quot;': '"',
  '&#39;': "'"
}

const reEscapedHtml: RegExp = /&(?:amp|lt|gt|quot|#(0+)?39);/g;
const reHasEscapedHtml: RegExp = RegExp(reEscapedHtml.source);

/**
 *
 * @param {string} string The string to unescape
 * @returns {string} Returns unescaped string
 */
const unescape = (string: string = ''): string =>
  reHasEscapedHtml.test(string) ?
  string.replace(reEscapedHtml, (entity: any) => (htmlUnescapes[entity] || "'")) :
  string;

export default unescape;
