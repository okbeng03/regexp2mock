var Mock = require('./lib/mock');
var Parse = require('./lib/parse');

module.exports = function(raw) {
  if (!raw) {
    console.error('请输入正则');
  }

  if (raw instanceof RegExp) {
    raw = raw.source;
  }

  return Parse(raw, new Mock());
};
