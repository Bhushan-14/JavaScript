/*
    Promise :
    - A Promise is an object that represents the eventual completion or failure of an asynchronous operation.
    - Promises are used for asynchronous programming and handle errors elegantly.
    - Promises can be in one of the following states: 
        1. pending 
        2. fulfilled 
        3. rejected.

    - There are five keywords which are used with promises
    1. resolve() - fulfills the promise with a given value
    2. reject() - rejects the promise with a given reason or error object
    3. then() - registers a callback function to be executed when the promise is fulfilled
    4. catch() - registers a callback function to be executed when the promise is rejected
    5. finally() - registers a callback function to be executed whether the promise is fulfilled or rejected
    - Promise chaining is a feature where a promise returns another promise, allowing for more concise and readable code.
    - Promises can be chained using the then() and catch() methods, and they can also be chained using the async/await syntax.

    - Async and Await in JavaScript is used to simplify handling asynchronous operations using promises.
    - Async functions are declared using the async keyword before the function keyword.
    - The async function allows us to write promise-based code as if it were synchronous. This ensures that the   
      execution thread is not blocked. Async functions always return a promise. If a value is returned that is not a promise, JavaScript automatically wraps it in a resolved promise. 
    - The await keyword is used to wait for a promise to resolve. It can only be used within an async block. Await  
      makes the code wait until the promise returns a result, allowing for cleaner and more manageable asynchronous code.

    - The async keyword transforms a regular JavaScript function into an asynchronous function, causing it to return a 
     Promise.
    - The await keyword is used inside an async function to pause its execution and wait for a Promise to resolve  
     before continuing.
*/

// const promiseOne = new Promise(function(resolve, reject) {
//     setTimeout(function() {
//         console.log('Async task one is complete');
//         resolve();
//     },2000)
// });
// promiseOne.then(function(){
//     console.log('Promise One Consumed')
// });

// new Promise(function(resolve, reject) {
//     setTimeout(function() {
//         console.log('Async task two is complete');
//         resolve('Error occurred');
//     },1000)
// }).then(function(){
//     console.log('Promise Two Consumed');
// });

// const promiseThree = new Promise(function(resolve, reject) {
//    setTimeout(function() {
//         console.log('Async task three is complete');
//         resolve({userName : 'Sagar',age : '32'});
//     },4000)
// });
// promiseThree.then(function(user){
//     console.log(user);
//     console.log('Promise Three Consumed');
// });

// const promiseFour = new Promise(function(resolve, reject){
//     setTimeout(function(){
//         let error = true;
//         if(!error){
//             resolve({userName: 'Sagar', age: '32'});
//         } else {
//             reject('An error occurred');
//         }
//     }, 2000);
// });

// promiseFour
// .then(function(user){
//     console.log(user); 
//     return user.userName;
// })
// .then(function(userName){
//         console.log(userName);
// })
// .catch(function(err){
//         console.log(err); 
// })
// .finally(function(){
//         console.log('Promise Four is completed');
// });

// const promiseFour = new Promise(function(resolve, reject){
//     setTimeout(function(){
//         let error = false;
//         if(!error){
//             resolve({userName: 'Sagar', age: '32'});
//         } else {
//             reject('An error occurred');
//         }
//     }, 5000);
// });

// (async function handlePromiseFive() {
//     try {
//         const user = await promiseFour;
//         console.log(user); 
//         console.log(user.userName); 
//     } catch (err) {
//         console.log(err); 
//     }
// })();


// async function getAllUser(){
//     try{
//         const response = await fetch('https://api.github.com/users/Bhushan-14')
//         const data = await response.json();
//         console.log(data);
//     }catch(error){
//         console.log("Error : ",error);
//     }
// };

fetch('https://api.github.com/users/Bhushan-14')
.then((response) => {
    return response.json();
})
.then((data) => {
    console.log(data);
})
.catch((error) => {
    console.log("Error : ",error);
})
.finally(() => {
    console.log("User data is received");
});

/*
    fetch api:
    - fetch() is a global function.
    - It is used to make HTTP requests.
    - The Fetch API uses Request and Response objects (and other things involved with network requests), as well as 
      related concepts such as CORS and the HTTP Origin header semantics.
    - fetch() returns a Promise that resolves to a Response object.
    
*/