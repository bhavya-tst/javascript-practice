"use strict";

// const arr=[1,2,3,4];
// const [a,b,c,d]=arr;
// console.log(a,b,c,d);
// const [first,...second]=arr;
// console.log(first,second);
const openingHours={
    thu:{
        open:12,
        close:22,
    },
    fri:{
        open:11,
        close:23,
    },
    [`day-${1+3} sat`]:{
        open:0,
        close:24,
    },
};
const resturant={
    name:'Classico Italiano',
    location:'Via Angelo Tavanti 23, Firenze, Italy',
    categories:['Italian','Pizzeria','Vegetarian','Organic'],
    starterMenu:['Focaccia','Bruschetta','Garlic Bread','Caprese Salad'],
    mainMenu:['Pizza','Pasta','Risotto'],
    openingHours,
    order(starterIndex,mainIndex){
        return [this.starterMenu[starterIndex],this.mainMenu[mainIndex]];
    }, // this is also correct syntax.
    // order:function(starterIndex,mainIndex){
    //     return [this.starterMenu[starterIndex],this.mainMenu[mainIndex]];
    // },
}

let [first,,second]=resturant.categories;
console.log(first,second);//Italian Vegetarian
[first,second]=[second,first];
console.log(first,second);// Vegetarian Italian

const [starter,mainCourse]=resturant.order(2,0);
console.log(starter,mainCourse);//Garlic Bread Pizza

const [p,q,r]=[8,9];
console.log(p,q,r);//8 9 undefined

// const {name,openingHours,location:resturantLocation}=resturant;
// console.log(name,openingHours,resturantLocation); // name is deprecated don't use it

const {nemu,starterMenu:stater}=resturant; // nemu is undefined and stater is starterMenu
console.log(nemu,stater);//undefined ['Focaccia','Bruschetta','Garlic Bread','Caprese Salad']

let a=111;
let b=999;
const obj={a:23,b:7,c:14};
// {a,b}=obj; //will not work because it is not a block code starting with { will be treated as block code}
({a,b}=obj);
console.log(a,b);//23 7

// Nested Object
const {fri:{open:o,close:c}}=resturant.openingHours;
console.log(o,c);//11 23

// Iterables : Arrays, Strings, Maps, Sets. NOT Objects
const str="bhavya";
const letters=[...str," ","P."];
console.log(letters);//['b','h','a','v','y','a',' ','P.']
console.log(...str);//b h a v y a
// console.log(`${...str} patel`);//error

const [x,y,...z]=[1,2,3,4,5];
console.log(x,y,z);//1 2 [3,4,5]

let num="";
console.log(num || 10);//10
console.log(num && 10);//0
console.log(num ?? 10);// if(num is null or undefined) then 10 else num.

const menu=[...resturant.starterMenu,...resturant.mainMenu];
    for(const item of menu){
        console.log(item);
    }
    //.entries() returns an array of arrays with index and value
    for(const item of menu.entries()){
        console.log(item);
    }
    // Using destructuring
    for(const [i,item] of menu.entries()){
        console.log(`${i+1}:${item}`);
    }


    const orderSet=new Set([
        "pasta",
        "pizza",
        "risotto",
        "pasta",
        "pizza",
        
    ]);
    console.log(orderSet.size);
    console.log(orderSet.has("pizza"));
    orderSet.add("garlic bread");
    orderSet.delete("risotto");
    orderSet.clear();

    const rest=new Map();
    rest.set("name","Classico Italiano");
    rest.set(1,"Firenze, Italy");
    console.log(rest.set(2,"Lisbon, Portugal"));
    rest.set("categories",["Italian","Pizzeria","Vegetarian","Organic"])
    .set("open",11)
    .set("close",23)
    .set(true,"We are open")
    .set(false,"We are closed");

    const time=20;
    console.log(rest.get(time>rest.get("open") && time<rest.get("close")));
    console.log(rest.get(1));
    console.log(rest.has(1));
    rest.delete(2);

    const arr=[1,2];
    rest.set(arr,'Test');
    rest.set([1,4],'Test1');
    rest.set(document.querySelector('h1'),'Heading');
    console.log(rest);
    rest.get(arr);
    rest.get([1,4]);//undefined as it is a new array and there address is different in heap.

    const question=new Map([
        ['question','What is the best programming language in the world?'],
        [1,'C'],
        [2,'Java'],
        [3,'JavaScript'],
        ['correct',3],
        [true,'Correct'],
        [false,'Try Again'],
    ]);
    console.log(question);

    // Convert object to map
    console.log(Object.entries(openingHours));
    const hoursMap=new Map(Object.entries(openingHours));
    console.log(hoursMap);
    
    const airline="TAP air portugal";
    const plane="A320";
    console.log(plane[0]);
    console.log(airline.length);
    console.log(airline.indexOf('r'));
    console.log(airline.lastIndexOf('r'));
    console.log(airline.slice(4));
    console.log(airline.slice(4,7));
    console.log(airline.slice(0,airline.indexOf(' ')));
    console.log(airline.slice(airline.lastIndexOf(' ')+1));
    console.log(airline.slice(-2));
    console.log(airline.slice(1,-1));
    const checkMiddleSeat=function(seat){
        const s=seat.slice(-1);
        if(s==='B' || s==='E')
            console.log('You got the middle seat');
        else
            console.log('You got lucky');
    }
    checkMiddleSeat('11B');
    checkMiddleSeat('23C');
    checkMiddleSeat('3E');

    console.log(new String('bhavya'));
    console.log(typeof new String('bhavya'));
    console.log(typeof new String('bhavya').slice(1));

    console.log(airline.toLowerCase());
    console.log(airline.toUpperCase());
    const passenger="bhAvYa";
    const passengerLower=passenger.toLowerCase();
    const passengerCorrect=passengerLower[0].toUpperCase()+passengerLower.slice(1);
    console.log(passengerCorrect);

    console.log(airline.includes('portugal'));
    console.log(airline.startsWith('TAP'));
    console.log(airline.endsWith('portugal'));

    console.log('a+very+nice+string'.split('+'));
    console.log('bhavya patel'.split(' '));
    const [firstName,lastName]='bhavya patel'.split(' ');
    const newName=['Mr.',firstName,lastName.toUpperCase()].join(' ');
    console.log(newName);

    const capitalizeName=function(name){
        const names=[];
        for(const n of name.split(' ')){
            // names.push(n[0].toUpperCase()+n.slice(1));
            names.push(n.replace(n[0],n[0].toUpperCase()));
        }
        console.log(names.join(' '));
    }
    capitalizeName('jessica ann smith davis');
    capitalizeName('bhavya patel');

    const message="Go to gate 23!";
    console.log(message.padStart(25,'+').padEnd(35,'+'));
    console.log('bhavya'.padStart(25,'+').padEnd(35,'+'));

    const maskCreditCard=function(number){
        const str=number+'';
        const last=str.slice(-4);
        return last.padStart(str.length,'*');
    }
    console.log(maskCreditCard(433789798797));
    console.log(maskCreditCard('433789798798577577'));
    console.log(maskCreditCard(433787));
    const message2="Bad weather... All Departures Delayed...";
    console.log(message2.repeat(5));
    

