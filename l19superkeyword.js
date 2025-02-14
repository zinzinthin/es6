/*
* super keyword
*/

class Person {

    constructor(name, age) {
        this.name = name;
        this.age = age;
    }


    greet() {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }

    walking() {
        console.log(`I'm walking`);
    }
}

class Student extends Person {

    constructor(name, age, city) {

        //must calls the parent class constructure bcz it has the same properties of parent
        super(name, age);

        this.name = name;
        this.age = age;
        this.city = city;
    }

    study() {
        console.log(`My name is ${this.name} and I'm ${this.age} years old. My hometown is ${this.city}`);
    }

    //method overwrites
    greet() {
        console.log("This is overwrite");
    }

    walking() {
        //calls the parent class method
        super.walking();
        console.log("I don't like to work.");
    }
}

const personObj = new Person("Su Su", 20);
console.log(personObj);
console.log(personObj.name);
console.log(personObj.age);
personObj.greet();

const studentObj = new Student("Su Su", 20, "Yangon");
console.log(studentObj);
console.log(studentObj.name);
console.log(studentObj.age);
studentObj.greet();
studentObj.walking();
