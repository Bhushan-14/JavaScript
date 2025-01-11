/*
    Objects: 
    - Objects are used to store multiple values in a single variable.
    - Objects are more complex than arrays.
    - Objects can store multiple values in key-value pairs.
    - Objects are used to represent real-world entities.
    - Objects can store functions as well.
    - Objects have properties and methods.
    - Properties are the values associated with an object.
    - Methods are the functions associated with an object.
    - Objects are created using curly braces {}.
    - Objects are mutable.
    - Objects are reference types.
    - Objects are unordered.
    - Objects are passed by reference.
    - Objects are dynamic.
    - Objects can be nested.


    - Objects can be created using object constructors.
    - Objects can be created using object literals.
    - Objects can be created using the new keyword.
    - Objects can be created using the Object.create() method.
    - Objects can be created using the class keyword.
    - Objects can be created using the function constructor.
    - Objects can be created using the ES6 class syntax.
    - Objects can be created using the factory function.
    - Objects can be created using the prototype.
    - Objects can be created using the constructor function.
*/

// object literal
const mySym = Symbol('mySymbol1');

const user = {
    name: 'Sagar',
    age: 30,
    location: 'India',
    email: 'sagar@gmail.com',
    isLoggedIn: true,
    [mySym]: 'This is a symbol',
};
// user.name = 'Sagar Birhade';
// Object.freeze(user);

// console.log(user);
// console.log(user.name);

// user.age = 31;
// console.log(user.age);

// console.log(user[mySym]);

user.greeting = function (){
    console.log('Hello '+user.name+'!');
} 

user.greeting2 = function (){
    console.log(`Good Morning ${this.name}!`);
} 


console.log(user.greeting());
console.log(user.greeting2());