

class CarCl{
   constructor(make,speed){
    this.make=make;
    this.speed=speed;
   }

   set speedUS(speed){
    this.speed=speed*1.6;
   }

   get speedUS(){
    console.log(`${this.make} going at ${this.speed/1.6} Km/h.`);
    return this.speed/1.6;
   }
}

const ford=new CarCl("ford",120);
ford.speedUS=100;
// console.log(ford);
console.log(ford.speedUS);

