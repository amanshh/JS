const user = {
    username: "Aman",
    price: 199,

    WelcomeMessage: function() {
        console.log(`${this.username} , Welcome to website`);
  //  console.log(this);
    }

}

// user.WelcomeMessage()
// user.username = "Siya"
// user.WelcomeMessage()

// console.log(this);

// const aam = function (){
//     let username ="Aman"
//     console.log(this.username);
// }

const aam =  () => {
    let username ="Aman"
    console.log(this);
}

// aam()

// Arrow function  // = => { } 
// const addTwo = (num1 , num2) => {
//     return num1 + num2
// }
// console.log(addTwo(5,9))

// const addTwo = (num1 , num2) =>  num1 + num2  // implicit return
// const addTwo = (num1 , num2) =>  (num1 + num2)

const addTwo = (num1, num2) => ({username: "Aman"})
console.log(addTwo(5,9))

// const myArray =[2,3,4,5,6]

// myArray.forEach()