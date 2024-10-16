const prompt = require("prompt-sync")();
//Task
function Accumulator(startingValue) {
  this.value = +startingValue;
  this.read = function () {
    const newValue = +prompt("Enter new value: ");
    return (this.value = this.value + newValue);
  };
}

let newAku = new Accumulator(10);
console.log(newAku.value);
newAku.read();
newAku.read();
console.log(newAku.value);

//Better way - here we can set startign value
function Accumulator2(startingValue) {
  this.value = +startingValue;
  this.read = function () {
    const newValue = +prompt("Enter new value: ");
    return (this.value = this.value + newValue);
  };
}

let newAku2 = new Accumulator2(+prompt("Enter Starting value: "));
console.log(newAku2.value);
newAku2.read();
newAku2.read();
console.log(newAku2.value);
