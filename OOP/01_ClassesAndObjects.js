/*
    OOPS: Object-Oriented Programming
    - Classes: Blueprint for creating objects, encapsulating data and behaviors.
    - Objects: Instances of classes that hold data and interact through methods.
    - Methods: Functions within a class that define behaviors of objects.

    - Why OOPs: Promotes reusability, modularity, and scalability of code.

    Features of OOPs:
    - Classes: 
      - Define the structure and behavior of objects.
    - Object Literal: 
      - Directly creates an object using curly braces.
    - Constructor Function: 
      - A function used to create and initialize objects.
    - Prototype/Proto: 
      - Mechanism for inheritance, allowing objects to share properties and methods.
    - Instances/new keyword: 
      - Creates new objects from a class or constructor function.

    Concepts of OOPs (4 Pillars of OOPs):
    - Inheritance: 
      - Allows a class to inherit properties and methods from another class.
    - Encapsulation: 
      - Bundles data and methods, restricting direct access to some components.
    - Access Modifiers: 
      - Control access to class members (public, private, protected).
    - Abstraction: 
      - Hides implementation details, exposing only essential features.
      - Example: Using a `fetch()` function without knowing the underlying logic.
    - Polymorphism: 
      - Enables objects to be treated as instances of their parent class.
      - Example: Method overloading (same name, different parameters) and overriding (subclass-specific behavior).
*/


// const user = {
//     username: 'Sagar',
//     age: 30,
//     getUserDetails: function(){
//         console.log(`Name: ${this.username}, Age: ${this.age}`);
//     }
// };
// console.log(user.username);
// console.log(user.getUserDetails());

// const user2 = {
//     username: 'Mayur',
//     age: 31,
//     getUserDetails: function(){
//         console.log(`Name: ${this.username}, Age: ${this.age}`);
//     }
// }
// console.log(user2.username);
// console.log(user2.getUserDetails());

// const promiseOne = new Promise();
const date = new Date();


function User(username, loginCount, isLoggedIn){
    this.username = username
    this.loginCount = loginCount
    this.isLoggedIn = isLoggedIn

    
    return this;
}
const userOne = new User('Sagar',4,true);
const userTwo = new User('Mayur',6,true);
console.log(userOne);
console.log(userTwo);



