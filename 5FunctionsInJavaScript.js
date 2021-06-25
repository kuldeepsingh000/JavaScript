// What we will see
// 1 - Function Definition
// 2 - Calling a Function
// 3 - Function Parameter
// 4 - Function Arguments
// 5 - Function Expressions
// 6 - Return Keyword
// 7 - Anonymous Function

/*
    function function_Name(){
        //Statement
    }
*/

// function find_sum(){
//     var a = 10, b = 20;
//     var total =  a+b;
//     console.log(total);
// }

// find_sum();

/*
function find_sum(a, b){ // parameter
    var total =  a+b;
    console.log(total);
}

find_sum(10, 20); // argument
find_sum(20, 20);
*/

/*
function find_sum(a, b){ 
    var total =  a+b;
    return total;
}

var funExp = find_sum(5, 10);
console.log(funExp);
*/

// Anonymous functions 

var funAnonymous = function(a, b){
    return a+b;
}
console.log("The sum of two no is : " + funAnonymous(12, 88));

