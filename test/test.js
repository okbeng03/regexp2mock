/*
* @Author      changbin.wangcb
* @Date        2016-03-03
* @Description 正则mock test
*/

var expect = require('expect.js');
var mock = require('../index');
var regData = require('./reg-data.js');

describe('正则mock', function() {
  for (var i = 0, len = regData.length; i < len; i++) {
    (function(item) {
      it(item + ' mock', function() {
        var result = mock(item);
        var reg = new RegExp(item);

        console.log(item, result);
        expect(reg.test(result)).to.be.ok();
      });
    })(regData[i]);
  }
});
