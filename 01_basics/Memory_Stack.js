// Stack --> primitive get copy or value , Heap (non-Primitive) get refrence 

let myInstagramname = "x_amansingh.19"

let anothername = myInstagramname
anothername = "AmanShh"

console.log(myInstagramname);
console.log(anothername);

let userOne = {
    email: "user@google.com",
    upi: "user@ibl"
}

let usertwo = userOne

usertwo.email = "amanshh89@gmail.com"

console.log(userOne.email);
console.log(usertwo.email);