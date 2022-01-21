// pryamid problem
// let string = '';
// function pryamid(pram){
//     for(i=0,i < 5, i++){
//         string += '#'

//     }
// }



// online example
// let n = 5
// let string = '';
// for (let i = 1; i <= n; i++){
//     for (let j = 0; j < i; j++){
//         string += '#';
//     }
//     string += '\n';
// }
// console.log(string);


// extra credit 

// function assignGrade(num){
//     if(num >= 90){
//         console.log('A')
//     }else if(num >= 80){
//         console.log('B')
//     }else if(num >= 70){
//         console.log('C')
//     }else if(num >= 60){
//         console.log('D')
//     }else console.log('F')

// }
// assignGrade(12)


// function triArea(base,height){
//    area = base*height /2
   
   
// }



//Example

// function convGallonsToQuarts(gallons){
//    return gallons*4
// }
// console.log(convGallonsToQuarts(21))


// write a function that converts minutes into seconds

// function converMintuesIntoSeconds(minutes){
//    return minutes * 60
// }
// console.log(converMintuesIntoSeconds(2))

// find the maximum edge of a triangle

function maxTriangleEdge(side1,side2){
   return (side1+side2) - 1
}
console.log(maxTriangleEdge(8,10))