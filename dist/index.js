/*!
 * name: @jswork/next-escape-regexp
 * description: Escape regexp for string.
 * homepage: https://github.com/afeiship/next-escape-regexp
 * version: 1.0.0
 * date: 2020-11-22 14:18:41
 * license: MIT
 */

(function () {
  var global = global || this || window || Function('return this')();
  var nx = global.nx || require('@jswork/next');
  var OPERATORS_RE = /[|\\{}()[\]^$+*?.-]/g;
  var REPLACER = '\\$&';

  nx.escapeRegexp = function (inString) {
    return typeof inString === 'string' ? inString.replace(OPERATORS_RE, REPLACER) : inString;
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = nx.escapeRegexp;
  }
})();
