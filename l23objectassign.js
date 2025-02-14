/*
* Syntax
* Object.assign(target,sources);
*/

// ------------------------------------------------Copying properites from another object
const target = { a: "Red" };
const source = { b: "Green", c: "Blue" };

Object.assign(target, source);

// console.log(target);

// ------------------------------------------------Copying properites from multiple object
const main = { a: "Red" };
const source1 = { b: "Green", c: "Blue" };
const source2 = { c: 30, d: 40 };

Object.assign(main, source1, source2);

// console.log(main);

// ------------------------------------------------Overwrite properties
const maintarget = { a: 100, b: 200 };
const mainsource = { b: 55, c: 300 };

Object.assign(maintarget, mainsource);

// console.log(maintarget);

//-------------------------------------------------Cloning an object (shallow copy)
const original = { x: "Red", y: "Green" };
const copy = Object.assign({}, original);

// console.log(copy);

// console.log(original === original); //true
// console.log(copy === original); //false

//-------------------------------------------------Merge Objects
const obj1 = { a: "Red", b: "Green" };
const obj2 = { b: "Blue", c: "White" };
const obj3 = { d: "Black" };

const mergeobj = Object.assign({}, obj1, obj2, obj3);
// console.log(mergeobj);


//------------------------------------------------- Nested Objects (shallow copy)

const obj4 = { a: 1, b: { x: 10 } };
const obj5 = Object.assign({}, obj4);

console.log(obj4 === obj5); //false

obj5.b.x = 50;

// console.log(obj4.b.x);  //50 (unexpected changed)
// console.log(obj5.b.x); //50

//------------------------------------------------- structuredClone() Deep Copy

const obj6 = {a : 1, b : {y : 10}};
const obj7 = structuredClone(obj6);

// console.log(obj6.b.y);
// console.log(obj7.b.y);

obj6.b.y = 1500;

// console.log(obj6.b.y);
// console.log(obj7.b.y);

obj7.b.y = 528;

// console.log(obj6.b.y);
// console.log(obj7.b.y);

// => Copying Method

const obj8 = {
    name : "Yu Yu",
    greet(){
        console.log(`Hello , my name is ${this.name}`);
    }
}

const obj9 = {};
Object.assign(obj9,obj8);

// console.log(obj9);
// obj9.greet();

const frontend = {
    design : function(){
        console.log("Frontend Web Development");
    }
};

const backend = {
    unit : function(){
        console.log("Backend Wed Development");
    }
};

const database = {
    store : function(){
        console.log("Database Developer");
    }
};

const server = {
    cloud : function(){
        console.log("Cloud Computer System");
    }
};

const obj10 = Object.assign({},frontend,backend,database,server);
console.log(obj10);
