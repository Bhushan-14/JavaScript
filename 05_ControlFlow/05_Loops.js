/*
    1. For-of loop:
    - 
    2. For-in loop:

    3. For-each loop:
*/

let myArr = [1,2,3,4,5];
for (const num of myArr) {
    // console.log(num);
}

const greetings = "Hello, world!"
for (const greet of greetings) {
    // console.log(`Each character in greetings ${greet}`);   
}


//Map
/*
    - Map is a built-in JavaScript object that holds key-value pairs.
    - Map objects have methods to add, remove, and retrieve values.
    - Map objects are iterable, and you can loop through them using for...of loop.
    - Map objects are not ordered, and keys can be of any type.
    - Map objects have a size property that returns the number of key-value pairs.
    - Map objects have a forEach() method that allows you to iterate through the key-value pairs.
*/
const countryMap = new Map();

countryMap.set('IN', "India");
countryMap.set('US', "United States of America");
countryMap.set('US', "United States of America");
countryMap.set("CHN", "China");
countryMap.set("IN", "India");

// console.log(countryMap);

for (const [key, value] of countryMap) {
    // console.log(`Key: ${key}, Value: ${value}`);
}

// for (const key in countryMap) {
//     console.log(countryMap[key]);
// }


/*
    - Objects can not be iterated through for...of loop
    - Objects can be iterated using for...in loop.
// */
// const myObject = {
//     'game1' : "NFS",
//     'game2' : "Red Dead Redemption",
//     'game3' : "GTA V",
//     'game4' : "Skyrim",
// }

// for (const key in myObject) {
//     console.log(key+ " : " +myObject[key]);
// }

const myArr2 = ["Java", "JavaScript", "CSS", "HTML"];

for (const key in myArr2) {
    // console.log(myArr2[key]);
}


//forEach loop
const codingLanguage = ["C", "Java", "JavaScript", "CSS", "HTML"];
// codingLanguage.forEach(function greet(val){
//     console.log(val);
// });

// codingLanguage.forEach((item) => {
//     console.log(item);
// })

const myCoding = [
    {
        LName : "JavaScript",
        creator : "Brendan Eich",
        year : 1995,
    },
    {
        LName : "CSS",
        creator : "Cascading Style Sheets",
        year : 1996,
    },
    {
        LName : "HTML",
        creator : "Sir Tim Berners-Lee",
        year : 1991,
    },
    {
        LName : "Java",
        creator : "James Gosling",
        year : 1995,
    }
];

myCoding.forEach((item) => {
    console.log(`Language: ${item.LName}, Creator: ${item.creator}, Year: ${item.year}`);
});