var tap = require('tap');

var base64Encoder = require('../qrcode_base64Encoder.js');

tap.test('base64EncoderTest', function(test) {
  var bytes = [65, 66, 67];

  for (var i = 0; i<bytes.length; i++ ) {
    base64Encoder.writeByte(bytes[i]);
  }
  base64Encoder.flush();

  test.equal('QUJD', base64Encoder.toString());
  
  test.end()
});
