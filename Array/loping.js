

// let heroes = ["superman", "hulk", "batman", "Spider-Man", "thor", "iron-man"];

// for ( let num of heroes ){
//     console.log(num);
// }


// for (let i = 0 ; i < heroes.length; i ++){
//     console.log(heroes[i],);
// }

// let mark = [50,40,60,38,43];
// let sum = 0;
// for (let marks of mark){
//     sum += marks;
// }
// console.log(sum/ mark.length)


let price = [500,400,600,800,900];

let i = 0;
for (let val of price){
    let offer = val / 10;;
    price[i] = price[i] - offer;
    console.log(price[i]);
    i ++;
}
console.log(price)



