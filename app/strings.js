exports = typeof window === 'undefined' ? global : window;

exports.stringsAnswers = {
  // limit the redudency of a repeating character to a particular amount.
  reduceString: function(str, amount) {
    var strArr = str.split('');
     var newStr = [];
    var check = '', count = 0;
    strArr.forEach(function (elem) {
      if (elem != check) {
        check = elem;
        count = 1;
        newStr.push(elem);
      } else if (count < amount) {
         count++;
         newStr.push(elem);
       }
    });
    return newStr.join('');
  },

  wordWrap: function(str, cols) {

  },

  reverseString: function(str) {
    var result = '';
     for (var i = str.length - 1; i >= 0; i--) {
      result += str[i];
     }
     return result;
  }
};
