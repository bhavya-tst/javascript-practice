

const JuliaData =[3, 5, 2, 12, 7];
const KateData = [4, 1, 15, 8, 3];

// Task1
const correctJuliaData=JuliaData.slice(1,3);

// Task2
const allDogs=[...correctJuliaData,...KateData];

// Task3
allDogs.forEach((age,i)=>{
    age>=3?
    console.log(`Dog number ${i+1} is an adult, and is ${age} years old`)
    :
    console.log(`Dog number ${i+1} is still a puppy 🐶.`)


})
