// let vs const vs var
// var - function scope
// let and const - block scope

// var myName = "Kuldeep Singh";
// console.log(myName);

// myName = "Shubham Singh";
// console.log(myName);

// let myName = "Kuldeep Singh";
// console.log(myName);

// myName = "Shubham Singh";
// console.log(myName);


// function bioData() {
//     let myFirstName = "Kuldeep";
//     console.log(myFirstName);
//     if(true){
//         let myLastName = "Singh";
//         console.log('Inner ' + myLastName);
//         console.log('Inner ' + myFirstName);
//     }

//     console.log('InnerOuter ' + myLastName);
// }

// bioData();

// Templates literals or template strings
var x = 8;
for (var i = 1; i <= 10; i++) {
    console.log(`${x} * ${i} = ${x * i}`);
}


// Default parameter
function mult(a, b = 1) {
    return a*b;
}

console.log(mult(12, 5));
console.log(mult(120, ));

// Fat Arrow Function
console.log(sum());
function sum() {
    let a = 5, b = 6;
    let sum = a+b;
    return `The sum of the two number is ${sum}`;
}

// how to convert it into fat arrow function
// const Sum = () => {
//     let a = 15, b = 6;
//     return `The sum of the two number is ${a+b}`;
// }

const Sum = () => `The sum of the two number is ${(a = 5) + (b=9)}`;
console.log(Sum());

