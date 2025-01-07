"use strict"; //Declare it at the top of the file to enable strict mode else it will work differently

let isPremium;
// isPremiun=true; // with strict mode it will throw error else it will not throw error
if(isPremium) console.log("You are a premium user");


// Function declaration
function calcAge(age){
    age=30; 
    return age;
}
const age=calcAge(23);

// Function expression
const ageFun=function(age){
    age=30;
    return age;
}
const age2=ageFun(23);

console.log(age,age2);

// Arrow function   
const calcAge3=age=>age*2;