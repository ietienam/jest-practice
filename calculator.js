const calculator = {
  add: (...args) => {
    return args.reduce((a, b) => a + b);
  },
  subtract: (...args) => {
    return args.reduce((a, b) => a - b);
  },
  divide: (...args) => {
    return args.reduce((a, b) => a / b);
  },
  multiply: (...args) => {
    return args.reduce((a, b) => a * b);
  }
};

module.exports = calculator;
