const prompt = require("prompt-sync")();
//Task Create Calculator
//read() takes two variables a and b and saves them to Obejct
//sum() takes two saved variables and sums them
//mul() takes two saved variables and multiplies them.
//
//How i did this
let calculator = {
  read(firstNumber, secondNumber) {
    calculator.a = firstNumber;
    calculator.b = secondNumber;
  },
  sum() {
    console.log(this.a + this.b);
  },
  mul() {
    console.log(this.a * this.b);
  },
};
calculator.read(8, 8);
calculator.sum();
calculator.mul();

//Better way
let calculator2 = {
  read() {
    this.a = +prompt("First number :");
    this.b = +prompt("Second number :");
  },
  sum() {
    console.log(this.a + this.b);
  },
  mul() {
    console.log(this.a * this.b);
  },
};
calculator2.read();
calculator2.sum();
calculator2.mul();
