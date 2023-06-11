"use strict";
function greetPerson(name) {
    if (name === "Chandler") {
        var greet = "Hello Chandler";
    }
    else {
        var greet = "Hi, there";
    }
    console.log(greet);
}
greetPerson("Chan");
// This is an example of hoisting in Javascript.
// var greet goes to top and makes all just assignments.
// Even if I put var greet above console.log, it will still work fine
// var keyword has functional scope. No matter where you declare, it is available for all the function
// let is block scoped. It is only available for the block 
//# sourceMappingURL=1greet.js.map