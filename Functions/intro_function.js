// First class citizen in Js
function greet(){
    console.log("Hi there!")
    console.log("Good Morning")
}

function sqr(z){ // z -> parameter
// console.log(z*z);
return;
}

greet(); // calling a function
greet();

 let z = sqr(9); // 9 -> arguments
 console.log(z);