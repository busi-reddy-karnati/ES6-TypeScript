"use strict";
//This code stub beloe gets this context from the function
// var employee = {
//     name:"Busi",
//     greet: function(){
//         setTimeout(function(){
//             console.log(this.name);
//         },1000);
//     }
// };
//Solution 1
// var employee = {
//     name:"Busi",
//     greet: function(){
//         var self = this;
//         setTimeout(function(){
//             console.log(self.name);
//         },1000);
//     }
// };
//Solution 2
// This gets context from outside.
var employee = {
    name: "Busi",
    greet: function () {
        setTimeout(() => console.log(this.name), 1000);
    }
};
employee.greet();
//# sourceMappingURL=2this.js.map