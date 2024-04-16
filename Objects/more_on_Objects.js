// const instaUser = new Object() // this a singleton objec 
const instaUser = {} // this not a Singleton objects

 instaUser.id = "356abc"
 instaUser.name="Ammy"
 instaUser.isLoggedIn = false

// console.log(instaUser);

const reguleruser = {
    email: "adna@gmail.com",
    fullname:{
        userfullname: {
        firstname:"Aman",
    lastname:"Singh"
}
    }
}

//console.log(reguleruser.fullname.email.firstname);

const obj1 = {1: "a", 2 : "b"}
const obj2 = {3 : "a", 4 : "b"}
const obj4 = {8 : "d", 10 : "e"}

// const obj3 = {obj1,obj2}
// const obj3 = Object.assign({}, obj1 ,obj2,obj4)


const obj3 = {...obj1, ...obj2}
// console.log(obj3);

const users = [
    {

    },
    {

    },
    {

    },
]
users[1].email
console.log(instaUser);

console.log(Object.keys(instaUser));
console.log(Object.values(instaUser));
console.log(Object.entries(instaUser));

console.log(instaUser.hasOwnProperty('isLoggedIn'));
