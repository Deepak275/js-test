exports = typeof window === 'undefined' ? global : window;

exports.asyncAnswers = {
  async: function(value) {
    // return Promise.resolve(value);
    var promise = new Promise(function (resolve) {

      setTimeout(function () {
        resolve(value)
      }, 10);
      //  resolve(value);
    });

    return promise.then(value);
  },

  manipulateRemoteData: function(url) {

    var promise = new Promise(function (resolve, reject) {
      var xhr = new XMLHttpRequest();
      xhr.open('GET', url);
      xhr.send();
      // xhr.onreadystatechange = function () {
      //   resolve(xhr.response);
      // }

      xhr.onload = function () {
        resolve(xhr.response);
      }

    });
      return promise.then(function (response) {
        // console.log('async', response);
        var data = JSON.parse(response).people;
        var names = data.map( (key) => {
         return key.name
       })
       //console.log(names);
       return names.sort();

      });
  }
};
