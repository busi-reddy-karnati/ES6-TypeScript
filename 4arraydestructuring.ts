
//This will work just fine
// let employee = ["Sheldon", "Cooper", "Male"]
// let [fname, lname, gender] = employee;

// Now let's say
// let employee = ["Sheldon", "Cooper"]
// let [fname, lname, gender] = employee;
//Here gender is undefined

// let employee = ["Sheldon", "Cooper"]
// //WE can use default params
// let [fname, lname, gender="Female"] = employee;



let employee = ["Sheldon", "Cooper", "Male"]

//The rest of parameters in employee are assigned to pars as an array
let [fname, ...pars] = employee;


// If we don't want any of firstname and lastname, we can simply do
let [,,gender] = employee//Gives MALE
console.log(fname);
console.log(gender);

