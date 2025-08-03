

// Qs1. Print all even numbers from 0 to 100.


// for (let i = 0; i <= 100; i ++){
//     if(i % 2 === 0){
//         console.log(i)
//     }
// }

//  Qs2.
// Create a game where you start with any random game number. Ask the user to keep guessing the game number until the user enters correct value.

// let random = Math.random(1,10);

// let gameNum = "25";
// let user = prompt("Guess The Number");


// while( gameNum !== user ){
//      gameNum = prompt("Guess again ");
// }

// console.log("Congratulation You Win");


//  Template literals  

// let obj = {
//     name : "Phone",
//     price : "100k"
// }

// // console.log(obj) 
// console.log(`Item Name : ${obj.name}\nPrice ${obj.price}`)

// let number = "01234567890";
// console.log(number.slice(0,10));

// let str = "Hello"
// console.log(str.replace("H","Y"))


let name1 = prompt("Enter Name :")



console.log("@"+name1+name1.length)