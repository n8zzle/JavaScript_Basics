//Spam Validation
const prompt = require("prompt-sync")();

let textToCheck = prompt("Enter string :", "");
let spamWords = ["XXX", "Porn", "Viagra", "Porno", "ass", "tits"];

function checkSpam(spam, str) {
  let lowerStr = str.toLowerCase();
  let foundSpam = false;

  for (let i = 0; i < spam.length; i++) {
    let lowerSpamWord = spam[i].toLowerCase();

    if (lowerStr.includes(lowerSpamWord)) {
      console.log(`Spam detector found bad word : ${spam[i]}`);
      foundSpam = true;
    }
  }
  if (!foundSpam) {
    console.log("Spam verification successfully completed! Your text is good.");
  }
}
checkSpam(spamWords, textToCheck);
