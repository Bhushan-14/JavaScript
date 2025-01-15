// document.querySelector('#clock);

const clock = document.getElementById('clock');
// let date = new Date();
// console.log(date.toLocaleTimeString());

let interval = 1000;
setInterval(function() {
    let date = new Date();
    clock.innerHTML = date.toLocaleTimeString();
},interval);
