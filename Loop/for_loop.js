

//   for loop 
// for ( let ar = 1; ar <= 5; ar ++ ){
//     console.log("AM Sazid",ar);
// }


//  Calculate sum of n Number 

// let n = 10;

// let sum = 0;

// for (let i = 1; i <= n; i ++){
//     sum += i
// }

// console.log("Sum of",n,"=",sum)


// Infinite Loop 

// for (var i = 1; i <= 5 ; i ++){
//     console.log("i =",i)
// }

// console.log("Number Of i = ",i)
// console.log("Loop has ended")

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];


//  For-of loop 

// let str = 'AM Sazid';

// for (let i of str){
//     console.log("i =",i);
// }

// let arr = [2,3,6,6,3,8,3,8,5];
// let size = 0;
// for (let val of arr){
//     console.log(" Value =",val);
//     size ++;
// }

// console.log("length of array =",size)



//  For-in loop

let student = {
    name : "AM Sazid",
    age  : 18,
    cgpa : 3.12
}

for (let key in student){
    console.log(key,":",student[key])
}