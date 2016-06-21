exports = typeof window === 'undefined' ? global : window;

exports.stringsAnswers = {
  // limit the redundency of a repeating character to a particular amount.
  reduceString: function(str, amount) {


    if (str && (/^.*(.).*\1.*$/).test(str)) {
      console.log(str);
      var newArr = [];
      var results = [];
      var flag = 0;
      var strArr = str.split('');
      console.log(strArr, amount);
      console.log('the newArr', newArr);
      for (var i = 0; i < strArr.length; i++) {
        console.log('value of i and char ', i,'',strArr[i]);
        if (newArr.length == 0) {
          obj = {
            str: strArr[i],
            count: 1
          }
          newArr.push(obj);
          console.log('in the intialization');
          results.push(strArr[i]);
          console.log('value of i and char ', i,'',strArr[i]);
          console.log('results after each iterations', results);
          continue;
        }

        //console.log(newArr.length);
        for (var j = 0; j < newArr.length; j++) {
          console.log('index of the current character '+newArr[j].str.indexOf(strArr[i]));
          console.log('newArr and j value', newArr[j], j);
          if(newArr[j].str.indexOf(strArr[i]) === 0) {
            console.log('in the 2nd loop');
            flag = 0;

            if (newArr[j].count < amount) {

              newArr[j].count++;
              console.log('increment!!',newArr[j].count );
              results.push(strArr[i])

              break;
            } else {
              break;
            }
          } else {
            flag = 1;
          }
        }

        console.log('flag '+flag);
        if (flag) {
          obj = {
            str: strArr[i],
            count: 1
          }
          flag = 0;
          newArr.push(obj);
          results.push(strArr[i]);
        }
        console.log('value of i and newArr ', i,'', newArr);
        console.log('results after each iterations', results);

      }
      console.log('newArr array:', newArr);
      console.log(results);
      return results.join('');

    } else {
      return str;
    }




    // var strArr = str.split('');
    //  var newStr = [];
    // var check = '', count = 0;
    // strArr.forEach(function (elem) {
    //   if (elem != check) {
    //     check = elem;
    //     count = 1;
    //     newStr.push(elem);
    //   } else if (count < amount) {
    //      count++;
    //      newStr.push(elem);
    //    }
    // });
    // return newStr.join('');
  },

  wordWrap: function(str, cols) {
    
  },

  reverseString: function(str) {
    var results = '';
     for (var i = str.length - 1; i >= 0; i--) {
      result += str[i];
     }
     return results;
  }
};
