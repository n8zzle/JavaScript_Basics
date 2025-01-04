const prompt = require("prompt-sync")();

const firstNumber = +prompt("Enter first number: ", 0);
const secondNumber = +prompt("Enter second number: ", 0);

console.log(firstNumber + secondNumber);
