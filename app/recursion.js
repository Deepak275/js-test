exports = typeof window === 'undefined' ? global : window;

exports.recursionAnswers = {
  listFiles: function(data, dirName) {

  },

  permute: function(arr) {
    var stage = 0, temp = [], results = [];

    function per(temp, stage) {
      var index = -1;
      if (stage >= arr.length ) {
        results.push(temp.slice());
        // console.log('combination : ', temp);
        temp.pop();
        return;
      }

      for (var i = 0; i < arr.length; i++) {
        // // temp[stage] = input[i];
        // checkRepitation(temp.slice(0, stage), i);
        if (temp.indexOf(arr[i]) === -1 && i > index) {
          // console.log('in the second loop :i, index, temp', i, index, temp, stage);
          temp.push(arr[i]);
          index = i;
          // console.log('in the second loop :i, index, temp', i, index, temp, stage);
          per(temp.slice(), stage + 1);
          temp.pop();
        }
      }

    }

    // console.log(arr);
    for (var i = 0; i < arr.length; i++) {

      temp = [] , index = -1;
      // console.log('temp for each :', temp);
      temp.push(arr[i]);
      // console.log('in the first loop, temp and stage :', temp, stage, i );
      per(temp.slice(), stage + 1);
    }
    // console.log('final results', results);
    return results;
  },

  fibonacci: function(n, b) {
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
    var combination = [];
//http://stackoverflow.com/questions/3172179/valid-permutation-of-parenthesis
    function bracesCombo(left, right, current) {
             if (left == 0 && right == 0) {
                 combination.push(current);
              }
              if (left > 0) {
                 bracesCombo(left - 1, right + 1, current + '(');
              }
              if (right > 0) {
                 bracesCombo(left, right - 1, current + ')');
              }
              return combination;
          };

      return bracesCombo(n, 0, '');

    }
};



// function permute(input) {
//
// }


// var results = [];
//
//   function permute1(arr, memo) {
//     var cur, memo = memo || [];
//
//     for (var i = 0; i < arr.length; i++) {
//       cur = arr.splice(i, 1);
//       if (arr.length === 0) {
//         results.push(memo.concat(cur));
//       }
//       permute1(arr.slice(), memo.concat(cur));
//       arr.splice(i, 0, cur[0]);
//     }
//
//     return results;
//   }
//
//   return permute1(arr);

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
