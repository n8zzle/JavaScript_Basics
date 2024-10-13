function makeUser() {
  return {
    name: "John",
    age: 25,
    ref() {
      return this;
    },
  };
}
const user = makeUser();
console.log(user.ref().name);
