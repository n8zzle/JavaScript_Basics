const prompt = require("prompt-sync")();

//Creating an Object
console.log("=============Creating Object=============");
const user = Object();
// We can create Object --> simplier way
const user2 = {};
//Inside we can add additional properties
const newUser = {
  name: "Igors",
  surname: "Cickalenko",
  age: 25,
};
console.log(newUser);
//We can add additional properties in object that exists
newUser.admin = true;
//We can remove any property from newUser
delete newUser.age;
console.log("=========================================");

console.log("=============Creating Object using Function=============");
//Function that takes 3 properties and creates a newUser
function createUser(name, surname, age) {
  return {
    name: name,
    surname: surname,
    age: age,
  };
}
//Assigning that function to variable TEST to create new user
const test = createUser(prompt("Name:"), prompt("Surname:"), prompt("Age:"));
//now we can use this new testUser and all properties that are inside
console.log(test);
console.log("Name:" + test.name);
console.log("Surname:" + test.surname);
console.log("Age:" + test.age);

console.log("=========================================");

console.log("====================Computed Properties=====================");
const bag = {};
const fruit = prompt("Which fruit i want to buy ? //Use apple ", "apple");

bag[fruit] = 5;

console.log(bag.apple);
console.log("=========================================");
// console.log(newUser);
