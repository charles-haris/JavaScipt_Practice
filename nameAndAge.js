//generally the names of your variables must be speaking names 
let name = prompt("What is your name?");
console.log("Your name is", name);

let age = prompt("How old are you?");
age = parseInt(age);

if (!isNaN(age)) {
  console.log("Your age is", age);
} else {
  console.log("Invalid age entered.");
}

//this is your previous code
let a = parseInt(prompt("What is your name?"))
console.log("How are you doing", a)
