exports = typeof window === 'undefined' ? global : window;

exports.recursionAnswers = {
  listFiles: function(data, dirName) {

  },

  permute: function(arr) {
    var index, stage = 0, temp = [], results = [];

    function per(temp, stage) {
      if (stage >= arr.length ) {
        results.push(temp);
        //temp.pop();
        return;
      }

      for (var i = 0; i < arr.length; i++) {
        // // temp[stage] = input[i];
        // checkRepitation(temp.slice(0, stage), i);
        if (temp.indexOf(arr[i]) === -1 && i > index) {
          temp.push(arr[i]);
          index = i, stage++;
          per(temp.slice(), stage);

        }
      }
    }

    for (var i = 0; i < arr.length; i++) {
      temp.length = 0, index = -1;
      temp[0] = arr[i];
      per(temp, stage + 1);
    }

    return results;
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
    var results = [];
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
