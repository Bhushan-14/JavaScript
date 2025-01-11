let fruit = ["Mango", "Banana", "Apple", "Orange", "Pineapple"];
let mixArray =[1,"Sagar", "Mayur", "Hrishi", true, 4, 5];

// console.log(fruit[0]);
// console.log(mixArray[5]);

// mixArray.push(3);
// console.log(mixArray);
// console.log(mixArray.length)

// console.log(mixArray.pop());
// console.log(mixArray.length);


// mixArray.unshift(6) //To much time consuming opertaion
// console.log(mixArray);

// mixArray.shift()
// console.log(mixArray)

// console.log(mixArray.includes('Sagar')) //boolean output

// console.log(mixArray.indexOf(4))

// const joinArray = mixArray.join();
// console.log(joinArray)
// console.log(typeof joinArray);


//slice, splice
console.log(mixArray);

const myn1 = mixArray.slice(1, 3); 
console.log(myn1);
console.log(mixArray)

const myn2 = mixArray.splice(1, 3);
console.log(myn2);
console.log(mixArray)

/*
    - slice excludes the end index 
    - slice creates a new array

    - splice includes the end index
    - splice modifies the original array
*/
