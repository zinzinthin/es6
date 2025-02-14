/*
* Inheritance (extends)
*/

class Person {

    constructor(firstname, lastname, city) {
        this.firstname = firstname;
        this.lastname = lastname;
        this.location = city;
    }

    getfullname = title => {
        return `${title}.${this.firstname} ${this.lastname}`;
    }
}

class JobTitle extends Person {

    // constructor(firstname, lastname, city){
    //     this.firstname = firstname;
    //     this.lastname = lastname;
    //     this.location = city;
    // }

    getjob = title => {
        return `${title}`;
    }
}

const personObj = new Person("Aung", "Tun Tun", "Yangon");

console.log(personObj);
console.log(personObj.firstname, personObj.lastname, personObj.location);
console.log(personObj.getfullname("Mr"));

const jobtitleObj = new JobTitle;
console.log(jobtitleObj);
console.log(jobtitleObj.getjob("Manager"));

const staff = new JobTitle("Su", "Myat", "Yangon");

console.log(staff.firstname, staff.lastname);
console.log(staff.getfullname("Ms"));

// console.error(personObj.getjob());


class User {

    constructor(name, email) {
        this.username = name;
        this.email = email;
    }

    login = () => {
        console.log("You are logged in");
    }

    logout() {
        console.log("You are logged out");
    }
}

class AdminUser extends User {

    deleteuser(userobj) {
        userarrs = userarrs.filter(userarr => userarr.username !== userobj.username);
    }
}

const useroneObj = new User("hninhnin", "hnin@gmail.com");
const usertwoObj = new User("min min", "minmin@gmail.com");
const userthreeObj = new User("su su", "susu@gmail.com");

const adminuserObj = new AdminUser("kyaw kyaw", "kyawkyaw@gmail.com");

// adminuserObj.deleteuser();

let userarrs = [useroneObj, usertwoObj, userthreeObj, adminuserObj];

adminuserObj.deleteuser(useroneObj);

console.log(userarrs);



