"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const studentId = Math.floor(Math.random() * 50000);
console.log(studentId);
class Student {
    static idGenerator = 50000;
    name;
    id;
    courses;
    balance;
    constructor(name) {
        this.name = name;
        this.id = Student.idGenerator++;
        this.courses = [];
        this.balance = 500;
    }
    // method to enroll student in a course
    enrollCourse(course) {
        this.courses.push(course);
    }
    // method to view student's balance
    studentBalance() {
        console.log(`Balance for ${this.name}: ${this.balance}`);
    }
    // method to pay student fees
    payFee(fee) {
        this.balance -= fee;
        console.log(`Fee paid successfully for ${this.name}`);
    }
    // method to show student's details 
    studentDetails() {
        console.log(`Name: ${this.name}`);
        console.log(`ID: ${this.id}`);
        console.log(`Courses: ${this.courses}`);
        console.log(`Courses: ${this.courses}`);
    }
}
