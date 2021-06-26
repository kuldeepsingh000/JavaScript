// Traversal of array.
var myFriends = ['Kul', 'deep', 11, 58.25, false];

// This is traditional for loop.
for (var i = 0; i < myFriends.length; i++) {
    console.log(myFriends[i]);
}

var arrMyFriends = new Array;
arrMyFriends.push(12);
arrMyFriends.push(13);
arrMyFriends.push('Kul');
arrMyFriends.push('Singh');

// push methods adds the value at the end and returns the length of newly formed array.

var y = arrMyFriends.push(89.96);
console.log();
console.log(y);
console.log(arrMyFriends.length);

for (var i = 0; i < arrMyFriends.length; i++) {
    console.log(arrMyFriends[i]);
}
console.log();
arrMyFriends.pop();//Remove the last elements and returns the popped element.
for (var i = 0; i < arrMyFriends.length; i++) {
    console.log(arrMyFriends[i]);
}

console.log();

// For in loop and For of loop

for (var key in arrMyFriends) {
    console.log(key + " " + arrMyFriends[key]);
}

console.log();

for (var key of arrMyFriends) {
    console.log(key);
}


// For each loop
arrMyFriends.forEach(function (element, index, array) {
    console.log(element + "  :  " + index + " : " + array);
});

console.log();

arrMyFriends.forEach((element, index, array) => {
    console.log(element + "  :  " + index + " : " + array);
});


/**
 *  
    D:\DailyStuff\JavaScript>node ArrayInJS.js
    Kul
    deep 
    11   
    58.25
    false
        
    5    
    12   
    13   
    Kul  
    Singh
    89.96
        
    12   
    13   
    Kul
    Singh

    0 12
    1 13
    2 Kul
    3 Singh

    12
    13
    Kul
    Singh
    12  :  0 : 12,13,Kul,Singh
    13  :  1 : 12,13,Kul,Singh
    Kul  :  2 : 12,13,Kul,Singh
    Singh  :  3 : 12,13,Kul,Singh

    12  :  0 : 12,13,Kul,Singh
    13  :  1 : 12,13,Kul,Singh
    Kul  :  2 : 12,13,Kul,Singh
    Singh  :  3 : 12,13,Kul,Singh
 * 
 */


// Searching and filter in array
var array = [12, 45, 90, 90, 100, 101];
console.log(array.indexOf(100)); //4
console.log(array.indexOf(4)); //-1
// Returns the index of the first occurrence of a value in an array, or -1 if it is not present.
console.log(array.lastIndexOf(90)); // 3
// Returns the index of the last occurrence of a specified value in an array, or -1 if it is not present.

array.push("Kul", 'BP', 'Singh');

console.log(array);

/**
 * [
    12,      45,
    90,      90,
    100,     101,
    'Kul',   'BP',
    'Singh'
    ]
 */

// Unshist() methods - Inserts new elements at the start of an array, and returns the new length of the array.
array.unshift("In starting");

console.log(array); //[ 'In starting', 12, 45, 90, 90, 100, 101, 'Kul', 'BP', 'Singh' ]

// 2nd Example
const myNumbers = [1, 2, 3, 5];
myNumbers.unshift(4, 6);
console.log(myNumbers) //  [4, 6, 1, 2, 3, 5 ]


// Sorting in array
var mySort = [34, 1, 90, 56, 0, 54];
mySort.sort();
console.log(mySort);  // [ 0, 1, 34, 54, 56, 90 ]


/**
 * push() method add the data in end while
 * unshift() method add the data in the starting
 * pop() removes the last element and return its
 * whereas shift() method removes the first element and 
 * returns it  
 * */

var x = myNumbers.shift();
console.log(x); // 4

// How to sort the numbers in the array in ascending(up) and descending(down) order.

const myUpAndDown = [78, 0, 23, 1, 7, 34, 16, 13];
myUpAndDown.sort((a, b) => { return a - b });
console.log(myUpAndDown);
myUpAndDown.sort((a, b) => { return b - a });
console.log(myUpAndDown);
/*
    [
    0,  1,  7, 13,
    16, 23, 34, 78
    ]
    [
    78, 34, 23, 16,
    13,  7,  1,  0
    ]
 */

// Splice() method
const month = ['J', 'F', 'M', 'A', 'J', 'Ju'];
// month.splice(6, 0, 'D');
// or
month.splice(month.length, 0, 'D');

console.log(month); //['J', 'F', 'M', 'A', 'J', 'Ju', 'D'];
month.splice(2, 3, 'Au'); //['J', 'F','Au', 'Ju', 'D'];
console.log(month);


// Filter() method in javascript

function func() {
    var toBeFilter = [12, 45, 21, 90, 4, 5].filter((a) => { return a >= 18; });
    console.log(toBeFilter); // 45, 21, 90.
}
func();

// Map() method in JS

const array1 = [1, 4, 9, 16, 25];
let newArr = array1.map((cuurElememt, index, arr) => {
    return cuurElememt>9;
    // if(cuurElememt > 9){
    //     return cuurElememt;
    // }else{
    //     return "";
    // }
});
console.log(newArr); // [ false, false, false, true, true ]


//Find the square root of each element in the array
let arr = [25, 36, 49, 64, 81];
let modifiedArr = arr.map((curr, index, arr) => {
    return Math.sqrt(curr);
})

console.log(modifiedArr); // [ 5, 6, 7, 8, 9 ]

// Multiply each number by 2 and return only those which are greater then 10;

let numberN2 = [2, 3, 4, 6, 8];
/*
let newNumberN2 = numberN2.map((curr, index, array) => {
    return curr*2;
}).filter((curr) => {
    return curr > 10;
});
console.log(newNumberN2); // [ 12, 16 ]
*/

let newNumberN2 = numberN2.map( (curr) => curr*2 ).filter((curr) => curr > 10);
console.log(newNumberN2); // [ 12, 16 ]

// Reduce() in JS
let arr1 = [5, 6, 2];
let sum = arr1.reduce((accumulator, curr) => {
    return accumulator += curr;
});
console.log(sum); // 13 

