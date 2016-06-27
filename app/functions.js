exports = typeof window === 'undefined' ? global : window;

exports.functionsAnswers = {
  argsAsArray: function(fn, arr) {
    return fn.apply(null, arr);
  },

  speak: function(fn, obj) {
    return fn.call(obj);
  },

  functionFunction: function(str) {
    return function(arg) {
      return str + ', ' + arg;
    };
  },

  makeClosures: function(arr, fn) {
    var newObject = [];

    var retFunc = function(val) {
      return function() { return fn(val); };
    };

    for (var i = 0, len = arr.length; i < len; i++) {
      newObject.push(retFunc(arr[i]));
    }

    return newObject;
  },

  partial: function(fn, str1, str2) {
    return (function (str3) {
      return (fn(str1, str2, str3));
    });
  },

  useArguments: function() {
    var sum = 0;
    for (var i = 0; i < arguments.length; i++) {
      sum += arguments[i];
    }
    return sum;
  },

  callIt: function(fn) {

    var args = Array.prototype.slice.call(arguments, 1, arguments.length )

    fn.call(this, ...args);
    //for  > than ES6, USE fn.apply(this, args);
  },

  partialUsingArguments: function(fn) {
    var args = Array.prototype.slice.call(arguments, 1, arguments.length);
    return (function() {
      var allArgs = args.concat(Array.prototype.slice.call(arguments));
      return fn.apply(null, allArgs);
    });

},

  curryIt: function(fn) {

    function applyArguments(fn, args) {
      return fn.apply(null, args);
    }

    function collectArguments(a, required) {
      return function (b) {
        a.push(b);

        var total = a.length === required;

        if (total) {
          return applyArguments(fn, a);
        }

        return collectArguments(a, required);
      };
    }

    return collectArguments([], fn.length);

  }

};
