exports = typeof window === 'undefined' ? global : window;

exports.countAnswers = {
  count: function (start, end) {

      // setTimeout(function () {
      //   while (start <= end)
      //   start++;
      // }, 100);
//https://github.com/rmurphey/js-assessment-answers/blob/master/app/count.js
//http://stackoverflow.com/questions/34215526/eslint-how-to-disable-unexpected-console-statement-in-node-js

    var timeoutId;

    // function counter() {
    //   start++;
    // }

    function counter() {
      console.log(start++); // eslint-disable-line no-console

      if (start <= end) {
        timeoutId = setTimeout(counter, 100);
      }
    }

    counter();

    return {
      cancel: function () {
        if (timeoutId) {
          clearTimeout(timeoutId);
        }
      }

    }
  }
};
