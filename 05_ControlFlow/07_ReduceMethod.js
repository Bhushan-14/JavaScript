/*
    reduce method:
    - The reduce() method applies a function against an accumulator and each element in the array (from left to right) to reduce it to a single value.

*/



// const arr1 = [1, 2, 3, 4, 5];
// const initialValue = 0;
// const sumWithInitial = arr1.reduce((accumulator, currentValue)=> {
//         console.log(`${accumulator} = ${currentValue}`);
//         return accumulator + currentValue
//     }
// ,initialValue);
// console.log(sumWithInitial); // Output: 15

const cart = [
    {
        itemName: 'JS course',
        price: 299
    },
    {
        itemName: 'React course',
        price: 399
    },
    {
        itemName: 'Node.js course',
        price: 349
    },
    {
        itemName: 'Python course',
        price: 249
    }
];

let initialPrice = 0;
const totalCartPrice = cart.reduce((acc, item) => acc + item.price, initialPrice);
console.log(totalCartPrice);