exports = typeof window === 'undefined' ? global : window;

exports.regexAnswers = {
  containsNumber: function(str) {
    return (/\d/).test(str);
  },

  containsRepeatingLetter: function(str) {
    return (/([A-Za-z])\1/).test(str); //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp
  },

  endsWithVowel: function(str) {
    return (/[AEIOUaeiou]$/).test(str);
  },

  captureThreeNumbers: function(str) {
    // first three matches
    // exec returns matched string
    var result = (/\d{3}/).exec(str);
    return result ? result[0] : false;
  },

  matchesPattern: function(str) {
    return (/^\d{3}-\d{3}-\d{4}$/).test(str); // checks for this no patter : 800-555-1212
  },

  isUSD: function(str) {
    //return (/$(?=[0-9]+)/).test(str);
    return (/^\$\d{1,3}(,\d{3})*(\.\d{2})?$/).test(str); // matches this kind of pattern : ($12,123,123.01) , second and the thired no is optional
  }
};
