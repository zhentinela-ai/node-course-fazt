const add = (x, y) => x + y;
const subtract = (x, y) => x - y;
const multiply = (x, y) => x * y;
const divide = (x, y) => x / y;

console.log(add(10, 20), subtract(10, 20), multiply(10, 20), divide(10, 20));

module.exports = {
  add,
  subtract,
  multiply,
  divide
}
