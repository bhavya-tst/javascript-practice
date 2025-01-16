
const luftansa={
    airline: 'Luftansa',
    iataCode: 'LH',
    bookings: [],
    book(flightNum, name){
        console.log(`${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`);
        this.bookings.push({flight: `${this.iataCode}${flightNum}`, name});
    }
}

luftansa.book(239, 'Jonas');
luftansa.book(635, 'John');

const eurowings={
    airline: 'Eurowings',
    iataCode: 'EW',
    bookings: [],
}
const book=luftansa.book;
// book(23, 'Sarah');// Uncaught TypeError: Cannot read property 'airline' of undefined
book.call(eurowings, 23, 'Sarah');

const details=[583, 'George'];
book.apply(luftansa, details);
book.call(eurowings, ...details);

const bookEW=book.bind(eurowings);
bookEW(23, 'Steven');
const bookLH=book.bind(luftansa);
bookLH(23, 'Steven');
const bookEW23=book.bind(eurowings, 23);
bookEW23('Jonas');

luftansa.planes=400;
luftansa.buyPlane=function(){
    console.log(this);
    this.planes++;
    console.log(this.planes);
}
// luftansa.buyPlane();
document.querySelector('.buy').addEventListener('click', luftansa.buyPlane.bind(luftansa)); //Without bind, this keyword will point to the button element

//Partial application

const addTax=(rate, value)=>value+value*rate;
console.log(addTax(0.1, 200));
const addVat=addTax.bind(null, 0.23);
console.log(addVat(100));
console.log(addVat(23));

const addTaxRate=(rate)=>{
    return function(value){
        return value+value*rate;
    };
}
const addGst=addTaxRate(0.18);
console.log(addGst(100));


// IIFE
(
    function(){
        console.log('This will never run again');
    }
)();
(()=>console.log('This will also never run again'))();

// Closures
const secureBooking=function(){
    let passengerCount=0;
    return function(){
        passengerCount++;
        console.log(`${passengerCount} passengers`);
    }
}
const booker=secureBooking();
booker();
booker();
booker();
console.dir(booker);