/*

    JavaScript is Dynamically Typed Language 
    i.e. You don't have to specify the data type of the variable.

    Types of Data Types
    1. Primitive Data Types
        i. number
        ii. string
        iii. boolean
        iv. null
        v. undefined
        vi. symbol
        vii. BigInt

    2. Non-Primitive Data Types/Reference Data Types
        i. Object
        ii. Function
        iii. Array    
*/

// const score = 302;
// const scoreValue = 4555.3;

// const isLoggedIn = false;
// const outsideTemp = null;

// const id = Symbol('231');
// console.log(typeof id);

// const anotherId = Symbol('231');
// console.log(id === anotherId);

// const bigIntValue = 2345678901234567890n;
// console.log(typeof bigIntValue);

const fruit = ['Apple', 'Banana', 'Orange'];

let obj = {
    fName: "Sagar",
    age: 18,
}
console.log(obj);
const myFun = function(){
    console.log("Hello World from function");
}

console.log(typeof fruit);

console.log(typeof obj);

console.log(typeof myFun);