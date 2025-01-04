//New data type Symbol -- allows to set uniqe identifier
let id2 = Symbol("id");
let id3 = Symbol("id");

console.log(id2 == id3); //false

console.log(id2);
console.log(id2.toString());

//Hidden Properties
let user = {
  name: "Igors",
};
let id = Symbol("id");

user[id] = 1;
console.log(user[id]);
