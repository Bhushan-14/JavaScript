const name = "Sagar";

const age = 45;

console.log(name+" is "+age+" years old");

//String interpolation
console.log(`${name.toUpperCase()} is ${age} years old`);

//using new keywod we can create a new string object with the help of String constructor instead of using string literal 
const gameName = new String("Sagar Birhade");

console.log(gameName);
// console.log(gameName[0]);
// console.log(gameName.__proto__);
// console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName.toLowerCase());
// console.log(gameName.indexOf("B"));
// console.log(gameName.lastIndexOf("a"));
// console.log(gameName.charAt(0));
// console.log(gameName.substring(0,7));

let sent = "My name is Sagar Birhade and I am a software developer  ";

console.log(sent.split(" "));

console.log(sent.trim());

const url = "https://chatgpt.com/c/6780af95-4eb0-8008-9119-0004bbda9db2";
console.log(url.split("-"));