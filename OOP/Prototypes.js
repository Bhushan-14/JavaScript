/*
    - JavaScript show prototypal behavior
    - Objects are created by attaching properties and methods to a prototype object.
    - When a property or method is accessed on an object, JavaScript first checks if the object itself has that      
      property or method.
    - If not found, JavaScript looks at the prototype of the object.
    - If the property or method is found in the prototype, JavaScript uses the value from the prototype.
    - If the property or method is not found in the prototype, JavaScript checks the prototype of the prototype.
    - This process continues until the property or method is found or the prototype chain reaches the end (null).

*/
function multiplyByFive(num){
    return num * 5;
};
multiplyByFive.power = 2;

console.log(multiplyByFive(5));
console.log(multiplyByFive.power);
console.log(multiplyByFive.prototype);


function createUser(userName, score){
    this.userName = userName;
    this.score = score;
}

createUser.prototype.updateScore = function(){
    this.score++;
};
createUser.prototype.printMe = function(){
    console.log(`Score is ${this.score}`);
    
};
const user1 = new createUser("Sagar", 10);
const user2 = new createUser("Mayur", 13);
user1.printMe();
user2.printMe();

/*
    A new object is created: The new keyword initiates the creation of the new object

    A prototype is linked: The newly created object gets linked to the prototype proprty of counstructor function.
    This means that it has access to peoperties and menthods defined on the constructors prototype

    The Constructor is called: The constructor function is calledis called with the specified arguments and this is bound to the newly created object. If no explicit return value is specifies from the constructor, JavaScript assumes this specified from the constructor, JavaScript assumes this, the newly created constructor function, to be the intended return value.

    The newly created object is returned: After the constructor function is called has been called if it doesnot return a non-primitive value(objec, array, function, etc,.), the newly created object is returned.
*/