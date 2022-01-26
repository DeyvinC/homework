// Create a function that takes two numbers as arguments and return their sum.

function totalSum(a,b){
    let sum = a + b
    return sum
}
console.log(totalSum(2,4))




// Create a function that takes voltage and current and returns the calculated power.

function calPower(volt,curr){
    let power = volt * curr
    return power
}
console.log(calPower(10,4))



// Write a function that accepts an array of strings. Return the longest string.
// In progress...
// function longestString(arr){
//     arr = ['Remember', 'Today']
//     for(i = 0; i < arr.length; i++){
//         return Math.max(string)

//     }

// }
// console.log(longestString(arr))



// A word is on the loose and now has tried to hide amongst a crowd of small letters!
// Help write a function to detect what the word is, knowing the following rules:

// The wanted word is in uppercase.
// Note that the word will be spread out amongst the random letters, but their letters remain in the same order.

// Examples
// detectWord(word1) ➞ "BOCA CODE"
// detectWord(word2) ➞ "HELLO"
const word1 = "aaHeEaLLaaaO";
const word2 = "BxxOxxCxxAx xCxxOxxxDxxE";

function detectWord(word1){
    const regex = /[A-Z]/g
    const upperCaseW1 = word1.match(regex)
    return upperCaseW1   
}

const foundWord1 = detectWord(word1)
const foundWord2 = detectWord(word2)

console.log(...foundWord1)
console.log(...foundWord2)


//Second Way
const word1 = "BxxOxxCxxAx xCxxOxxxDxxE";
const word2 = "aaHeEaLLaaaO";

function detectWord(inputString) {
  let detectedWord = "";
  for (let i = 0; i < inputString.length; i++) {
    if (inputString[i].toUpperCase() === inputString[i]) {
      detectedWord += inputString[i];
    }
  }
  return detectedWord;
}

console.log(detectWord(word1));
console.log(detectWord(word2));

//Third way

const word1 = "BxxOxxCxxAx xCxxOxxxDxxE";
const word2 = "aaHeEaLLaaaO";

function detectWord(inputString) {
  let detectedWord = "";
  for (let i = 0; i < inputString.length; i++) {
    if (
      (inputString.charCodeAt(i) >= 65 && inputString.charCodeAt(i) <= 90) ||
      inputString.charCodeAt(i) === 32
    ) {
      detectedWord += inputString[i];
    }
  }
  return detectedWord;
}

console.log(detectWord(word1));
console.log(detectWord(word2));
