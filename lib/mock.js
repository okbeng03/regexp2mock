/*
* @Author      changbin.wangcb
* @Date        2016-03-02
* @Description mock基类
*/

'use strict';

class Mock {
  constructor() {
    this.groups = {};
  }

  mock(tree) {
    return this.recursive(tree, tree);
  }

  recursive(tree, parent) {
    var str = '';
    var chars;
    var item;
    var type;

    for (var i = 0, len = tree.length; i < len; i++) {
      item = tree[i];
      type = item['type'];
      chars = '';

      chars = this[type].call(this, item, tree);

      if (item.repeat) {
        chars = this.repeat(chars, item.repeat);
      } else {
        if (type === 'charset') {
          chars = chars.call(this);
        }
      }

      str += chars;
    }

    return str;
  }

  exact(item, parent) {
    // 确切字符
    var str = '';

    return item.chars;
  }

  group(item, parent) {
    var str = '';

    str = this.recursive(item.sub, item);

    if (item.num) {
      this.groups[item.num] = str;
    }

    // if (item.nonCapture) {
    //   // 非捕获，返回空，缓存分组index结果，以便后面\index使用
    //   return '';
    // } else {
      return str;
    // }
  }

  charset(item, parent) {
    // 字符集[],指定类型字符\d\D
    return function() {
      var str = '';
      var idx = getRandom(1, 3);

      if (idx === 1) {
        str += _getByChar();
        str += _getByRange();
        str += _getByClass();
      } else if (idx === 2) {
        str += _getByRange();
        str += _getByChar();
        str += _getByClass();
      } else if (idx === 3) {
        str += _getByClass();
        str += _getByRange();
        str += _getByChar();
      }

      // 同时都有的时候报错
      function _getByChar() {
        var c = '';

        if (str === '' && item.chars !== '') {
          if (item.exclude) {
            c = getRandomCharExclude(item.chars);
          } else {
            c = getRandomChar(item.chars);
          }
        }

        return c;
      }

      function _getByRange() {
        var c = '';

        if (str === '' && item.ranges.length) {
          var range = item.ranges[getRandom(0, item.ranges.length - 1)];
          var startIdx = range.charCodeAt(0);
          var endIdx = range.charCodeAt(1);

          if (item.exclude) {
            // 取前面的字符
            startIdx = 0;
            endIdx = startIdx - 1;
          }

          c = String.fromCharCode(getRandom(startIdx, endIdx));
        }

        return c;
      }

      function _getByClass() {
        var c = '';

        if (str === '' && item.classes.length) {
          var type = item.classes[getRandom(0, item.classes.length - 1)];

          if (item.exclude) {
            type = oppType(type);
          }

          c = CHAR_HANDLER_MAP[type]();
        }

        return c;
      }

      return str;
    };
  }

  assert(item, parent) {
    // AssertBegin | AssertEnd | AssertNegativeLookahead | AssertLookahead
    // 开始结束，什么都不干
    // 另外两个都是非捕获，也暂不做处理
    // TODO: 对?=,:!的理解还不够
    var str = '';

    if (item.assertionType === 'AssertLookahead') {
      str += getChar();
      str += this.recursive(item.sub, item);
    }

    return str;
  }

  choice(item, parent) {
    var str = '';

    str = this.recursive(item.branches[getRandom(0, item.branches.length - 1)], item);

    return str;
  }

  dot(tree, parent) {
    // .
    return getChar;
  }

  backref(item, parent) {
    // \index
    return this.groups[item.num];
  }

  repeat(repeater, repeat) {
    var str = '';

    if (repeat.nonGreedy) {
      repeat.max = repeat.min || 1;
    }

    var count = getRandom(repeat.min, repeat.max);

    for (var i = 0; i < count; i++) {
      if (Object.prototype.toString.call(repeater)=== '[object Function]') {
        str += repeater.call(this);
      } else {
        str += repeater;
      }
    }

    return str;
  }
}

function getRandomCharExclude(chars) {
  var reg = new RegExp('[^' + chars + ']');

  var char = getChar();

  if (reg.test(char)) {
    return char;
  } else {
    return getRandomCharExclude(chars);
  }
}

function getRandomChar(chars, len) {
  len = len || chars.length;

  if (len === 1) {
    return chars;
  } else {
    return chars.substr(getRandom(0, len - 1), 1);
  }
}

function getRandom(min, max) {
  if (max === Infinity) {
    max = min + 10;
  }

  return min + Math.round(Math.random() * (max - min));
}

var UPPERTYPEREG = /[DSW]/;

function oppType(type) {
  if (UPPERTYPEREG.test(type)) {
    return type.toLowerCase();
  } else {
    return type.toUpperCase();
  }
}

var NUMBERCHARS = '0123456789';
var NUMBERCHARSLEN = NUMBERCHARS.length;

function getNumber() {
  return getRandomChar(NUMBERCHARS, NUMBERCHARSLEN);
}

var CHARCHARS = 'abcdefghigklmnopqrstuvwxyzABCDEFGHIGKLMNOPQRSTUVWXYZ01234567890_';
var CHARCHARSLEN = CHARCHARS.length;

function getChar() {
  return getRandomChar(CHARCHARS, CHARCHARSLEN);
}

var EXCLUDENUMBERCHARS = 'abcdefghigklmnopqrstuvwxyzABCDEFGHIGKLMNOPQRSTUVWXYZ_';
var EXCLUDENUMBERCHARSLEN = EXCLUDENUMBERCHARS.length;

function getExcludeNumber() {
  return getRandomChar(EXCLUDENUMBERCHARS, EXCLUDENUMBERCHARSLEN);
}

var WHITESPACECHARS = '\f\n\r\t\v';
var WHITESPACECHARSLEN = WHITESPACECHARS.length;

function getWhitespaceChar() {
  return getRandomChar(WHITESPACECHARS, WHITESPACECHARSLEN);
}

var CHAR_HANDLER_MAP = {
  'd': getNumber,
  'D': getExcludeNumber,
  's': getWhitespaceChar,
  'S': getChar,
  'w': getChar,
  'W': getWhitespaceChar
};

module.exports = Mock;
