



const Car=function(make,speed){
   this.make=make;
   this.speed=speed;
}

Car.prototype.accelerate=function(){
   this.speed+=10;
   console.log(`${this.make} going at ${this.speed}Km/h`);
}
Car.prototype.brake=function(){
   this.speed-=5;
   console.log(`${this.make} going at ${this.speed}Km/h`);
}

const EV=function(make,speed,battery){
   Car.call(this,make,speed)
   this.battery=battery
}
EV.prototype=Object.create(Car.prototype);
EV.prototype.chargeBattery=function(chargeTo){
    this.battery=chargeTo;
}
const tesla=new EV("tesla",120,23);
tesla.accelerate();
EV.prototype.accelerate=function(){
   this.speed+=20;
   this.battery-=1;
   console.log(`${this.make} going at ${this.speed} Km/h, with charge of ${this.battery}%`)
}

tesla.accelerate();
tesla.chargeBattery(90);
tesla.brake();
tesla.accelerate();

