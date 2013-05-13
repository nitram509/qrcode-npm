var tap = require('tap');

var base64Decoder = require('../qrcode_base64Decoder.js');

tap.test('base64DecoderTest', function(test) {

  var decoder = base64Decoder('SGVsbG8gV29ybGQ=');

  var actual = '';
  for (var b; (b = decoder.read()) != -1;) {
    actual += String.fromCharCode(b);
  }

  test.equal(actual, 'Hello World');
  
  test.end()
});
