/*
    Looping Statements:
    1. For Loop:
    2. While Loop:
    3. Do-While Loop:
*/

// let arr = [1,2,3,4,5];
// for(let i = 0; i < arr.length; i++){
//     const element = arr[i];
//     // if(element == 4){
//     //     console.log(`${element} at ${i} position`);
//     // }   
//     for(let j = 0; j < arr.length; j++){
//         console.log(`${arr[j]} at ${j} position`);
//     }
// }
// console.log(element); not accessible outside of the block scope

// let myArray = ['a', 'b', 'c', 'd'];
// for (let index = 0; index < myArray.length; index++) {
//     const element = myArray[index];
//     console.log(element);
//     if(element == 'b'){
//         console.log('a detected');
//         break;
//     }
// }
let myArray = ['a', 'b', 'c', 'd'];
for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    console.log(element);
    if(element == 'b'){
        console.log('a detected');
        continue;
    }
}

/*
    break and continue:
    1. Break: Terminates the loop immediately and jumps to the next iteration of the loop.
    2. Continue: Skips the current iteration and moves to the next one.
*/