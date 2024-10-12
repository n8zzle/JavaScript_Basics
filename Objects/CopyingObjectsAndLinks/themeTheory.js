//Copying Objects and Links
console.log("========Copying Objects and Links========");
let message = "Hello";
let phrase = message;
console.log("phrase: " + phrase);
//Variable -> we will assign an object
//Remember that variable is storing not the basicly the object , it stores the address in memory !
console.log("To show an example what i mean");
console.log("Current user name");
let user = {
  name: "John",
};
console.log(user.name);
console.log("Admin is copying the link");
let admin = user; // copying the link
console.log(admin.name);
console.log("Now we have 2 variables with one Object !");

console.log("Admin will change the name");
admin.name = "Pete";
console.log("AdminName: " + admin.name);
console.log("But now look what will heppen with user.name");
console.log("UserName: " + user.name);
console.log("=========================================");

console.log("========Comparing the link========");
let a = {};
let b = a; //Copyying the link
console.log("a==b");
console.log(a == b);
console.log("a===b");
console.log(a === b);

let c = {};
let d = {};
console.log("c==d");
console.log(c == d);

console.log("==================================");

console.log("========Cloning the object with all properties (New One)========");
let mainUser = {
  name: "Pete",
  age: 30,
};
console.log(mainUser);
let clone = {}; //New Empty Object
console.log(clone);
//Now let's copy all properties to new Object
for (let key in mainUser) {
  clone[key] = mainUser[key];
}

//Now clone is not connected to old object and the changes will not touch the old object
clone.name = "Igors";
console.log("New CloneName: " + clone.name);
console.log(clone);
console.log("mainUserName: " + mainUser.name);
console.log(mainUser);

console.log("============================================");

console.log("========Cloning the object (Easier way)========");
let testUser = { name: "Max" };
let permission1 = { canView: true };
let permission2 = { canEdit: true };

console.log("Now we have 3 objects:");
console.log(testUser);
console.log(permission1);
console.log(permission2);
console.log("Now let's copy all properties to testUser");
Object.assign(testUser, permission1, permission2);
console.log(testUser);
console.log("===============================================");
