const randomColor = function(){
    const hex = "0123456789ABCDEF";
    let color = '#';
    for(let i = 0; i < 6; i++) {
        color += hex[Math.floor(Math.random() * 16 )];
    }
    return color;
};

let intervalID;
const startChangingColor = function() {
    function changeColorContinously(){
        document.body.style.backgroundColor = randomColor();
    }
    if(!intervalID){
        intervalID = setInterval(changeColorContinously,2000);
        console.log("STARTED");
    }
};
const stopChangingColor = function(color) {
    clearInterval(intervalID);
    intervalID = null;
    console.log("STOPPED");  
};

document.querySelector('#start').addEventListener('click',startChangingColor);

document.querySelector('#stop').addEventListener('click',stopChangingColor);