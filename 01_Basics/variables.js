//variables in JavaScript
/*
    There are three keywords which are used to decalre variables in JavaScript
    1. let
    2. var
    3. const
    In JavaScript, let and const are block-scoped, while var is function-scoped.
    const is a constant variable, which means its value cannot be changed once assigned.
    let and const are not hoisted (i.e., they are not available in the current scope until they are declared),
    while var is hoisted (i.e., its value is available in the current scope until it is declared).
*/

let myVariable = "Hello Sagar"; // let is block-scoped
var myVariable2 = "Hello Hrishi"; // var is function-scoped
console.log(myVariable); 
console.log(myVariable2);

const accountId = 224243
let accountEmail = "sagar@example.com"
var accountPassword = "13444"
accountCity = "Shirpur"

// accountId = 244 //const variables can't modified
console.log("Account ID : "+accountId);

// accountEmail = "hrishi@example.com" //let variables can be modified
console.log(accountEmail) ;

// accountPassword = "34322" //var variables can be modified
console.log("Account Password : "+accountPassword);

// accountCity = "Dhule" //default variables can be modified
console.log("Account City : "+accountCity);

let accountState
console.log(accountState)

/*
    prefer not to use var due to block scope and functional scope 
*/