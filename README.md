# next-escape-regexp
> Escape regexp for string.

[![version][version-image]][version-url]
[![license][license-image]][license-url]
[![size][size-image]][size-url]
[![download][download-image]][download-url]

## installation
```bash
npm install -S @jswork/next-escape-regexp
```

## usage
```js
import '@jswork/next-escape-regexp';

const str = 'How much $ for a 🦄?';
const res = nx.escapeRegexp(str);

// result:
// How much \\$ for a 🦄\\?
```

## license
Code released under [the MIT license](https://github.com/afeiship/next-escape-regexp/blob/master/LICENSE.txt).

[version-image]: https://img.shields.io/npm/v/@jswork/next-escape-regexp
[version-url]: https://npmjs.org/package/@jswork/next-escape-regexp

[license-image]: https://img.shields.io/npm/l/@jswork/next-escape-regexp
[license-url]: https://github.com/afeiship/next-escape-regexp/blob/master/LICENSE.txt

[size-image]: https://img.shields.io/bundlephobia/minzip/@jswork/next-escape-regexp
[size-url]: https://github.com/afeiship/next-escape-regexp/blob/master/dist/next-escape-regexp.min.js

[download-image]: https://img.shields.io/npm/dm/@jswork/next-escape-regexp
[download-url]: https://www.npmjs.com/package/@jswork/next-escape-regexp
