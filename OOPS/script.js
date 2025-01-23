// const Person = function (name, birthYear) {
//   // Instance properties
//   this.name = name;
//   this.birthYear = birthYear;

//   // Never do this because it will create a new copy of the function for each object
//   // this.calcAge=function(){
//   //     console.log(2021-this.birthYear);
//   // }
// };

// const jones = new Person("John", 1990);

// // 1. A new {} is created
// // 2. Function is called, this = {}
// // 3. {} linked to prototype
// // 4. function automatically return {}
// const malik = new Person("Malik", 1995);
// const maltida = new Person("Maltida", 1992);
// console.log(jones, malik, maltida);

// console.log(jones instanceof Person); // true

// // Prototypes
// console.log("-----------------Prototypes-----------------");
// console.log(Person.prototype);
// Person.prototype.calcAge = function () {
//   console.log(2025 - this.birthYear);
// };
// jones.calcAge();
// maltida.calcAge();

// Person.hey = function () {
//   console.log("Hey there ✌️🤞👍👌");
// };

// Person.hey();
// // jones.hey(); // Error
// console.log(jones.__proto__);
// console.log(jones.__proto__ === Person.prototype);
// console.log(Person.prototype === Person.__proto__); // false
// console.log(Person.prototype, Person.__proto__);
// console.log(Person.prototype.isPrototypeOf(jones));
// console.log(Person.prototype.isPrototypeOf(Person)); // false

// Person.prototype.species = "Homo sapiens";
// console.log(jones, maltida.species);

// console.log(jones.hasOwnProperty("name"));
// console.log(jones.hasOwnProperty("species"));

// console.log(jones.__proto__);
// //Object.prototype (top of prototype chain)
// console.log(jones.__proto__.__proto__);
// console.log(jones.__proto__.__proto__.__proto__);

// console.log(Person.prototype.constructor);
// console.dir(Person.prototype.constructor);

// const arr = [1, 2, 3, 3];
// console.log(arr.__proto__);
// console.log(arr.__proto__.__proto__);

// Array.prototype.unique = function () {
//   return [...new Set(this)];
// };
// console.log(arr.unique());

// class PersonCl {
//   constructor(fullName, birthYear) {
//     this.fullName = fullName;
//     this.birthYear = birthYear;
//   }

//   calcAge() {
//     console.log(2025 - this.birthYear);
//   }

//   get age() {
//     return 2025 - this.birthYear;
//   }

//   set fullName(name) {
//     if (name.includes(" ")) this._fullName = name;
//     else alert(`${name} is not full name.`);
//   }

//   get fullName() {
//     return this._fullName;
//   }

//   static hey() {
//     console.log(`Hey there ✌️🤞👍👌`);
//   }
// }

// const james = new PersonCl("James Aderson", 1990);
// console.log(james);
// james.calcAge();

// PersonCl.prototype.greet = function () {
//   console.log(`Hello ${this.fullName}`);
// };
// james.greet();

// PersonCl.hey();
// const walter = new PersonCl("Walter white", 1965);
// console.log(walter);

// //Getters and setters
// const account = {
//   owner: "Jones",
//   movements: [200, 530, 120, 300],

//   get latest() {
//     return this.movements.slice(-1).pop();
//   },

//   set latest(mov) {
//     this.movements.push(mov);
//   },
// };
// console.log(account.latest);
// account.latest = 50;
// console.log(account.latest);

// //Object.create
// console.log("-----------------Object.create-----------------");
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

// //Inheritance between "classes": constructor functions
// console.log("-----------------Inheritance between classes: constructor functions-----------------");
// const Person=function(firstName,birthYear){
//     this.firstName=firstName;
//     this.birthYear=birthYear;
// }

// Person.prototype.calcAge=function(){
//     console.log(2025-this.birthYear);
// }

// const Student=function(firstName,birthYear,course){
//     Person.call(this,firstName,birthYear);
//     this.course=course;
// }

// Student.prototype=Object.create(Person.prototype);
// Student.prototype.introduce=function(){
//     console.log(`${this.firstName} is studying ${this.course}`);
// }

// const mike=new Student("Mike",1999,"Computer Science");
// mike.introduce();
// mike.calcAge();

// console.log(mike.__proto__);
// console.log(mike.__proto__.__proto__);

// console.dir(Student.prototype.constructor);
// Student.prototype.constructor=Student;
// console.dir(Student.prototype.constructor);

//Inheritance between classes: ES6 classes
// console.log("-----------------Inheritance between classes: ES6 classes-----------------");
// class StudentCl extends PersonCl {
//   constructor(fullName, birthYear, course) {
//     super(fullName, birthYear);
//     this.course = course;
//   }

//   introduce() {
//     console.log(`${this.fullName} is studying ${this.course}`);
//   }

//   calcAge() {
//     console.log(`I'm ${2025 - this.birthYear} years old, but as a student I feel like ${2025 - this.birthYear + 10}`);
//   }
// }

// const martha = new StudentCl("Martha Jones", 2012, "Computer Science");
// martha.introduce();
// martha.calcAge();
// console.log(martha);

//Object.create
console.log("-----------------Inheritance between classes: Object.create-----------------");

const StudentProto = Object.create(PersonProto);
StudentProto.init = function (firstName, birthYear, course) {
  PersonProto.init.call(this, firstName, birthYear);
  this.course = course;
};
StudentProto.introduce = function () {
  console.log(`${this.name} is studying ${this.course}`);
};
const jay = Object.create(StudentProto);
jay.init("Jay", 1998, "Computer Science");
jay.introduce();
jay.calcAge();
console.log(jay);

// Another class
class Account{

  //Public fields (instances)
  locale=navigator.language;

  //Private fields (instances)
  #movements=[];
  #pin;
  constructor(owner,currency,pin){
    this.owner=owner;
    this.currency=currency;
    this.#pin=pin;
    console.log(`Thanks for opening an account, ${owner}`);
  }

  getMovements(){
    return this.#movements;
  }

  deposit(val){
    this.#movements.push(val);
    return this;

  }

  withdraw(val){
    this.deposit(-val);
    return this;

  }

  #apprveLoan(val){
  // _apprveLoan(val){
    return true;
  }

  requestLoan(val){
    if(this.#apprveLoan(val)){
      this.deposit(val);
      console.log(`Loan approved`);
      return this;
    }
  }
}

const acc1=new Account("Jones","USD",1111);


// console.log(acc1.#movements); // Error
// console.log(acc1.#approveLoan(1000)); // Error
acc1.deposit(250);
acc1.withdraw(140);
acc1.requestLoan(1000);
console.log(acc1.getMovements());
console.log(acc1);

acc1.deposit(300).deposit(500).withdraw(35).requestLoan(2500).withdraw(4000);
console.log(acc1.getMovements());
