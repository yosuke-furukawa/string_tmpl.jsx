import "test-case.jsx";
import "../lib/string_tmpl.jsx";

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
