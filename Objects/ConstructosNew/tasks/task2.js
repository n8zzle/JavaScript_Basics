const prompt = require("prompt-sync")();

function Calculator() {
  this.read = function () {
    // + operator converts input string into a number
    this.firstNumber = +prompt("Enter first number: ", 0);
    this.secondNumber = +prompt("Enter second number: ", 0);
    // this.firstNumber = prompt("Enter first number: ", 0);
    // this.secondNumber = prompt("Enter second number: ", 0);
  };
  this.sum = function () {
    return this.firstNumber + this.secondNumber;
  };
  this.mul = function () {
    return this.firstNumber * this.secondNumber;
  };
}

const calculator = new Calculator();
calculator.read();
console.log("Sum= " + calculator.sum());
console.log("Mul= " + calculator.mul());
