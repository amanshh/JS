// singleton only make constructor
// object.create

//  object literals

const mySym = Symbol("key1")

const JsUser = { // declaring a objects
    name: "Aman",
    "fullname":  "Aman Singh",
    age: 18,
    [mySym]: "mykey1",// [] symbol keys
    location: "Delhi",
    email: "amangf@gmail.com",
    isLoginDays: ["Monday", "Wednesday"]
}
// Accessing Objects
// old way : 
// console.log(JsUser.email)
// // new way
// console.log(JsUser["name"])
// console.log(JsUser[mySym])

// changing objects values
JsUser.email = "amansdg@gmail.com"
// Object.freeze(JsUser)
JsUser.email = "amnased@gmail.coom"
// console.log(JsUser);

JsUser.greeting =function(){
    console.log("Hello JS Users");
}
    JsUser.greetingTwo = function(){
        console.log(`Hello JS Users, ${this.name}`); // strin intepulation
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());

