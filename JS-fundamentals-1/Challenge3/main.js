const dolphinScore1=96;
const dolphinScore2=108;
const dolphinScore3=89;
const koalaScore1=88;
const koalaScore2=91;
const koalaScore3=110;

const avgDolphinScore=(dolphinScore1+dolphinScore2+dolphinScore3)/3;
const avgKoalasScore=(koalaScore1+koalaScore2+koalaScore3)/3;
if(avgDolphinScore===avgKoalasScore){
    const ans1Div=document.getElementById("ans1");
    ans1Div.innerHTML="Avg score of Dolphin and Koalas is same!";
}
else if(avgDolphinScore>avgKoalasScore){
    const ans1Div=document.getElementById("ans1");
    ans1Div.innerHTML="Avg score of Dolphin is higher than Ko";
}
else{
    const ans1Div=document.getElementById("ans1");
    ans1Div.innerHTML="Avg score of Koalas is higher than Dolphin";
}

// Bonus 1 and 2
if(avgDolphinScore>=100 && avgDolphinScore>avgKoalasScore){
    const ans2Div=document.getElementById("ans2");
    ans2Div.innerHTML="Dolphin wins the trophy!";
}
else if(avgKoalasScore>=100 && avgKoalasScore>avgDolphinScore){
    const ans2Div=document.getElementById("ans2");
    ans2Div.innerHTML="Koalas wins the trophy!";
}
else if(avgDolphinScore>=100 && avgKoalasScore>=100 && avgDolphinScore===avgKoalasScore){
    const ans2Div=document.getElementById("ans2");
    ans2Div.innerHTML="Both wins the trophy!";
}
else{
    const ans2Div=document.getElementById("ans2");
    ans2Div.innerHTML="No one wins the trophy!";
}