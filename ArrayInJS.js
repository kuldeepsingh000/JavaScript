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
arrMyFriends.pop();//Remove the last elements.
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
arrMyFriends.forEach(function(element, index, array){
    console.log(element + "  :  " + index + " : " + array);
});

console.log();

arrMyFriends.forEach((element, index, array) => {
    console.log(element + "  :  " + index + " : " + array);
});


/**
 *  Kul
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
var array = [12, 45 , 90, 90, 100, 101];
console.log(array.indexOf(100)); //4
console.log(array.indexOf(4)); //-1
// Returns the index of the first occurrence of a value in an array, or -1 if it is not present.
console.log(array.lastIndexOf(90));
// Returns the index of the last occurrence of a specified value in an array, or -1 if it is not present.

array.push("Kul", 'BP', 'Singh');

console.log(array);
// Unshist() methods - Inserts new elements at the start of an array, and returns the new length of the array.
array.unshift("In starting");

console.log(array);
 