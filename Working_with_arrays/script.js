let arr=[1,2,3,4,5];
// slice
console.log(arr.slice(1,3)); // [2,3]
console.log(arr.slice(1)); // [2,3,4,5]
console.log(arr.slice(-2)); // [4,5]
console.log(arr.slice(-2,-1)); // [4]
console.log(arr.slice()); // [1,2,3,4,5]

// splice
console.log(arr.splice(1,2)); // [2,3]
console.log(arr); // [1,4,5]