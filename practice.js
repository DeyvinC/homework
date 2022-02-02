// Create a function that takes two numbers as arguments and return their sum.

// function totalSum(a,b){
//     let sum = a + b
//     return sum
// }
// console.log(totalSum(2,4))




// Create a function that takes voltage and current and returns the calculated power.

// function calPower(volt,curr){
//     let power = volt * curr
//     return power
// }
// console.log(calPower(10,4))



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
// const word1 = "aaHeEaLLaaaO";
// const word2 = "BxxOxxCxxAx xCxxOxxxDxxE";

// function detectWord(word1){
//     const regex = /[A-Z]/g
//     const upperCaseW1 = word1.match(regex)
//     return upperCaseW1   
// }

// const foundWord1 = detectWord(word1)
// const foundWord2 = detectWord(word2)

// console.log(...foundWord1)
// console.log(...foundWord2)


// Second Way
// const word1 = "BxxOxxCxxAx xCxxOxxxDxxE";
// const word2 = "aaHeEaLLaaaO";

// function detectWord(inputString) {
//   let detectedWord = "";
//   for (let i = 0; i < inputString.length; i++) {
//     if (inputString[i].toUpperCase() === inputString[i]) {
//       detectedWord += inputString[i];
//     }
//   }
//   return detectedWord;
// }

// console.log(detectWord(word1));
// console.log(detectWord(word2));

// Third way

// const word1 = "BxxOxxCxxAx xCxxOxxxDxxE";
// const word2 = "aaHeEaLLaaaO";

// function detectWord(inputString) {
//   let detectedWord = "";
//   for (let i = 0; i < inputString.length; i++) {
//     if (
//       (inputString.charCodeAt(i) >= 65 && inputString.charCodeAt(i) <= 90) ||
//       inputString.charCodeAt(i) === 32
//     ) {
//       detectedWord += inputString[i];
//     }
//   }
//   return detectedWord;
// }

// console.log(detectWord(word1));
// console.log(detectWord(word2));

// Create a function that gets the multiplication table

// function multiplicationTable(number){
//   for( let i=1; i <= 10; i++){
//     let line = "" 
//     for( let j =1; j <= 10; j++){
//       line += " " + ( i * j)
//      }
//     console.log(line)

//   }

// }
// multiplicationTable(1)


// Online example

// function multiTable(number) {
//   for (let i = 1; i <= 10; i++) {
//     const result = i * number
//     console.log(result)
//   }
// }
// multiTable(5)

// Exercise 1 For Loop

// let arr_1 = [3, 5, 22, 5,  7,  2,  45, 75, 89, 21, 2]; // --> 276
// let arr_2 = [9, 2, 42, 55, 71, 22, 4,  5,  90, 25, 26]; // --> 351
// Example output: 
// 276 + 351 = 627
// let totalSum = 0
// let sum1 = 0
// let sum2 = 0
// for(i = 0; i < arr_1.length; i++){
//   sum1 += arr_1[i]
//   sum2 += arr_2[i]
//   totalSum = sum1 + sum2
// }
// console.log(sum1, "+", sum2, "=", totalSum)


// Example 2

// Example output: 
// 2 4 6 8 10 12 14 16 18 20 22 OR each item on a new line
// let n1 = 22; 

// for(i = 1; i <= 22; i++){
//   if(i % 2 == 0){
//     console.log(i)
   
//   }
// }


// Example 3

// Example output: 
// true 3.5  be  false cannot  true 9 what 43 OR each item on a new line

// let arr = [43, "what", 9, true, "cannot", false, "be", 3, true];

// const reversed = arr.reverse();
// console.log('Reversed Array: ', reversed)

// Example output: 
// [12, 7, 16]

// let arr_3   = [4, 6, 7];
// let arr_4    = [8, 1, 9];
let arr1 = [4]
let arr2 = [8]
for(i = 0; i < arr1.length; i++){
  if(arr1 && arr2 == i ){
    sum = arr1 + arr2
    
   //return sum 
   console.log(sum)
  }

}
