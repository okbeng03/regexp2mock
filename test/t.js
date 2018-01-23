var mock = require('../index');
var regData = require('./reg-data.js');

for (var i = 0, len = regData.length; i < len; i++) {
  var item = regData[i];

  var result = mock(item);
  var reg = new RegExp(item);

  console.log(item, result);
  // expect(reg.test(result)).to.be.ok();
}
