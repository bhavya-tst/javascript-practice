let arr = [1, 2, 3, 4, 5];
// slice
console.log(arr.slice(1, 3)); // [2,3]
console.log(arr.slice(1)); // [2,3,4,5]
console.log(arr.slice(-2)); // [4,5]
console.log(arr.slice(-2, -1)); // [4]
console.log(arr.slice()); // [1,2,3,4,5]

// splice
console.log(arr.splice(1, 2)); // [2,3]
console.log(arr); // [1,4,5]
console.log(arr.splice(1, 1)); // [4] index and no of elements to remove

const arr1 = ["a", "b", "c", "d", "e"];
console.log(arr1.reverse()); // ['e','d','c','b','a'] mutates the original array
console.log(arr1); // ['e','d','c','b','a']

const arr2 = ["f", "g", "h", "i", "j"];
console.log(arr2.concat(arr1)); // ['f','g','h','i','j','e','d','c','b','a']
console.log([...arr2, ...arr1]); // ['f','g','h','i','j','e','d','c','b','a']

console.log(arr1.join("-")); // e-d-c-b-a

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// for of
for (const [i, mov] of movements.entries()) {
  if (mov > 0) console.log(`Movement ${i + 1}: You deposited ${mov}`);
  else console.log(`Movement ${i + 1}: You withdrew ${Math.abs(mov)}`);
}
console.log("--------For Each-----------");
// for each
movements.forEach(function (mov, i, arr) {
  if (mov > 0) console.log(`Movement ${i + 1}: You deposited ${mov}`);
  else console.log(`Movement ${i + 1}: You withdrew ${Math.abs(mov)}`);
});

const currencies = new Map([
  ["USD", "United States Dollar"],
  ["EUR", "Euro"],
  ["GBP", "Pound Sterling"],
]);
const setCurrencites = new Set(["USD", "EUR", "GBP", "USD", "EUR"]);
currencies.forEach(function (value, key, map) {
  console.log(`${key}:${value}`);
});
setCurrencites.forEach(function (value, key, set) {
  console.log(`${key}:${value}`);
}); // Replace key with _ as set has only value _ in javascript means throwaway variable.

const account1 = {
  owner: "Jonas Schmedtmann",
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: "Jessica Davis",
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: "Steven Thomas Williams",
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: "Sarah Smith",
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];


console.log(account1.movements.some((mov) => mov > 0)); // true
console.log(account1.movements.every((mov) => mov > 0)); // false

const arr3 = [[1, 2, 3], [4, 5, 6], 7, 8];
console.log(arr3.flat()); // [1,2,3,4,5,6,7,8]
const arrDeep = [[[1, 2], 3], [4, [5, 6]], 7, 8];
console.log(arrDeep.flat(2)); // [1,2,3,4,5,6,7,8]

const allMovements = accounts.map((acc) => acc.movements).flat();
const allMovements1 = accounts.flatMap((acc) => acc.movements);
console.log(allMovements,allMovements1);

const owners=[ 'Jonas Schmedtmann', 'Jessica Davis', 'Steven Thomas Williams', 'Sarah Smith'];
console.log(owners.sort());
console.log(owners)

//Numbers
console.log(movements.sort());// not sorted as sort method converts numbers to string and then sorts

// return <0, A,B (keep order)
// return >0, B,A (switch order)
movements.sort((a,b)=>{
    if(a>b) return 1;
    if(a<b) return -1;
});
// movements.sort((a,b)=>a-b);
console.log(movements);

const x=[1,2,3,4,5,6,7];
console.log(x.fill(0,3,5)); // [1,2,3,0,0,6,7]
console.log(x.fill(0,3)); // [1,2,3,0,0,0,0]
console.log(new Array([1,2,3,4,5])); // [1,2,3,4,5]
const y=new Array(7);
console.log(y); // [empty x 7]
console.log(y.map(()=>5)); // [empty x 7]
y.fill(1,3,5);
console.log(y); // [empty x 3,1,1,empty x 2]

const z=Array.from({length:7},()=>1);
console.log(z); // [1,1,1,1,1,1,1]

const a=Array.from({length:7},(_,i)=>i+1);
console.log(a);

const {deposits,withdrawals}=accounts.flatMap(acc=>acc.movements).reduce((sums,mov)=>{
  sums[mov>0?'deposits':'withdrawals']+=mov;
  return sums;
},{deposits:0,withdrawals:0});

console.log(deposits,withdrawals);