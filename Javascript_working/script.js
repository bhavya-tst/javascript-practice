"use strict"; 
const a=true;


if(a){
    // In use strict mode, it will throw error as five is not defined.
    function five(){
        console.log("5");
    }
}
first();
function third(){
    const d="hey";
    // console(a+b+c+d); // This will throw error as b and c are not defined
    // In the above line, b and c are not defined in the scope of the function third
    // It will only have access to the variables defined in the function third and the global scope means a;
}

function first(){
    const b="hii";
    const second=function(){
        const c="hello";
        third();
        // five();
    }
    second();
}

// console.log(addTowNumbers(2,3)); // This will throw error as addTowNumbers is not a function as var variables are undefied before the declaration
// var addTowNumbers=function(a,b){
//     return a+b;
// }

const func=()=>{
    console.log(this);
}
const calander={
    days:7,
    weeks:52,
    months:12,
    fun:function(){
        console.log(this);
    }
    // fun:func // This will point to the parent object of the function where it is defined i.e. window object (lexical this)
}
calander.fun();
const func1=()=>{
    console.log(this);
    // In arrow function, this will point to the parent object of the function where it is defined i.e. window object (lexical this)
}
function func2(){
    console.log(this);
    // In normal function, this will point to the window object in the browser if not in strict mode
    // In strict mode, this will be undefined
}
// func1();
// func2();
// const f=calander.fun;
// f();
var firstName="Bhavya";
const names={
    pr:function(){
        console.log(this.firstName);
    },
    greet:()=>console.log(`Hello ${this.firstName}`) //This will print bhavya as this will point to the global object
}
console.log(this.firstName); // This will print Bhavya as firstName is defined in the global scope
names.pr(); // This will print undefined as this will point to the object names and firstName is not defined in the object names
names.greet(); // This will print Hello Bhavya as this will point to the global object

// arguments keyword
const add=function(a,b){
    console.log(arguments);
    console.log(Array.isArray(arguments));
    return a+b;
}
add(2,3);
add(2,3,4,5);
const add1=(a,b)=>{
    // console.log(arguments); // this will throw error as arguments is not defined in the arrow function
    return a+b;
}
add1(2,3,4);

// Premitive vs Objects
let age=30;
let oldAge=age;
age=31;
console.log(age,oldAge);
const me={
    name:'Bhavya',
    age:30
}
const friend=me;
friend.age=27;
console.log('Friend:',friend);
console.log('Me:',me);

const obj1={
    age:21,
    name:"bhavya",
    family:['sachin','sunita']
}
const obj2={
    ...obj1
}
const obj3=Object.assign({},obj1); // It will create a shallow copy of the object i.e only the first level of the object not object inside the object
obj2.age=22;
obj3.age=25;
obj3.family.push('bhavya');
console.log(obj1,obj2,obj3);