//Changing first letter to upper case
const string = "igors";
function ucFirst(string) {
  let newString = "";
  for (let i = 0; i < string.length; i++) {
    if (string[0] && i === 0) {
      newString += string[i].toUpperCase();
    } else {
      newString += string[i];
    }
  }
  console.log(newString);
}

ucFirst(string);
