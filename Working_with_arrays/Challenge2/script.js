

const calcAverageHumanAge=function(ages){
    const average=ages
    .map(age=>age>2 ? 16+age*4 : 2*age)
    .filter(age=>age>=18)
    .reduce((acc,age,i,arr)=>acc+(age/arr.length),0);
}

calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]);
calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]);