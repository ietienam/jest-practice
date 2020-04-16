/**
 * Write a function that takes an array of numbers and returns an object
 *  with the following properties: average, min, max, and length.

const object = analyze([1,8,3,4,2,6]);

object == {
  average: 4,
  min: 1,
  max: 8,
  length: 6
};
 */

function analyze(...args) {
  var obj = {};
  obj.average = args.reduce((a, b) => a + b);
  obj.average /= args.length;
  obj.min = args[0];
  obj.max = args[0];
  for (var i = 0; i < args.length; i++) {
    if (args[i] < obj.min) {
      obj.min = args[i]
    }
    if (args[i] > obj.max) {
      obj.max = args[i];
    }
  }
  obj.length = args.length;
  return obj;
}

 module.exports = analyze;
