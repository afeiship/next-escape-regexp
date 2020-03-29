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
