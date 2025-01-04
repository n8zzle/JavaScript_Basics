let single = "single-quoted";
let double = "double-quoted";
let backticks = `backticks`;

function sum(a, b) {
  return a + b;
}

console.log(`1+2=${sum(1, 2)}`);

let guestList = `Guests:
* John
* Pete
* Mary
`;
console.log(guestList);

const testString = "test";
const testString2 = "Igors";
const person = "Ilze Dubova";
//Displat the length of string
console.log(testString.length);
//Display specific character
//console.log(testString[0]);
for (let i = 0; i < testString.length; i++) {
  console.log(testString[i]);
}
//Display last character
console.log(testString2.at(-1));

//changing to uppercase
console.log(testString);
console.log(testString.toUpperCase());
console.log(testString[0].toUpperCase());

console.log(person.includes("Dub"));
