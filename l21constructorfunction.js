/*
*   constructor function
*/

// => class object
// => function object
//    (i) factory function
//    (ii) constructor function -> (1) Method 1 
//                                 (2) Method 2

//------------------------------------------------------------------------------------------factory function
function info(val) {

    return {

        //properties
        name: val,

        //methods
        job: function () {
            return `${val} is Fronted Web Designer`;
        }
    }
}

const getinfo = info("Aung Aung");
console.log(getinfo);
console.log(getinfo.name)
console.log(getinfo.job());

//---------------------------------------------------------------------------------------constructor function

// Mehtod 1

/* 
*   function name must be Capital letter to describe it is a constructor function
*   called by new keyword bcz it is a constructor
*/

function Phone(brand) {//

    this.brand = brand;
    this.like = function () {
        return `I love ${brand}`;
    }

    console.log(this);
}

const phoneObj = new Phone("iPhone"); // Phone { brand : 'iPhone', ...}
console.log(phoneObj.brand);
console.log(phoneObj.like());

const getobjkeys = Object.keys(phoneObj);
console.log(getobjkeys);

const getobjvals = Object.values(phoneObj);
console.log(getobjvals);

// Adding Properties
phoneObj.madeby = "China";
phoneObj["osversion"] = "IOS 18";
phoneObj.price = { pro: 1000, promax: 1500 };
phoneObj.colors = function () {
    console.log("All colors are same price");
}

console.log(phoneObj);

//Delete Properties , Methods
delete phoneObj.madeby;
delete phoneObj.colors;
console.log(phoneObj);

// Method 2

const Computer = new Function('brand', `
    this.brand = brand;
    this.like = function(){
       console.log("I love computer");
}
    `);

const computerObj = new Computer("Dell");

console.log(computerObj);
console.log(computerObj.brand);
computerObj.like();

console.log(Phone.name);
console.log(Computer.name);

console.log(Phone.length); // length means parameter count
console.log(Computer.length);

for(key in computerObj){
    console.log(key);
    console.log(key , computerObj[key]);
}

// Check properties exists or not

if("brand" in computerObj){
    console.log("Yes, computerObj has a brand keyname.");
}else{
    console.log("No");
}