// // ? arrays, functions and objects
// // ? arrays [], 0 index based

// const friend1 = "papa";
// const friend2 = "papa";
// const friend3 = "papa";
// const friend4 = "papa";

// //! we can store any type of value
// const friends = ["adam","philip","ashley","lover",45,undefined,null];

// console.log(friends[5]);
// console.log(friends[0]);

// let element;
// //TODO: there is a more than this method for if condition
// for (let i = 0; i < friends.length; i++) {
//     element = friends[i];
//     console.log(element);
// }

// console.log(friends.length);

const fruits = ["pineapple","cherry","banana","apple",45];
let fruit = fruits[0];
fruits[fruits.length - 1] = "strawberry";
for (let a = 0; a < fruits.length; a++) {
    let element = fruits[a];
    console.log((1+a) + "\t" + element);  
}
console.log("----------------------");
console.log(fruits[0]);



