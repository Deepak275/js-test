exports = typeof window === 'undefined' ? global : window;

exports.recursionAnswers = {
  listFiles: function(data, dirName) {

  },

  permute: function(arr) {

  },

  fibonacci: function(n) {
    if(n === 0) {
      return 0;
    }

    if (n === 1) {
      return 1;
    }

    if ( n > 1 ) {
      return (this.fibonacci(n-1) + this.fibonacci (n-2) );
    }

    return -1;
  },

  validParentheses: function(n) {

  }
};



//
// function permute(arr, memo) {
//     var cur, memo = memo || [];
//
//     for (var i = 0; i < arr.length; i++) {
//       cur = arr.splice(i, 1);
//       if (arr.length === 0) {
//         results.push(memo.concat(cur));
//       }
//       permute(arr.slice(), memo.concat(cur));
//       arr.splice(i, 0, cur[0]);
//     }
//
//     return results;
//   }
