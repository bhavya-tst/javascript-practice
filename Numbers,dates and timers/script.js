
console.log(23 === 23.0); // true
console.log(0.1 + 0.2); // 0.30000000000000004
console.log(0.1 + 0.2 === 0.3); // false

// Conversion
console.log(Number('23')); // 23
console.log(+'23'); // 


// Parsing
console.log(Number.parseInt('30px', 10)); // 30
console.log(Number.parseInt('30px', 2)); // NaN
console.log(Number.parseInt('e23', 10)); // NaN
console.log(Number.parseInt('   2.5rem  ')); // 2
console.log(Number.parseFloat('  2.5rem  ')); // 2.5

// isNaN
console.log("-------------------isNaN-------------------");
console.log(Number.isNaN(20)); // false
console.log(Number.isNaN('20')); // false
console.log(Number.isNaN(+'20X')); // true
console.log(Number.isNaN(23 / 0)); // false
console.log(Number.isNaN('23' / 0)); // false

// isFinite
console.log("-------------------isFinite-------------------");
console.log(Number.isFinite(20)); // true
console.log(Number.isFinite('20')); // false
console.log(Number.isFinite(+'20X')); // false
console.log(Number.isFinite(23 / 0)); // false
console.log(Number.isFinite('23' / 0)); // false

// isInteger
console.log("-------------------isInteger-------------------");
console.log(Number.isInteger(20)); // true
console.log(Number.isInteger(20.0)); // true
console.log(Number.isInteger(0.0)); // true
console.log(Number.isInteger(20.1)); // false
console.log(Number.isInteger('20')); // false
console.log(Number.isInteger(+'20X')); // false
console.log(Number.isInteger(23 / 0)); // false

// Math and Rounding
console.log("-------------------Math and Rounding-------------------");
console.log(Math.sqrt(25)); // 5
console.log(25 ** (1 / 2)); // 5
console.log(8 ** (1 / 3)); // 2
console.log(Math.max(5, 18, 23, 11, 2)); // 23
console.log(Math.min(5, 18, 23, 11, 2)); // 2
console.log(Math.PI * Number.parseFloat('10px') ** 2); // 314.1592653589793
console.log(Math.trunc(23.3)); // 23
console.log(Math.trunc(23.9)); // 23
console.log(Math.random()); // random number between 0 and 1
console.log(Math.trunc(Math.random() * 6) + 1); // random number between 1 and 6
const randomInt = (min, max) => Math.trunc(Math.random() * (max - min) + 1) + min; // 0...(max-min)->1...Max-min -> min...(max-min+min)== min...max  random number between min and max
console.log(randomInt(10, 13));

// Rounding integers
console.log("-------------------Rounding integers-------------------");
console.log(Math.trunc(23.3)); // 23
console.log(Math.round(23.3)); // 23
console.log(Math.round(23.9)); // 24
console.log(Math.ceil(23.3)); // 24
console.log(Math.ceil(23.9)); // 24
console.log(Math.floor(23.3)); // 23
console.log(Math.floor(23.9)); // 23
console.log(Math.trunc(-23.3)); // -23
console.log(Math.floor(-23.3)); // -24
console.log(Math.floor(-23.9)); // -24
console.log(Math.ceil(-23.3)); // -23
console.log(Math.ceil(-23.9)); // -23
console.log(Math.round(-23.3)); // -23
console.log(Math.round(-23.9)); // -24

// Rounding decimals
console.log("-------------------Rounding decimals-------------------");
console.log((2.7).toFixed(0)); // 3 as string
console.log((2.7).toFixed(3)); // 2.700 as string
console.log((2.345).toFixed(2)); // 2.35 as string
console.log(+(2.345).toFixed(2)); // 2.35 as number

// Remainder
console.log("-------------------Remainder-------------------");
console.log(5 % 2); // 1
console.log(5 / 2); // 2.5
console.log(8 % 3); // 2
console.log(8 / 3); // 2.6666666666666665
console.log(6 % 2); // 0
console.log(6 / 2); // 3

// BigInt
console.log("-------------------BigInt-------------------");
console.log(2 ** 53 - 1); // 9007199254740991
console.log(Number.MAX_SAFE_INTEGER); // 9007199254740991
console.log(2 ** 53 + 1); // 9007199254740992
console.log(2 ** 53 + 2); // 9007199254740992
console.log(2 ** 53 + 3); // 9007199254740994
console.log(2 ** 53 + 4); // 9007199254740996
console.log(456383674893774893947736636773n)// 456383674893774893947736636773n
console.log(BigInt(456383674893774893947736636773));// 456383674893774893947736636773n will change afer 2^53
console.log(BigInt(456383674893774893947736636773));// 456383674893774893947736636773n will change afer 2^53
console.log(BigInt(45638367));// 45638367n
//operations
console.log(10000n + 10000n); // 20000n
console.log(456383674893774893947736636773n * 1000000n); // 456383674893774893947736636773000000n
//console.log(Math.sqrt(16n)); // Error
//console.log(16n / 4n); // Error
const huge= 2023324324433322234555n;
const num = 23;
console.log(huge * BigInt(num)); // 46418501301999815800965n without bigint it will give type conversion error

//Exceptions
console.log("-------------------Exceptions-------------------");
console.log(20n > 15); // true
console.log(20n === 20); // false
console.log(typeof 20n); // bigint
console.log(20n == 20); // true
console.log(20n == '20'); // true

console.log(huge + ' is REALLY big!!!'); // 2023324324433322234555 is REALLY big!!!

//Divisions
console.log(11n / 3n); // 3n will give nearest big int.
console.log(10n / 3n); // 3n
console.log(10 / 3); // 3.3333333333333335
// console.log(10n / 3); // Error

// Dates and Times
console.log("-------------------Dates and Times-------------------");
const now = new Date();
console.log(now);
console.log(new Date('Aug 02 2020 18:05:41'));
console.log(new Date('December 24, 2015'));
console.log(new Date(2037, 10, 19, 15, 23, 5));
console.log(new Date(0));
console.log(new Date(3 * 24 * 60 * 60 * 1000));

// Working with dates
console.log("-------------------Working with dates-------------------");
const future = new Date(2037, 10, 19, 15, 23);
console.log(future);
console.log(future.getFullYear());
console.log(future.getMonth());
console.log(future.getDate()); // day of the month
console.log(future.getDay()); // day of the week
console.log(future.getHours());
console.log(future.getMinutes());
console.log(future.getSeconds());
console.log(future.toISOString());
console.log(future.getTime());
console.log(new Date(2142237180000));
console.log(Date.now());

future.setFullYear(2040);
console.log(future);

const lang=navigator.language;
console.log(lang)
const options={
    hour:"numeric",
    minute:"numeric",
    day:"2-digit",
    month:"long",
    year:"numeric",
    weekday:"long"
}
console.log(new Intl.DateTimeFormat("gu",options).format(future));

const ingrediants=['olives','tomato'];
const timer = setTimeout((ing1,ing2) => {
    console.log(`Two ingrediants are ${ing1} and ${ing2}`);
}, 2000,...ingrediants);

if(ingrediants.includes('spinach')) clearTimeout(timer);



