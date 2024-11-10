//Secure way to get properties of objects, even if those Properties dont exist
let user = {}; // user without address value
// alter(user.address.street); //error

//how we can use this withour error
console.log(user.address ? user.address.street : undefined);
//now we dont't have a error but this still looks kinda messy

//if the object will have more properties inside ?
console.log(
  user.address ? (user.address.street ? user.address.street.name : null) : null,
);
//i think that is a messy code

//there is a better way to write this with &&
console.log(user.address && user.address.street && user.address.street.name);
//but still i think that this is messy

//there is a better way
//a lot shorter !
// if value exists that it will show that property
// else it will return undefined/null
console.log(user?.address);
console.log(user?.address?.street);

let userAdmin = {
  admin() {
    console.log("I am Admin");
  },
};

let userGuest = {};

userAdmin.admin?.(); // I am admin
userGuest.admin?.(); // nothing will heppen , becuase this method does not exist
