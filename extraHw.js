//Given a sentence reverse order: "the sky is blue" -> "blue is sky the".
// let s = 'the sky is blue'
// let arrs = s.split(' ') 
// let reverseArray = arrs.reverse()
// console.log(reverseArray.join(' '))
//You are given 2 arrays, one called list and one called cart. Create a new version of the list where the items in the cart have been removed. 

 const list = ["bread", "eggs", "milk", "beer", "peanuts", "shampoo", "spinach"];
 const cart = ["apples", "bananas", "bread", "peanuts", "milk"];

 let newList = []
for(let item of list) {
    if(!cart.includes(item)) {
        newList.push(item)
    }
}
console.log(newList)

//Number 3

//Write a function that given an array of numbers, find the largest number and console.log it

function largestNumber(array){
    let newNumber = array[0]
    for(let i = 1; i < array.length; i++){
        if(array[i] > newNumber){
            newNumber = array[i]
        }
    }
    return newNumber

}
console.log(largestNumber([3,5,7,8,10]))