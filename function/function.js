

// function addition(num1,num2){
//     console.log(num1+num2);
// }


// addition(23,45);


// const arrowSum = (a,b) =>{
//     console.log(a+b);
// }

// arrowSum(3,5);

// console.log(arrowSum)


// let arrowMulti = (a,b) =>{
//     console.log(`A x B = ${a*b}`);
// }

// // console.log(a);
// // arrowMulti(3,5);
// arrowMulti = 5;
// console.log(arrowMulti)



// function countVowels(str){
//     let count = 0;
//     for (const char of str){
//         if( char === "a" || char === "e" || char === "i" || char === "o" || char == "u" ){
//             count ++ ;
//         }
//     }
//     console.log(count)
// }

// countVowels("aeiou")


let  countVowels = str => {
    let count = 0;
    for (const char of str){
        if( char === "a" || char === "e" || char === "i" || char === "o" || char == "u" ){
            count ++ ;
        }
    }
    console.log(count)
}

countVowels("aeiou")
