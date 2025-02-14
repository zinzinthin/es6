/*
*   use strict with costructor function
*/

"use strict";

// ------------------------------------------------------------class object
class Mobile {
    brand = () => {
        console.log(this);
    }
}

const mobileObj = new Mobile();

//Method call
// mobileObj.brand(); // Mobile { brand : function}

//Function call
const getbrand = mobileObj.brand;
// getbrand(); // Mobile { brand : function}

//--------------------------------------------------------------function object -> constructor function
// Car = function(){}
function Car(){
    this.brand = function(){
        console.log(this);
    }
}

const carObj = new Car();

//Method call
carObj.brand(); // Car{brand : [Function (anonymous)]}

//Function call
const getcarbrand = carObj.brand;

// wihtout strict keyword, it returns window object
//with strict, returns undefined
getcarbrand(); 

