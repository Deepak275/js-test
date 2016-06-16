exports = typeof window === 'undefined' ? global : window;

exports.objectsAnswers = {
  alterContext: function(fn, obj) {
    return fn.call(obj);
  },


// add greeting property to the constructor  object
  alterObjects: function(constructor, greeting) {
    constructor.prototype.greeting = greeting;
  },

  iterate: function(obj) {
    var newObject = [];
    for (var prop in obj) {
      if (obj.hasOwnProperty(prop)) {
        newObject.push(prop+ ": " + obj[prop]);
      }
    }
    return newObject;
  }
};
