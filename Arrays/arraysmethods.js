let arr = [1,2,3,4,5]
// arr.push(6,"Aman Singh" ,7)

// arr.pop(7)
// pop and pull : use to remove and add in last element in array

// arr.shift(); // shift :  is use to remove first element in array

// arr.unshift(9); // unshift : use to add first element in array
// console.log(arr.includes(7));//includes or not 
// console.log(arr.indexOf(5));

// const newArr = arr.join()
// console.log(newArr);
// console.log(typeof newArr);
// console.log(arr);

//  slice -->last element/index not included , 
// splice -->last element/index is included

console.log("A" , arr);
const myn1 = arr.slice(1,3) // index 1 - 2
console.log(myn1);
console.log("B" , arr);

const myn2 = arr.splice(1,3) // index 1 - 3
console.log(myn2);



