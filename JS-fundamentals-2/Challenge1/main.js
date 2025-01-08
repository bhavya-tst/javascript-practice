
const calcAverage=(score1,score2,score3)=>{
    return (score1+score2+score3)/3;
}

const checkWinner=(avgDophin,avgKoalas)=>{
    if(avgDophin>=2*avgKoalas){
        console.log(`Dolphins win (${avgDophin} vs ${avgKoalas})`);
    }   
    else if(avgKoalas>=2*avgDophin){
        console.log(`Koalas win (${avgKoalas} vs ${avgDophin})`);
    }
    else{
        console.log("No team wins");
    }
}
const avgDophin1=calcAverage(44,23,71);
const avgKoalas1=calcAverage(65,54,49);
checkWinner(avgDophin1,avgKoalas1);

const avgDophin2=calcAverage(85,54,41);
const avgKoalas2=calcAverage(23,34,27);
checkWinner(avgDophin2,avgKoalas2);