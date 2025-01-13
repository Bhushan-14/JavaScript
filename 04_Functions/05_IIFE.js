/*
    IIFE(Immediately Invoked Function Expression)
    - function which executed immediately to avoid global scope pollution.

    - IIFE is a function that runs as soon as it is defined.
    - IIFE is useful when you need to encapsulate a block of code and prevent it from polluting the global scope.
    - IIFE is also useful when you need to create a private scope for variables and functions.
*/
(function one(){
    console.log("DB connected");
})();
