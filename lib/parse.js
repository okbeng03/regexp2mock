/*
* @Author      changbin.wangcb
* @Date        2016-03-02
* @Description RegExp Parse
*/

var Regulex = require('regulex');

module.exports = function(raw, handler) {
  var ast = Regulex.parse(raw);

  var data = handler.mock(ast.tree);

  return data;
};
