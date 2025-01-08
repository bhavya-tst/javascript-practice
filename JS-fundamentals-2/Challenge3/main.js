
const mark={
    fullName: 'Mark Miller',
    height: 1.69,
    weight: 78,
    calcBmi:function(){
        this.bmi=this.weight/(this.height**2);
        return this.bmi;
    }
}
const john={
    fullName: 'John Smith',
    height: 1.95,
    weight: 92,
    calcBmi:function(){
        this.bmi=this.weight/(this.height**2);
        return this.bmi;
    }
}
console.log(mark.calcBmi());
console.log(john.calcBmi());
if(mark.bmi>john.bmi){
    console.log(`${mark.fullName}'s BMI (${mark.bmi}) is higher than ${john.fullName}'s BMI (${john.bmi})`);
}else if(john.bmi>mark.bmi){
    console.log(`${john.fullName}'s BMI (${john.bmi}) is higher than ${mark.fullName}'s BMI (${mark.bmi})`);
}