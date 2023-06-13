"use strict";
// class definition
class Person {
    // This is how a constructor is defined
    constructor() {
        console.log("We are in Person Constructor");
        // We don't need to specify features(class properties) before hand
        this.name = name;
    }
    static staticMethod() {
        console.log("This is a static method");
    }
    greet() {
        console.log("Hello Person");
    }
}
// This is how we entend a class
class Employee extends Person {
    constructor(name) {
        // We need to call the parent's conbstructror for sure
        // Else there is an error
        super(name);
        console.log("We are in Employee Constructor");
    }
    greet() {
        // This is how we call parent's method
        super.greet();
        console.log("Hello employee");
    }
}
const em = new Employee("Busi");
//em.greet is taken from Employee
// if there isn't any greet in Employee, it searches in Person
em.greet();
Person.staticMethod();
//# sourceMappingURL=5oops.js.map