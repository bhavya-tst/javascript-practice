const billAmount=prompt("Enter the bill amount");
let tip=0;
billAmount>=50 && billAmount<=300 ? tip=billAmount*0.15 : tip=billAmount*0.2;
const ansDiv=document.getElementById("ans");
ansDiv.innerHTML=`The bill was ${billAmount}, the tip was ${tip}, and the total value is ${parseInt(billAmount)+tip}`;