/*
    Conditional Statement:
    1. if
    2. else if
    3. else
*/

// let num = 32;
// if(num % 2 == 0){
//     console.log("Condition get True");
// };


// let temp = 2;
// if(temp > 30){
//     console.log("Temperature is hot");
// }else{
//     console.log("Temperature is cold");
// }


//const balance = 2000;
const balance = 400;
// if(balance > 2000) console.log("balance is above 2000");

if(balance < 2000 && balance > 500) {
    console.log("balance is low");
}else if(balance < 500){
    console.log("balance is too low");
}else{
    console.log("balance is in the desired range");
}