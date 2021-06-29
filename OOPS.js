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


