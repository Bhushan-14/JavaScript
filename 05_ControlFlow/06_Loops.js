// const coding = ["Java", "JavaScript", "HTML", "CSS"];

// const values = coding.forEach((item) => {
//     return item
// });
// console.log(values);

const myNums = [1,2,3,4,5,6,7,8,9,10];
// const newNums = myNums.filter((num) => {
//     // num > 4
//     return num > 4;
// })
// console.log(newNums)


// const newNums = 0;
// myNums.forEach((num) => {
//     if(num >4){
//         newNums.push(num);
//     }
// });
// console.log(num)  

const myNumbers = [1,2,3,4,5,6,7,8,9,10];

const newNums = myNumbers.map((num) => {
    return num + 10
});
console.log(newNums);
