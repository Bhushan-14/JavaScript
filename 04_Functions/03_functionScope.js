/*
    Function Scope:
    - Variables declared inside a function are not accessible from outside the function.
    - Variables declared outside a function are global variables and can be accessed and modified from any function.
    
    - Function scope is determined by the curly braces {}.
*/

// let a = 10;
// const b = 10;
// var c = 30;
/*
    - var is function scoped.
    - var has function hoisting feature.

    - let and const are block scoped.
    
    - let and const have block hoisting feature.
    - var has global hoisting feature.
*/

// if(true){
//     let a = 20;
//     const b = 20;
//     var c = 40;
//     console.log(`Inside block: ${a} ${b} ${c}`);
// }

// console.log(`Outside block: ${a}`);
// console.log(`Outside block: ${b}`);
// console.log(`Outside block: ${c}`);


// function one(){
//     const userName = "Sagar";

//     function two(){
//         const web = "www.youtube.com";
//         console.log(`Inside funcation two() : ${userName}`);
//     }
//     // console.log(web);//Error: 
//     two();
// }
// one();

/*
    Closure:
    - A function that has access to the parent scope, even after the parent function has closed.
    - Closure is a combination of a function bundled together with references to its surrounding state.

*/

if(true) {
    const userName = "Sagar";
    if(userName === "Sagar") {
        const web = "www.youtube.com";
        // console.log(`Inside block: ${userName} and ${web}`);
    }
    // console.log(web); //error 
}
// console.log(userName);



//**********Hoisting************//
//Function
console.log(addOne(10)); //it gives output  
function addOne(value){
    return value + 1;
}

//Expression
// console.log(addTwo(10)); //Error
const addTwo = function(value){
    return value + 2;
}

/*
    Hoisting:
    - JavaScript engine moves all declarations to the top of their scope before running the code.
    - Function declarations are hoisted, but function expressions are not.
    - Variable declarations and assignments are hoisted.
*/

