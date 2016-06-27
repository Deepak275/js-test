exports = typeof window === 'undefined' ? global : window;

exports.asyncAnswers = {
  async: function(value) {
    // return Promise.resolve(value);
    var promise = new Promise(function (resolve) {

      setTimeout(function () {
        resolve(value)
      }, 100);
      //  resolve(value);
    });

    return promise.then(value);
  },

  manipulateRemoteData: function(url) {
      var urlObj = require('url').format(url);
      var promise = new promise(function (resolve, reject) {
        require('request')(urlObj, function (err, res) {
          if (err) {
            reject(err);
          }

          var names  = _map(res, function (person) {
            return person.name;
          });
        });

        resolve(names.sort());

      });

      return promise.then(results);
  }
};
