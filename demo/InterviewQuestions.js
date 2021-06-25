// 1 - Difference between Null and undefined
var iAmUseLess = null; // Null as an assignment value
console.log(iAmUseLess)
console.log(typeof(iAmUseLess));

var iAmStandBy;
console.log(iAmStandBy);
console.log(typeof(iAmStandBy));

/*
    Output
    null
    object
    undefined
    undefined
*/

// Undefined is a variable that has been declared but not assigned a value.

//2 -  What is NaN - Not a number
// it is a property of the global object.

var myPhoneNumber = 9876543210;
var myName = "Kuldeep Singh";

console.log(myPhoneNumber);
console.log(myName);

console.log(isNaN(myPhoneNumber));
console.log(isNaN(myName));

/*
    Output
    9876543210
    Kuldeep Singh
    false
    true
*/

/*
NaN Practise
*/

console.log(NaN === NaN);
console.log(Number.NaN === Number.NaN);
console.log(isNaN(NaN)); // true