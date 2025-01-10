// let score = 44;
// console.log(typeof score);
// console.log(typeof (score));


// score = "44ABC221";
// console.log(typeof score);

// let valueNumber = Number(score);
// console.log(typeof valueNumber);
// console.log(valueNumber); //NaN -> Not a number

/*
    "33" => 33
    "33ABC" => NaN
    true => 1
    null => 0
    undefined => NaN
*/ 

// let isLoggedIn = 1;
// console.log(typeof isLoggedIn);

// let booleanIsLoggedIn = Boolean(isLoggedIn);
// console.log(typeof booleanIsLoggedIn);

// console.log(booleanIsLoggedIn);

/*
    true => 1
    false => 0
    "" => false
    "avbd" => true
*/ 

// let age  = 23;
// console.log(typeof age);
// let stringAge = String(age);
// console.log(typeof stringAge);
// console.log(stringAge);

/****************** Operations ******************/

// let value = 3;
// let negValue = - value;
// console.log(negValue);

// console.log(3 + 3);
// console.log(3 - 3);
// console.log(3 * 3);
// console.log(3 / 3);
// console.log(3 % 3);
// console.log(3 ** 3);

// let str1 = "Hello";
// let str2 = "World";
// console.log(str1 + " " + str2);

// console.log(3 + 3);
// console.log("3" + 3);
// console.log(3 + "3");
// console.log("3" + "3");
// console.log(3 + "3ABC");

// console.log(3 + 3 + "adc");
// console.log("abc" + 3 + 3);

// console.log((3 + 5) * 5 % 3);


// console.log(true);
// console.log(!!true);
// console.log(+true);

// console.log(false);
// console.log(!!false);
// console.log(+false);

// console.log(+"");
// console.log(!!"");

// let num1, num2, num3;
// num1 = num2 = num3 = 2+3;
// console.log(num1, num2, num3);

let gameCounter = 0;
let b = gameCounter++;
console.log(b+" "+gameCounter);

let gameCounter2 = 0;
let a = ++gameCounter2;
console.log(a+" "+gameCounter);
