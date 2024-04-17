// JavaScript Execution Context How JS execute code

// --> Global Execution Context
//  --> Function Execution Context
//  --> Eval Execution Context

//   {} --> Memory Creation Phase or Creation Phase like allocating the place

// --> Execution Phase

// let val1 = 20
// let val2 = 5
// function addNum(num1, num2){
//     let total = num1 + num2
//     return total
// }
// let result1 = addNum(val1,val2)
// let result2 = addNum(20,5)

// Cycle 1 ---->
// step1: Global Execution -- this
//  step2: Memory phase 
    // val1 --> undefined
    // val2 --> undefined
    // addNum --> defination
    // result1 --> undefined
    // result2 --> undefined

    // Cycle 2 --->
    // step3:  Execution Phase 
    //  val1 <-- 20
    //  val2 <-- 5
//  addNum --> create Box // new executional context ( New variable environment + Thread ) after using it will delete


//  --------------Call Stack-------------

//  chrome console Sources  tab mein 
function one(){
    console.log("one")
    two()
}
function two(){
console.log("two")
three()
}
function three(){
    console.log() 
}
one()
two()
three()
