"use strict";
let firstname = "Sheldon";
let lastname = "Cooper";
// let person = {
//     firstname:firstname,
//     lastname:lastname
// }
// Since the firstname and lastname have the same argument name, we don't need to explicitly mention them
// This one does the same as above
let person = {
    firstname,
    lastname
};
// console.log(person.firstname);
// console.log(person.lastname);
let createPerson = function (firstname, lastname, age) {
    return {
        firstname,
        lastname,
        fullname: firstname + " " + lastname,
        //This is how we define a function, But since it is given in object literal, we can also do it in different ways
        // isOld:function(){
        //     return age>60;
        // }
        //This is another way to do it, this is just an arrow function
        // isOld:()=>age>60
        // What we can also do is, omit the colon(:), and function keyword
        isOld() { return age > 60; }
        // The above are the three ways to define a function inside an object literal
    };
};
let p = createPerson("Leonard", "Hoffstader", 40);
console.log(p.firstname);
console.log(p.lastname);
console.log(p.fullname);
console.log(p.isOld());
//# sourceMappingURL=3objects.js.map