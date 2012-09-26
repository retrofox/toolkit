
# toolkit

 Build a toolkit object container.

## Installation

    $ component install retrofox/toolkit

```js
var toolkit = require('toolkit');

// Create array toolkit adding `[map](https://github.com/component/map)` and ``[to-object](https://github.com/component/to-object)` array components.
var array = toolkit(require, ['map', 'to-object']);

// Also add `[select](https://github.com/component/select)` component using .add() method.
array.add('select');

// Using array toolkit
users = array.select(users, function(user){
  return user.age > 20;
});
```

# License

(The MIT License)
Copyright(c) 2012 Damian Suarez <rdsuarez@gmail.com>

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
'Software'), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
