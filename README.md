## Usage

```js
const isNumberEqual = require('is-number-equal');

isNumberEqual(9, 9) // true
isNumberEqual(9, '9') // true
isNumberEqual('9', '9') // true
isNumberEqual(0o11, 9) // true

isNumberEqual(2, 9) // false
isNumberEqual('foo', 'foo') // false
```
