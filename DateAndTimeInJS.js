// Date and Time in JS

/**
 * There are 4 ways to create a new data object
 * new Date();
 * new Date(year, month, day, hours, minutes, seconds, milliseconds);
 * new Date(milliseconds);
 * new Date(date string)
 */

// Date objects are created using new Date() constructor.
let currDate = new Date();
console.log(currDate);
console.log(currDate.getDate());
console.log(currDate.toLocaleString());
console.log(currDate.toTimeString());
console.log(currDate.getFullYear());

console.log(Date.now());