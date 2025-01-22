const Person = function (name, birthYear) {
  // Instance properties
  this.name = name;
  this.birthYear = birthYear;

  // Never do this because it will create a new copy of the function for each object
  // this.calcAge=function(){
  //     console.log(2021-this.birthYear);
  // }
};

const jones = new Person("John", 1990);

// 1. A new {} is created
// 2. Function is called, this = {}
// 3. {} linked to prototype
// 4. function automatically return {}
const malik = new Person("Malik", 1995);
const maltida = new Person("Maltida", 1992);
console.log(jones, malik, maltida);

console.log(jones instanceof Person); // true

// Prototypes
console.log("-----------------Prototypes-----------------");
console.log(Person.prototype);
Person.prototype.calcAge = function () {
  console.log(2025 - this.birthYear);
};
jones.calcAge();
maltida.calcAge();

Person.hey = function () {
  console.log("Hey there ✌️🤞👍👌");
};

Person.hey();
// jones.hey(); // Error
console.log(jones.__proto__);
console.log(jones.__proto__ === Person.prototype);
console.log(Person.prototype === Person.__proto__); // false
console.log(Person.prototype, Person.__proto__);
console.log(Person.prototype.isPrototypeOf(jones));
console.log(Person.prototype.isPrototypeOf(Person)); // false

Person.prototype.species = "Homo sapiens";
console.log(jones, maltida.species);

console.log(jones.hasOwnProperty("name"));
console.log(jones.hasOwnProperty("species"));

console.log(jones.__proto__);
//Object.prototype (top of prototype chain)
console.log(jones.__proto__.__proto__);
console.log(jones.__proto__.__proto__.__proto__);

console.log(Person.prototype.constructor);
console.dir(Person.prototype.constructor);

const arr = [1, 2, 3, 3];
console.log(arr.__proto__);
console.log(arr.__proto__.__proto__);

Array.prototype.unique = function () {
  return [...new Set(this)];
};
console.log(arr.unique());

class PersonCl {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }

  calcAge() {
    console.log(2025 - this.birthYear);
  }

  get age() {
    return 2025 - this.birthYear;
  }

  set fullName(name) {
    if (name.includes(" ")) this._fullName = name;
    else alert(`${name} is not full name.`);
  }

  get fullName() {
    return this._fullName;
  }

  static hey() {
    console.log(`Hey there ✌️🤞👍👌`);
  }
}

const james = new PersonCl("James Aderson", 1990);
console.log(james);
james.calcAge();

PersonCl.prototype.greet = function () {
  console.log(`Hello ${this.fullName}`);
};
james.greet();

PersonCl.hey();
const walter = new PersonCl("Walter white", 1965);
console.log(walter);

//Getters and setters
const account = {
  owner: "Jones",
  movements: [200, 530, 120, 300],

  get latest() {
    return this.movements.slice(-1).pop();
  },

  set latest(mov) {
    this.movements.push(mov);
  },
};
console.log(account.latest);
account.latest = 50;
console.log(account.latest);

//Object.create
console.log("-----------------Object.create-----------------");
const PersonProto = {
  calcAge() {
    console.log(2025 - this.birthYear);
  },

  init(name, birthYear) {
    this.name = name;
    this.birthYear = birthYear;
  },
};
const steven = Object.create(PersonProto);
steven.name = "Steven";
steven.birthYear = 2002;
steven.calcAge();
console.log(steven.__proto__);

const sara = Object.create(PersonProto);
sara.init("Sara", 1998);
sara.calcAge();

