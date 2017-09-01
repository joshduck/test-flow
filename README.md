# test-flow

```
npm install
npm run bootstrap

npm run start
> A thinks a simple package is at /Users/duckj6g/Projects/test-flow/packages/a/node_modules/a-simple-package/index.js
> B thinks a simple package is at /Users/duckj6g/Projects/test-flow/packages/a/node_modules/a-simple-package/index.js

npm run flow
> lerna ERR! execute Error: ../b/index.js:2
> lerna ERR! execute   2: const simple = require('a-simple-package');
> lerna ERR! execute                             ^^^^^^^^^^^^^^^^^^ a-simple-package. Required module not found
```
