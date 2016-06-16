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

  },

  isUSD: function(str) {
    return (/$(?=[0-9]+)/).test(str);
  }
};
