// let marks = [91, 70, 99, 95, 67, 50, 67];


// let topper = marks.filter((val) => {
//     return val > 90  ;
// })

// console.log(topper)

let n = prompt("Enter a Number");

let newArr = [];

for (let i = 1; i <= n; i ++){
    newArr[i-1] = i;
}
console.log(newArr)


// let array = [1, 4, 3, 5, 6, 8];

let total = newArr.reduce((res,prev) => {
    return res + prev ;
})

console.log(total)



let factorial = newArr.reduce((res,prev) => {
    return res * prev ;
})

console.log(factorial)