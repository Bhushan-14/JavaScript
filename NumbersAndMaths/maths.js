const prompt = require("prompt-sync")();
// let radius = prompt("Enter radius of circle : ");
// console.log(Math.PI * 2 * radius)


// console.log(Math.min(5,6,7,3,7,2,2));
// console.log(Math.max(5,6,7,3,7,2,2));
// console.log(Math.round(5.6));
// console.log(Math.floor(5.6));
// console.log(Math.ceil(5.6));


// console.log((Math.random() * 10) + 1);
// console.log((Math.random() * 10) + 1);
// console.log((Math.random() * 10) + 1);

const min = 10;
const max = 20;

console.log(Math.floor(Math.random() * (max - min + 1)) + min);
/*
    Math.random() * (max - min + 1) + min
    This formula generates a random number between min and max inclusive.
    Math.random() generates a random number between 0 and 1.
    Math.random() * (max - min + 1) generates a random number between 0 and (max - min + 1).
    Math.random() * (max - min + 1) + min generates a random number between min and max.
    Math.floor(Math.random() * (max - min + 1) + min) generates a random integer between min and max.
*/

