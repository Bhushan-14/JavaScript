/*
    this keyword:
    - refers to the current object in which it is used.
    
// */
// const user = {
//     username : "Sagar",
//     age : 25,
//     welcomeMessage : function(){
//         console.log(this);
//         return `Welcome ${this.username}!`; //this refers to the current object.
//     }
// };
// console.log(user.welcomeMessage());

// user.username = "Sagar Birhade";
// console.log(user.welcomeMessage());//now context is change 

// console.log(this);

// function one(){
//     const userName = "Sagar";
//     // console.log(this.userName); //this can not use in normal function
// }
// one();


// Arrow function
// const one = () => {
//     const userName = "Sagar";
//     console.log(this);
// };
// one();

/*
    Arrow function:
    - Arrow functions are anonymous functions.
    - Arrow functions do not have their own this keyword.
    - Arrow functions do not have arguments object.
    - Arrow functions do not have prototype property.
    - Arrow functions inherit the this keyword from the enclosing context.
        
    - Arrow functions are does not need implicit return.
    - If the function has only one statement, and the statement returns a value, you can remove the brackets and the return keyword.
*/

//Implicit return 
const addTwo = (num1, num2) => num1 + num2;
console.log(addTwo
    (10, 20));