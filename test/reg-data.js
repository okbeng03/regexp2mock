/*
* @Author      changbin.wangcb
* @Date        2016-03-03
* @Description 测试正则
*/

module.exports = [
  // 常用正则表达式测试
  // 数字
  /^[0-9]*$/,
  '^[0-9]*$',
  '^\\d{n}$',
  '^\\d{n,}$',
  '^\\d{m,n}$',
  '^(0|[1-9][0-9]*)$',
  '^([1-9][0-9]*)+(\\.[0-9]{1,2})?$',
  '^(\\-)?\\d+(\\.\\d{1,2})?$',
  '^(\\-|\\+)?\\d+(\\.\\d+)?$',
  '^[0-9]+(\\.[0-9]{2})?$',
  '^[0-9]+(\\.[0-9]{1,3})?$',
  '^[1-9]\\d*$',
  '^-[1-9]\\d*$',
  '^\\d+$',
  '^-[1-9]\\d*|0$',
  '^\\d+(\\.\\d+)?$',
  '^((-\\d+(\\.\\d+)?)|(0+(\\.0+)?))$',
  '^[1-9]\\d*\\.\\d*|0\\.\\d*[1-9]\\d*$',
  '^-([1-9]\\d*\\.\\d*|0\\.\\d*[1-9]\\d*)$',
  '^(-?\\d+)(\\.\\d+)?$',
  // 字符
  '^[\\u4e00-\\u9fa5]{0,}$',
  '^[A-Za-z0-9]+$',
  '^.{3,20}$',
  '^[A-Za-z]+$',
  '^[A-Z]+$',
  '^[a-z]+$',
  '^[A-Za-z0-9]+$',
  '^\\w+$',
  '^[\\u4E00-\\u9FA5A-Za-z0-9_]+$',
  '^[\\u4E00-\\u9FA5A-Za-z0-9]+$',
  '[^%&\',;=?$\\x22]+',
  '[^~\\x22]+',
  // 其他
  '^\\w+([\\-\\+\\.]\\w+)*@\\w+([\\-\\.]\\w+)*\\.\\w+([\\-\\.]\\w+)*$',
  '[a-zA-Z0-9][-a-zA-Z0-9]{0,62}(/\\.[a-zA-Z0-9][\\-a-zA-Z0-9]{0,62})+\\/\\.?',
  '^http://([\\w\\-]+\\.)+[\\w\\-]+(/[\\w\\-\\./?%&=]*)?$',
  '^(13[0-9]|14[5|7]|15[0|1|2|3|5|6|7|8|9]|18[0|1|2|3|5|6|7|8|9])\\d{8}$',
  '^(\\d{3,4})?\\d{7,8}$',
  '\\d{3}-\\d{8}|\\d{4}-\\d{7}',
  '^\\d{15}|\\d{18}$',
  '^([0-9]){7,18}(x|X)?$',
  '^[a-zA-Z][a-zA-Z0-9_]{4,15}$',
  '^[a-zA-Z]\\w{5,17}$',
  // '^(?=.*\\d)(?=.*[a-z])(?=.*[A-Z]).{8,10}$',
  '^\\d{4}-\\d{1,2}-\\d{1,2}',
  '^(0?[1-9]|1[0-2])$',
  '^((0?[1-9])|((1|2)[0-9])|30|31)$',
  '^([0-9]+|[0-9]{1,3}(,[0-9]{3})*)(\\.[0-9]{1,2})?$',
  '^([a-zA-Z]+-?)+[a-zA-Z0-9]+\\.[x|X][m|M][l|L]$',
  '<(\\S*?)[^>]*>.*?</\\1>|<.*? />',
  '((?:(?:25[0-5]|2[0-4]\\d|[01]?\\d?\\d)\\.){3}(?:25[0-5]|2[0-4]\\d|[01]?\\d?\\d))',
  // 正则表达式各种组合测试
  '\\\\{3}',
  'ab+(1|0)?[a-z][^0-9]a\\nb\\rc\\td',
  '[\\0-\\n]',
  '[abcdefa-z\\w0-\\u540-\\u5-\\x68z-\\u5409]',
  '[abc-\\u540-\\x69]',
  '^abc+d*e+?\\?[\\n-\\rbcd]{3,110}?(?:(a|b)+|(d|[e-z]?(?!abc)))$',
  'aa+b*?c{0PP{,{10}ab+?',
  'ab[\\]-a]*',
  'ab[^]*',
  'ab[-]*',
  'ab[a-]*',
  '[a-z-b]',
  '(abc(def)+(a)((a),(b),(c,(d))))',
  '([a-z]+,[abc]444,[^a-b])+,(a(t)o(a[0-1]+b,(a[0-1]+)) )',
  '[a-zA-z]+://[^\\s]*',
  '((2[0-4]\\d|25[0-5]|[01]?\\d\\d?)\\.){3}(2[0-4]\\d|25[0-5]|[01]?\\d\\d?)',
  '\\w+([-+.]\\w+)*@\\w+([-.]\\w+)*\\.\\w+([-.]\\w+)*',
  'a{1,2}{}',
  'a{1,2}{1,2,4}',
  'a{1,2}{{4}',
  'a+{1,{4}',
  '<(.*)(.*)>.*<\\/\\1>|<(.*) \\/>',
  // '(?=^.{8,}$)(?=.*\\d)(?=.*\\W+)(?=.*[A-Z])(?=.*[a-z]).*$',
  // '(?=^.{8,}$)(?=.*\\d)(?=.*\\W+)(?=.*[A-Z])(?=.*[a-z])(?!.*\\n).*$',
  '(\\d{4}|\\d{2})-((1[0-2])|(0?[1-9]))-(([12][0-9])|(3[01])|(0?[1-9]))',
  '[\\u4e00-\\u9fa5]'
];
