"use strict"; //Declare it at the top of the file to enable strict mode else it will work differently

// let isPremium;
// // isPremiun=true; // with strict mode it will throw error else it will not throw error
// if(isPremium) console.log("You are a premium user");


// Function declaration
// function calcAge(age){
//     age=30; 
//     return age;
// }
// const age=calcAge(23);

// // Function expression
// const ageFun=function(age){
//     age=30;
//     return age;
// }
// const age2=ageFun(23);

// console.log(age,age2);

// // Arrow function   
// const calcAge3=age=>age*2;

console.log("------------- Arrays ---------------");
const friends=['Michael','Steven','Peter'];
const years=new Array(1991,1984,2008);

// Push will return the length of the array
const newLength=friends.push('Jay');
console.log(friends,newLength);

const length=friends.unshift('John');
console.log(friends,length);

const elem=friends.pop();
console.log(friends,elem);

const elem1=friends.shift();
console.log(friends,elem1);

console.log(friends.indexOf('Steven'));
console.log(friends.indexOf('Bob')); // -1 if not there
console.log(friends.includes('Steven'));
console.log(friends.includes('Bob')); // -1 if not there
console.log(friends[80]); // undefined if not there

const jones={
    firstName:'Jones',
    lastName:'Smith',
    birthYear:2003,
    job:'teacher',
    friends:['Michael','Peter','Steven'],
    // calcAge:function(year){
    //     return 2024-year;
    // }
    // calcAge:function(){
    //     // return 2025-age; // This will throw error as age is not defined
    //     // return 2025-jones.age; // This will work but not recommended
    //     return 2025-this.age;
    // }
    calcAge:function(){
        this.age=2025-this.birthYear;
        return this.age;
    }
}

// console.log(jones.calcAge(2003));
// console.log(jones['calcAge'](2003));
console.log(jones.age);
console.log(jones.calcAge); // This will return the function itself
console.log(jones['calcAge']); // This will return the function itself

console.log(jones.age);
console.log(jones.calcAge());
console.log(jones['calcAge']());
console.log(jones.age);

