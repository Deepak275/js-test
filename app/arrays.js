exports = typeof window === 'undefined' ? global : window;

exports.arraysAnswers = {
  indexOf: function(arr, item) {
    return arr.indexOf(item);
  },

  sum: function(arr) {
    var sum = 0;
    arr.forEach(function (item) {
      sum += item;
    });
    return sum;
  },

// Remove all repeating elements completly.
  remove: function(arr, item) {
    var uniqueArry = [];

    arr.forEach(function (value, index) {
      if (value !== item) {
        uniqueArry.push(value);
      }
    });

    return uniqueArry;
  },

//remove the duplicates of array and return it.
  removeWithoutCopy: function(arr, item) {
    var uniqueArry = [];

    arr.forEach(function (value, index) {
      if (value !== item) {
        uniqueArry.push(value);
      }
    });

    arr.length = 0;
    for ( i = 0; i < uniqueArry.length; i++ ) {
        arr.push( uniqueArry[i] );
    }

    return arr;
  },

  append: function(arr, item) {
     arr.push(item);
     return arr;
  },

  truncate: function(arr) {
     arr.pop();
     return arr;
  },

  prepend: function(arr, item) {
    arr.unshift(item);
    return arr;
  },

  curtail: function(arr) {
    arr.shift();
    return arr;
  },

  concat: function(arr1, arr2) {
    return arr1.concat(arr2);
  },

  insert: function(arr, item, index) {
     arr.splice(index, 0, item)
     return arr;
  },

  count: function(arr, item) {
    var iteration = 0;
    for (var i = 0; i < arr.length; i++) {
      if( arr[i] === item ) {
        iteration ++;
      }
    }
    return iteration;
  },

  duplicates: function(arr) {
    var duplicate = [];
    for (var i = 0; i < arr.length; i++) {
      //if (!duplicate.indexOf(arr[i])) {
        for (var j = 0; j < arr.length; j++) {
          if (arr[i] ===  arr[j] && i !== j && duplicate.indexOf(arr[j]) < 0) {
            duplicate.push(arr[i]);
            break;
          }
        }

    }

    return duplicate;
  },

  square: function(arr) {

    return arr.map(function (value) {
      return  value * value
    });

  },

  findAllOccurrences: function(arr, target) {
    var posn = [];
    arr.forEach(function (value, index) {
      if (value === target) {
        posn.push(index);
      }
    });
    return posn;
   }
};
