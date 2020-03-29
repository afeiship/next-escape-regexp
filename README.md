# next-escape-regexp
> Escape regexp for string.

## installation
```bash
npm install -S @feizheng/next-escape-regexp
```

## usage
```js
import '@feizheng/next-escape-regexp';

const str = 'How much $ for a 🦄?';
const res = nx.escapeRegexp(str);

// result:
// How much \\$ for a 🦄\\?
```
## resources
- https://www.w3school.com.cn/jsref/jsref_replace.asp
- https://github.com/sindresorhus/escape-string-regexp
