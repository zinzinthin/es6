/*
* strict type
*/

//------------------------------------------------------without use strict

// x = 10;
// console.log(x); //10

// function greet() {
//     console.log(this);
// }

// greet(); //object[global]...


// const student = {
//     name : "Su Su",
//     name : "Aung Aung"
// }

// console.log(student); //{name : 'Aung Aung'}
// console.log(student.name); // Aung Aung

// class Mobile {
//     brand = () => {
//         console.log(this);
//     }
// }

// const mobileObj = new Mobile();
// mobileObj.brand(); //Mobile{ brand : funciton}

//------------------------------------------------------After declaring use strict

"use strict";

// => Prevent using undeclared variables

//Error : Uncaught Reference error
// x = 10; 


// => Prevent this from refering to global object
function greet() {
    console.log(this);
}

// greet(); //undefined


const student = {
    name: "Su Su",
    name: "Aung Aung"
}

// console.log(student.name); // Aung Aung

class Mobile {
    brand = () => {
        console.log(this);
    }
}

const mobileObj = new Mobile();

//Method call
mobileObj.brand(); // Mobile { brand : function}

//Function call
const getbrand = mobileObj.brand;
getbrand(); // Mobile { brand : function}



