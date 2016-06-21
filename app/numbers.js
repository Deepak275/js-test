exports = typeof window === 'undefined' ? global : window;

exports.numbersAnswers = {
  valueAtBit: function(num, bit) {
    return 1 & (num >>> (bit - 1));

  },

  base10: function(str) {
    return parseInt(str, 2); // default valu to 10
  },

  convertToBinary: function(num) {

    binAry = (num).toString(2).split(''); // default valu to 10

    for (var i = binAry.length; i < 8; i++) {
      binAry.unshift(0);
    }
    return binAry.join('');
  },

  multiply: function(a, b) {
    var common = 1000000;

    a *= common;
    b *= common;

    return ( a * b ) / (common * common) ;
  }
};
