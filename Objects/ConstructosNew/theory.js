//learn.javascript.ru/constructor-new

//Constructor function
function User(name) {
  this.name = name;
  this.isAdmin = false;
}
//When we are calling constructor funciton we always should use *NEW*
const user = new User("Jack");
console.log(user.name);
console.log(user.isAdmin);
// let user2 = new function(){
//   this.name = "Vitalik",
//   this.isAdmin = true
//
// }

//As well we can create function where we can check how te funciton was called !
function Customer() {
  console.log(new.target);
}
Customer();
new Customer();

//test
function Admin(name) {
  if (new.target != null) {
    this.name = name;
    console.log(this.name + " account successfully created");
  } else {
    console.log("Error: call the funciton correctly");
  }
}
const mainAdministrator = Admin("Igors");
const mainAdministrator2 = new Admin("Igors");

//As well we can help if somebody called constructor incorrectly
function Bag(fruit) {
  if (!new.target) {
    return new Bag(fruit);
  }
  this.fruit = fruit;
}
let igors = Bag("apple");
console.log(igors.fruit);

//Remember the simple rule when you are using return in funciton
function BigUser() {
  this.name = "Test";
  return {
    name: "Godzilla",
  };
}
console.log(new BigUser().name); //Godzilla

function SmallUser() {
  this.name = "Test";
  return;
}
console.log(new SmallUser().name); // Test

function BetterUser(name) {
  this.name = name;
  this.sayHi = function () {
    console.log("My name is: " + this.name);
  };
}
const testFunc = new BetterUser("Vitalik");
console.log(testFunc.sayHi());
