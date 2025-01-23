class CarCl {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }

  accelerate() {
    this.speed += 10;
    console.log(`${this.make} going at ${this.speed}Km/h`);
    return this;
  }

  brake() {
    this.speed -= 5;
    console.log(`${this.make} going at ${this.speed}Km/h`);
    return this;
  }
}

class EVCl extends CarCl {
  #battery;
  constructor(make, speed, battery) {
    super(make, speed);
    this.#battery = battery;
  }

  chargeBattery(chargeTo) {
    this.#battery = chargeTo;
    return this;
  }

  accelerate() {
    this.speed += 20;
    this.#battery -= 1;
    console.log(
      `${this.make} going at ${this.speed} Km/h, with charge of ${this.#battery}%`
    );
    return this;
  }
}

const tesla = new EVCl("tesla", 120, 23);
tesla.accelerate().accelerate().chargeBattery(90).brake().accelerate();
