### Install

```shell
npm install --save detect-webworker
```

###Usage:

```js
var isWebWorker = require('detect-webworker');

if (isWebWorker) {
  console.log("Running under Web Worker");
} else {
  console.log("Hello from not a Web Worker env");
}
```

The check is performed as:
```js
module.exports = false;
try {
  module.exports = self instanceof WorkerGlobalScope
} catch(e) {}
```

Inspired from [detect-node](https://github.com/iliakan/detect-node) and idea taken from [this stackoverflow issue](http://stackoverflow.com/questions/7931182/reliably-detect-if-the-script-is-executing-in-a-web-worker)