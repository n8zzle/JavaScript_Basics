// Primitive data types : string , number , symbol, null, undefined, bigint
// Object can store multiple variables and properties
// default Object definition roma = {name:"Roma", age:30}

//One of the best object feature is that we can store function as a propertie in object.
var roma = {
  name: "Roma",
  age: 30,
  sayHi: function () {
    console.log("Hello Friend !");
  },
};
console.log(roma.name);
console.log(roma.age);
console.log(roma.sayHi());

var str = "Hello";
console.log(str.toUpperCase());

var number = 1.23456;
console.log(number.toFixed(2));

//not recomended
console.log(typeof 0);
console.log(typeof new Number(0));

var zero = new Number(0);
if (zero) {
  // returns true , because it is an object
  console.log("zero is real ?");
}

//without new operator
//we can convert string to number
const num = Number("123");
console.log(num);

var str = "Hello";
str.test = 5;
console.log(str.test);
