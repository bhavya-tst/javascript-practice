const markHeight=1.69;
const markWeight=78;
const jhonHeight=1.95;
const jhonWeight=92;
const bmiOfMark= markWeight/ markHeight**2;
const bmiOfJhon= jhonWeight/ jhonHeight**2;
const markHigherBmi=bmiOfMark>bmiOfJhon;
// console.log(markHigherBmi)
if(bmiOfJhon>bmiOfMark){
    const ans1Div=document.getElementById("ans1");
    ans1Div.innerHTML="Jhon's BMI is higher than Mark's!";
    const ans2Div=document.getElementById("ans2");
    ans2Div.innerHTML=`jhon's BMI ${bmiOfJhon} is higher than Mark's BMI ${bmiOfMark}`;
}
else{
    const ans1Div=document.getElementById("ans1");
    ans1Div.innerHTML="Mark's BMI is higher than Jhon's!";
    const ans2Div=document.getElementById("ans2");
    ans2Div.innerHTML=`Mark's BMI ${bmiOfMark} is higher than Jhon's BMI ${bmiOfJhon}`;
}