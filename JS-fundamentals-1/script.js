
// let 3variables; // Invalid variable name
let $4variables;
let _isValid;

let javascriptIsFun=true;
// console.log(typeof true);
console.log(typeof javascriptIsFun);
// console.log(typeof 3.4);
// console.log(typeof "Hello");
javascriptIsFun="Yes!";
console.log(typeof javascriptIsFun);
let year;
console.log(year);

console.log(typeof null); // object

// const age; // SyntaxError: Missing initializer in const declaration
// lastNmame="Smith"; // This will careate a global property not recommended
// console.log(lastNmame); 

console.log(1+3+"hello"+2+3); // 4hello23

console.log("23"-"10"-3); // 10
console.log(3/0); // Infinity

x=y=5; // assignment is done from right to left means 5 is assigned to y and then y is assigned to x.

console.log(`use
    of template
    leterals`);

const inputYear="1991";
console.log(Number(inputYear)+18);
console.log(Number("Jonas")); // NaN
console.log(typeof NaN); // number

console.log("Bhavya"*2); // NaN

console.log(Boolean(0)); // 0,'',undefined,null,NaN are falsy values
console.log(Boolean({})); // true
console.log(Boolean([])); // true
console.log(Boolean(Infinity)); // true
console.log(Boolean(-1)); // true

console.log(0==false); // true
console.log(0===false); // false

const day="wednesday";
switch(day){
    case "monday":
        console.log("Plan course structure");
        break;
    default:
        console.log("Not a valid day");
    case"tuesday":
        console.log("Prepare theory videos");
        break;
}

true && !false //Is a expression
if(23>10){
    const str="23 is bigger";
} // is a statement