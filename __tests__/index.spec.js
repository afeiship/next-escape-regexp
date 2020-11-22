(function () {
  require('../src');

  describe('api.basic test', () => {
    test('nx.escapeRegexp', function () {
      const str = 'How much $ for a 🦄?';
      const res = nx.escapeRegexp(str);
      expect(res).toBe(`How much \\$ for a 🦄\\?`);
    });
  });
})();
