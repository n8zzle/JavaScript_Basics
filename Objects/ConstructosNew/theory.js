//learn.javascript.ru/constructor-new

//Constructor function
https: function User(name) {
  this.name = name;
  this.isAdmin = false;
}
//When we are calling constructor funciton we always should use *NEW*
const user = new User("Jack");

console.log(user.name);
console.log(user.isAdmin);
