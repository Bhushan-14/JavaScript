/* 
    Switch Statement:

*/
/*
    break statement:
    - It terminates the current switch block and transfers the control to the statement following the switch block.

    continue statement:
    - It skips the remaining statements in the current case block and transfers the control to the next case statement.

    default statement:
    - It is executed when no case matches the value of the expression.
*/

/*
    Truthy and Falsy Value
    - In JavaScript, all values are either truthy or falsy.

    - Truthy values:
    - All non-zero numbers, including positive and negative numbers,
    - Non-empty strings, including strings with only white spaces,
    - Non-null objects, including objects created using the new keyword,
    - True values, including true, 1, and any object that has a non-zero length property.
    - "0", "false", " ", []], {}, function (){}

    - Falsy values:
    - 0,
    - false,
    - null,
    - undefined,
    - NaN (Not a Number),
    - Empty strings,
    - Objects created using the Object.create(null) method.
    - Objects created using the {} or [] syntax.
*/
let month = 3
switch(month){
    case 1:
        console.log("January");
        break;
    case 2:
        console.log("February");
        break;
    case 3:
        console.log("March");
        break;
    case 4:
        console.log("April");
        break;
    case 5:
        console.log("May");
        break;
    case 6:
        console.log("June");
        break;
    case 7:
        console.log("July");
        break;
    case 8:
        console.log("August");
        break;
    case 9:
        console.log("September");
        break;
    case 10:
        console.log("October");
        break;
    case 11:
        console.log("November");
        break;
    case 12:
        console.log("December");
        break;
    default:
        console.log("Invalid Month");
}


// Nullish Coalescing Operators (??): null undefined
// let val1;
// // val1 = 5 ?? 10;
// // val1 = null ?? 10;
// // val1 = undefined ?? 10;
// val1 = null?? 10?? 15;
// console.log(val1);
// console.log(val1);
// console.log(val1);
// console.log(val1);

//Ternary operator
//condition ? true : false

// const  price = 60;
// price >= 80 ? console.log("Less than 80") : console.log("More than 80")
