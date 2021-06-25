// If and else
// if raining = raincoat
// else no raincoat

// var raining = true;
var raining = false;

if (raining) {
    console.log("take a raincoat")
}else{
    console.log("Enjoy your day :)");
}

// Check leap year.

var year = 2000;
// debugger;
if(year%4 ===0){
    if(year%100 === 0){
        if(year%400 === 0){
            console.log("This year " + year + " is a leap year");
        }else{
            console.log("This year " + year + " is not a leap year");
        }
    }else{
        console.log("This year " + year + " is a leap year");
    }
}else{
    console.log("This year " + year + " is not a leap year");
}

// What is truthy and falsy values in javascript?
/* 0, " ", undefined, null, NaN, false */

// var score = 0;
var score = 10;
if(score == 0){
    console.log("We loss the game🤢");
}else{
    console.log("We won the game😊");
}

/* Conditional (ternary) Operator */

