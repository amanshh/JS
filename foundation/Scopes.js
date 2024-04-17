// var c =300
let a =400
if(true) {
    let a = 10
    const b = 30
    // var c = 40
    console.log("INNER: ", a)
}

// console.log(a);
// console.log(b);
// console.log(c);

function one(){
    const username = "Aman"
    
    function two(){
    const Website = "Youtube"
    console.log(username);
    }
    // console.log(Website)

    two()
}

// one()
if(true){
    const username = "Aman"
    if(username === "Aman") {
        const website = " Youtube"
        console.log(username + website);
    }
        // console.log(website);
    }
    // console.log(username);


    // ########### Intreating ############
    console.log(addone(5));
function addone(num){ // function declare 
    return num +1
}


addtwo(6)
const addtwo= function(num){ // function declare plus host 
    return num +2
}

