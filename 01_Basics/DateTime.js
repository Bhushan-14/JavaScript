// let myDate = new Date()
// console.log(myDate.toString()); 
// console.log(myDate.toDateString());
// console.log(myDate.toTimeString());
// console.log(myDate.toLocaleString());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toLocaleTimeString());

// console.log(myDate.toUTCString());

// console.log(myDate.toISOString());


// let myCreatedDate = new Date(2025, 0 , 10);
// console.log(myCreatedDate.toString());

// let myCreatedDate1 = new Date("2025-01-10");
// console.log(myCreatedDate1.getTime());

// let myTimeStamp = Date.now();
// console.log(myTimeStamp);


let newDate = new Date();

// console.log(newDate.getDate());
// console.log(newDate.getDay());
// console.log(newDate.getFullYear());
// console.log(newDate.getHours());
// console.log(newDate.getMinutes());
// console.log(newDate.getSeconds());
// console.log(newDate.getMilliseconds());
// console.log(newDate.getTime());

newDate.toLocaleString('default',{
    weekday: 'long'
});

console.log(newDate)