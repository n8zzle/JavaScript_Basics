const prompt = require("prompt-sync")();

const number = +prompt("Enter number: ", 0);

function readNumber(number) {
  if (!number) {
    return;
  }
  if (number) {
    console.log(number);
  }
}

readNumber(number);
