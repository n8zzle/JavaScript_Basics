//Task Description
//1. Create empty user Object
//2. add new name property (Name property should be John)
//3. add new surname property (Surame property should be Smith)
//4. Change name property to Pete
//5. Delete name property

const user = {};

user.name = "John";
user.surname = "Smith";
console.log(user);
user.name = "Pete";
console.log(user);
delete user.name;
console.log(user);
