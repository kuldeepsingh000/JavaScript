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


function bioData() {
    let myFirstName = "Kuldeep";
    console.log(myFirstName);
    if(true){
        let myLastName = "Singh";
        console.log('Inner ' + myLastName);
        console.log('Inner ' + myFirstName);
    }

    console.log('InnerOuter ' + myLastName);
}

bioData();
