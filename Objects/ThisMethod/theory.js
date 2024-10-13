//Method Example longer example
const user = {
  name: "John",
  age: 30,
  sayHi: function () {
    console.log("Hello delevoper !");
  },
};
user.sayHi();

//Shorter example
const user2 = {
  name: "Igors",
  age: 25,
  sayHi() {
    console.log("Igors is saying Hello !");
  },
};
user2.sayHi();

//Method example using <this>
const user3 = {
  name: "Ilze",
  age: 25,
  sayHi() {
    console.log(this.name + " is saying Hello !");
  },
};
user3.sayHi();

//Function Example
function userName() {
  console.log(this.name);
}
const admin = {
  name: "Incognito",
};
const customer = {
  name: "Max",
};
admin.f = userName;
customer.f = userName;
admin.f();
customer.f();
//We can also copy all properties and links to new Object
const superAdmin = {};
Object.assign(superAdmin, admin);
superAdmin.f();
