const fruits = ['Mango', 'Banana', 'Apple', 'Orange'];

const vegetables = ['Carrot', 'Tomato', 'Potato', 'Broccoli'];

// const fruitsVegetables = fruits.push(vegetables);
// console.log(fruitsVegetables); //it push complete array vegetables as a single element in fruits array and returns existing fruit array

// const mergedArray = fruits.concat(vegetables);
// console.log(mergedArray); //combines two array and returns new array


//Spread operator
// console.log([...fruits, ...vegetables]); //combines two array and returns new array

// const arr1 = [1,[3,4],6,[7,[9,10],11]];
// console.log(arr1.flat(2)); 
//flat() method creates a new array with all sub-array elements concatenated into it recursively up to the specified depth.


// console.log(Array.isArray("fruits"));
// console.log(Array.from("fruits"));
// console.log(Array.from({name:"fruits"}));

// let s1 = 200;
// let s2 = 300;
// let s3 = 400;
// let s4 = 500;
// console.log(Array.of(s1,s2,s3,s4)); //creates a new Array instance from a variable number of arguments, regardless of number or type of the arguments.