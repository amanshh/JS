function sayName(){
    console.log("a");
    console.log("m");
    console.log("a");
    console.log("n");
}

// sayName();

// sayName ----> Reference
// sayName() ---> Execution


//  function addTwoNumbers(number1, number2){// number1 and number2 are parameters
//  console.log(number1+number2);
//  }
function addTwoNumbers(number1,number2){
 

// let result = number1 + number2
//  return result
return number1 + number2
}
const result = addTwoNumbers(5,8) // 5 and 8 are arguments

// console.log("Result: ",result);

function loginUserMessage(username = "Mann"){
    if(username === undefined){
        // OR if(!username){
        console.log("Please enter a username=");
     return  
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("Aman"))
// console.log(loginUserMessage("Aman"))

function calculatorCartprice(val1,val2,...num1){ // ... -> rest operator
    return num1
}

// console.log(calculatorCartprice(200,400,500,2000))

const user = {
    username: "Aman",
    price:199
}
function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

// handleObject(user)
handleObject({
    username:"Aman",
    price: 399
})
 const myNewArray = [200,400,100,600]
 function returnSecondValue(getArray){
    return getArray[1]
 }

//  console.log(returnSecondValue(myNewArray));

 console.log(returnSecondValue([200,400,500,1000]));
