"use strict";
class User {
    userName;
    age;
    constructor(userName, age) {
        this.userName = userName;
        this.age = age;
    }
    display() {
        console.log(`Username: ${this.userName}, Age: ${this.age}`);
    }
}
class Student extends User {
    studentId;
    constructor(studentId, userName, age) {
        super(userName, age);
        this.studentId = studentId;
    }
    display() {
        console.log(`UserId: ${this.studentId}, Username: ${this.userName}, Age: ${this.age}`);
    }
}
let student1 = new Student(101, "ASIF", 25);
student1.display();
// let user1 = new User("ASIF HOSSAIN", 25);
// user1.display();
