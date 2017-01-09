## o.set

fast { property: 'setter' }

#### How fast is it
Well, I didn't do any extensive testing on all available browsers, but since it uses only builtin functions it should be quite fast. According to <strong>[this little benchmark](https://github.com/zewish/oset/tree/master/benchmark)</strong> it is currently faster than lodash.set on the current LTS version of node.js.

#### What this is not
This will never be some kind of "wannabe" lodash killer library. It's just what you see - a simple object property setter.

#### Usage
```javascript
'use strict';

let oset = require('o.set');

let obj = {
    uno: 1
    , due: {
        a: ['abracadabra']
        , b: [ [ [ 'wow' ] ] ]
    }
    , tre: 3
};

oset(obj, 'due.a.0', 'yay'); // obj.due.a = [ 'yay' ]
oset(obj, 'due.a.1', 'horray'); // obj.due.a = [ 'yay', 'horray' ]

oset(obj, 'due.b[0][0][0]', 'super'); // obj.due.b = [ [ [ 'super' ] ] ]
oset(obj, 'due.b[0][0][1]', 'cool'); // obj.due.b = [ [ [ 'super', 'cool' ] ] ]

oset(obj, 'uno.na.not.existent', 'define me!'); // obj.uno = { na: { not: { existent: 'define me!' } } }
```

#### Install (NPM)
```bash
$ npm install --save o.set
```

#### Install (Bower)
```bash
$ npm install --save o.set
```

#### Test
```bash
$ npm install && npm test
```