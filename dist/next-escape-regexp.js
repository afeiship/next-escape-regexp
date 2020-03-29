/*!
 * name: @feizheng/next-escape-regexp
 * description: Escape regexp for string.
 * url: https://github.com/afeiship/next-escape-regexp
 * version: 1.0.0
 * date: 2020-03-29 11:22:38
 * license: MIT
 */

(function () {
  var global = global || this || window || Function('return this')();
  var nx = global.nx || require('@feizheng/next-js-core2');
  var OPERATORS_RE = /[|\\{}()[\]^$+*?.-]/g;
  var REPLACER = '\\$&';

  nx.escapeRegexp = function (inString) {
    return typeof inString === 'string'
      ? inString.replace(OPERATORS_RE, REPLACER)
      : inString;
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = nx.escapeRegexp;
  }
})();

//# sourceMappingURL=next-escape-regexp.js.map
