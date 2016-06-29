exports = typeof window === 'undefined' ? global : window;

exports.recursionAnswers = {
  listFiles: function(data, dirName) {
    console.log('data and dirname : ', data, dirName);
    var listOfFiles = [], files = data.files;
    var subDir = dirName;
    var regex = new RegExp('.*(\.'+ dirName +')$', 'i');

    function fileAccumulator(files) {



        for (var i = 0; i < files.length; i++) {
          if (typeof files[i] !== 'string') {

            fileAccumulator(files[i].files);

          } else {
            listOfFiles.push(files[i]);

          }
        }
        return;
    }

    function forSubDir (files) {
      for (var i = 0; i < files.length; i++) {

        if (regex.test(files[i])) {
          listOfFiles.push(files[i]);
        }

        if (typeof files[i] !== 'string' ) {

            forSubDir(files[i].files);
        }
      }
    }


  if (dirName) {
    forSubDir(files)
  } else {
    fileAccumulator(files);
  }




      // else {
      //
      //   for (var i = 0; i < files.length; i++) {
      //     if (typeof files[i] !== 'string' && files[i].dir === dirName) {
      //       listOfFiles.push(files[i].files);
      //
      //     }
      //   }
      //   // var dirIndex = files.indexOf(dirName) > -1 ?  files.indexOf(dirName) : -1;
      //   // if (dirIndex > -1) {
      //   //   fileAccumulator(files[i].files);
      //   // }
      // }




    //fileAccumulator(files);
    console.log('results', listOfFiles);
    return listOfFiles;
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
      return (this.fibonacci(n-1) + this.fibonacci (n-2));
    }

    return -1;
  },

  validParentheses: function(n) {
    var combination = [];

    function bracesCombo(left, right, current) {
      // console.log('combn array', combination);
      if (left == 0 && right == 0) {
        combination.push(current);
      }
      if (left > 0) {
        // console.log('in the left check !!');
        bracesCombo(left - 1, right + 1, current + '(');
      }
      if (right > 0) {
        // console.log('in the right check !!');
        bracesCombo(left, right - 1, current + ')');
      }
      return combination;
    }

    return bracesCombo(n, 0, '');
  }

};



// function permute(input) {
//
// }

//http://stackoverflow.com/questions/3172179/valid-permutation-of-parenthesis
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
