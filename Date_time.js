// DATE
let myDate = new Date()
console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toISOString());
// console.log(myDate.toJSON());
// console.log(myDate.toLocaleTimeString());
// console.log(myDate.toUTCString());
// console.log(myDate.toLocaleString());
// console.log(myDate.getTimezoneOffset());
console.log(myDate.toTimeString());
console.log(typeof myDate);

// let myCreatedDate = new Date(2024,0,14)
// let myCreatedDate = new Date(2024,0,22, 5,2)
// let myCreatedDate = new Date("2024-02-12")
let myCreatedDate = new Date("02-12-2024")
// console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now()
// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());
// console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate)
console.log(newDate.getMonth() +1);
console.log(newDate.getDay);

// `${newDate.getDay()} and the time `
newDate.toLocaleString('default', {
weekday: "long"
})
