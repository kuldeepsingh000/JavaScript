// If and else
// if raining = raincoat
// else no raincoat

// var raining = true;
var raining = false;

if (raining) {
    console.log("take a raincoat")
} else {
    console.log("Enjoy your day :)");
}

// Check leap year.

var year = 2000;
// debugger;
if (year % 4 === 0) {
    if (year % 100 === 0) {
        if (year % 400 === 0) {
            console.log("This year " + year + " is a leap year");
        } else {
            console.log("This year " + year + " is not a leap year");
        }
    } else {
        console.log("This year " + year + " is a leap year");
    }
} else {
    console.log("This year " + year + " is not a leap year");
}

// What is truthy and falsy values in javascript?
/* 0, " ", undefined, null, NaN, false */

// var score = 0;
var score = 10;
if (score == 0) {
    console.log("We loss the game🤢");
} else {
    console.log("We won the game😊");
}

/* Conditional (ternary) Operator */

// var age = 17;
var age = 27;
console.log((age >= 18) ? "You can vote" : "You can't vote");

// Switch Statement
// var area = "Circle";
// var area = "Triangle";
var area = "Rectangle";
// var area;
var PI = 3.14, l = 5, b = 4, r = 3;
switch (area) {
    case "Circle":
        console.log("The area of circle is : " + (PI * r ** 2));
        break;

    case "Triangle":
        console.log("The area of triangle is : " + (l * b) / 2);
        break;

    case "Rectangle":
        console.log("The area of circle is : " + (l * b));
        break;

    default:
        console.log("Inter proper input");
        break;
}

// While loop
var num = 0;
while (num <= 10) {
    console.log(num);
    num++;
}


// Do-While loop
var num = 11;
do {
    console.log(num);
    num++;
} while (num <= 10)

/*
    Difference b/w do-while and while
    do-while will execute atleast once.
*/

// For loop
var num = 10
for (var i = 0; i <= num; i++) {
    console.log(i);
}

// Print Table Using for Loop
var x = 8;
for (var i = 1; i <= 10; i++) {
    console.log(`${x} * ${i} = ${x * i}`);
}


/*
output
Enjoy your day :)
This year 2000 is a leap year
We won the game😊
You can vote
The area of circle is : 20
0
1
2
3
4
5
6
7
8
9
10
11
0

D:\DailyStuff\JavaScript>node 4controlStatement.js
Enjoy your day :)
This year 2000 is a leap year
We won the game😊
You can vote
The area of circle is : 20
0
1
2
3
4
5
6
7
8
9
10
11
0
1
2
3
4
5
6
7
8
9
10
8 * 1 = 8
8 * 2 = 16
8 * 3 = 24
8 * 4 = 32
8 * 5 = 40
8 * 6 = 48
8 * 7 = 56
8 * 8 = 64
8 * 9 = 72
8 * 10 = 80
*/