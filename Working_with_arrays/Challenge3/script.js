const dogs = [
    { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
    { weight: 8, curFood: 200, owners: ['Matilda'] },
    { weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
    { weight: 32, curFood: 340, owners: ['Michael'] },
    ];

// Task1
dogs.forEach(dog=>dog.recommendedFoodPortion= Math.trunc(dog.weight ** 0.75 * 28));
console.log("Task1 ",dogs);

// Task2
const sarahDog=dogs.find(dog=>dog.owners.includes('Sarah'));
sarahDog.curFood < sarahDog.recommendedFoodPortion && console.log("Eating too less.")
sarahDog.curFood > sarahDog.recommendedFoodPortion && console.log("Eating too much.")

// Task3
const ownersEatTooMuch=dogs.filter(dog=>dog.curFood>dog.recommendedFoodPortion).flatMap(dog=>dog.owners);
const ownersEatTooLittle=dogs.filter(dog=>dog.curFood<dog.recommendedFoodPortion).flatMap(dog=>dog.owners);
// let {ownersEatTooMuch,ownersEatTooLittle}=dogs.reduce((acc,curr)=>{
//     if(curr.curFood < curr.recommendedFoodPortion){
//         return acc.ownersEatTooMuch.push(curr.owners);
//     }
//     else if(curr.curFood > curr.recommendedFoodPortion * 1.10){
//         return acc.ownersEatTooLittle.push(curr.owners);
//     }
//     else{
//         return acc;
//     }
// },{ownersEatTooMuch:[],ownersEatTooLittle:[]});
// ownersEatTooLittle=ownersEatTooLittle.flat();
// ownersEatTooMuch=ownersEatTooMuch.flat();
console.log("Task3 ",ownersEatTooLittle,ownersEatTooMuch);

// Task4
console.log(ownersEatTooLittle.join(" and ")+"'s dogs eat too much!");
console.log(ownersEatTooMuch.join(" and ")+"'s dogs eat too little!");

// Task5
console.log("Task5 ",dogs.some(dog=>(dog.curFood === dog.recommendedFoodPortion)))

const recommmendFunction=dog=>(dog.curFood > (dog.recommendedFoodPortion * 0.90)) && (dog.curFood < (dog.recommendedFoodPortion * 1.10));
// Task6
console.log("Task6 ",dogs.some(recommmendFunction));

// Task7
const okayAmountFood=dogs.filter(recommmendFunction);
console.log("Task7 ",okayAmountFood);

// Task8
const SortedDogs=dogs.slice().sort((a,b)=>a.recommendedFoodPortion-b.recommendedFoodPortion);
console.log("Task8 ",SortedDogs);
