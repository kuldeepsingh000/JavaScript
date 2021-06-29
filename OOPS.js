// Object literal is simply key:value pair

/*
// First Way to Create Object.
let bioData = {
    myName : "Kuldeep Singh",
    myAge :26,
    getData : function(){
        console.log(`My name is ${bioData.myName} and my Age is ${bioData.myAge}`);
    }
}

console.log(bioData.myName);
console.log(bioData.myAge);
bioData.getData();
*/

let bioData = {
    myName : "Kuldeep Singh",
    myAge :26,
    getData(){
        console.log(`My name is ${bioData.myName} and my Age is ${bioData.myAge}`);
    }
}

console.log(bioData.myName);
console.log(bioData.myAge);
bioData.getData();


let bio = {
    myName : {
        firstName : "Kuldeep",
        secondName : "Singh",
    },
    myAge :26,
    getData(){
        console.log(`My name is ${bioData.myName} and my Age is ${bioData.myAge}`);
    }
}

console.log(bio.myName);
console.log(bio.myName.firstName);
console.log(bio.myName.secondName);


// Example of this
console.log(this); // it refers to the current context and that is window global object

const obj = {
    myAge : 30,
    getMyAge(){
        console.log(this);
        console.log(this.myAge);
    }
}

obj.getMyAge();


