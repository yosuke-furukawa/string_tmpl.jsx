var test = require('tape');
var Template = require('../string_tmpl.js').Template;

test('template test', function (t) {
  var actual = Template.format("{hello} {world}", { hello: "bonjour", world: "le monde" });
  t.equals(actual, "bonjour le monde");
  t.end();
});

