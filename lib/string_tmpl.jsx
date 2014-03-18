__export__ class Template {
  /**
   * usage: 
   * Template.format("{test1} = {test2}", {"test1" : "abc", "test2" : 123});
   * return abc = 123
   **/
  static function format(format : string, args : Map.<variant>) : string {
    var result = format;
    if (args.keys().length == 0) return result;
    var matches = format.match(/\{(\w+)\}/g);
    matches.forEach(function(match) {
      var raw_key = match.replace(/\{(\w+)\}/, '$1');
      if (args[raw_key] != null) {
        result = result.replace(match, args[raw_key] as string);
      }
    });
    return result;
  }
}
