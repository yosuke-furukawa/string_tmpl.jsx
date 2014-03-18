Super Simple String Template
=============================

[![Build Status](https://travis-ci.org/yosuke-furukawa/string_tmpl.jsx.png?branch=master)](https://travis-ci.org/yosuke-furukawa/string_tmpl.jsx)

[![browser support](https://ci.testling.com/yosuke-furukawa/string_tmpl.jsx.png)
](https://ci.testling.com/yosuke-furukawa/string_tmpl.jsx)

Getting Started
=================


Server:
```shell
$ npm install string_tmpl
```

Client:
```shell
$ bower install string_tmpl
```

For javascript user

```javascript
    var Template = require("string_tmpl").Template;
    var test = Template.format("{test} yosuke", { test: "Hello"});
    console.log(test); // Hello yosuke
```

For jsx user

```javascript
import "test-case.jsx";
import "string_tmpl/string_tmpl.jsx";

class _Test extends TestCase {
    function testFormat() :void {
        var result = Template.format("{test1} = {test2}", {"test1" : "abc", "test2" : 123});
        this.expect(result).toBe("abc = 123");
        result = Template.format("{test1} = {test2} = {test3}", {"test1" : "abc", "test2" : 123});
        this.expect(result).toBe("abc = 123 = {test3}");
        result = Template.format("{test1} = {test2} = {test2}", {"test1" : "abc", "test2" : 123});
        this.expect(result).toBe("abc = 123 = 123");
    }
    function testEmptyFormat() :void {
        var result = Template.format("{test1} = {test2}", {});
        this.expect(result).toBe("{test1} = {test2}");
    }
}

```
