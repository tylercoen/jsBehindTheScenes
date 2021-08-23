'use strict';
/*
//Scoping in practice
function calcAge(birthYear) {
  const age = 2037 - birthYear;
  function printAge() {
    let output = `${firstName}, you are ${age}, born in ${birthYear}`;
    console.log(output);
    if (birthYear >= 1981 && birthYear <= 1996) {
      var millenial = true;
      //Creating NEW variable with same name as outer scope's variable

      const firstName = 'Steven';
      output = 'NEW OUTPUT!';
      const str = `Oh, and you're a millenial, ${firstName}`;
      console.log(str);
      function add(a, b) {
        return a + b;
      }
    }
    console.log(millenial);
    //add(2,3);
    console.log(output);
  }
  printAge();
  return age;
}

const firstName = 'Jonas';
calcAge(1991);

//Hoisting and TDZ in Practice
//variables
console.log(me);
//console.log(job);
//console.log(year);

var me = 'Jonas';
let job = 'teacher';
const year = 1991;

//functions
console.log(addDecl(2, 3));
//console.log(addExpr(2,3));
//console.log(addArrow(2,3));
function addDecl(a, b) {
  return a + b;
}

const addExpr = function (a, b) {
  return a + b;
};

var addArrow = (a, b) => a + b;

// Example
if (!numProducts) deleteShoppingCart();

var numProducts = 10;

function deleteShoppingCart() {
  console.log('All products deleted!');
}

var x = 1;
let y = 2;
const z = 3;

//The This keyword
*/

/*
console.log(this);

const calcAge = function (birthYear) {
  console.log(2037 - birthYear);
  console.log(this); //returns undefined
};
calcAge(1991);

const calcAgeArrow = birthYear => {
  console.log(2037 - birthYear);
  console.log(this); //returns window, arrow functions use this of parent
};
calcAgeArrow(1980);

const jonas = {
  year: 1991,
  calcAge: function () {
    console.log(this); //returns the jonas object
    console.log(2037 - this.year);
  },
};
jonas.calcAge();

const matilda = {
  year: 2017,
};

//method borrowing
matilda.calcAge = jonas.calcAge;
matilda.calcAge(); //matilda is calling the function meaning that object because the this focus

const f = jonas.calcAge;
//f(); //will return undefined and cause an error
*/

//Regular fucntions vs. arrow functions
/*
var fistName = 'Matilda';

const jonas = {
  firstName: 'Jonas',
  year: 1991,
  calcAge: function () {
    console.log(this); //returns the jonas object
    console.log(2037 - this.year);
    //Solution 1 function gets its own this keyword which is undefined
    
    const self = this;
    const isMillenial = function () {
      console.log(self.year >= 1981 && self.year <= 1996);
    };
    /*console.log(this.year >= 1981 && this.year <= 1996);
    };
    //Solution 2
    const isMillenial = () => {
      console.log(this.year >= 1981 && this.year <= 1996);
    }; //this works because the arrow function uses the this keyword of it's parent which is jonas.
    isMillenial(); //returns undefined has to set self to this above the function
  },
  greet: () => {
    console.log(this);
    console.log(`Hey ${this.firstName}`);
  }, //this is actually the window object so it returns undefined b/c arrow functions have to use the this of the parent. When you add var firstName this will point to Matilda in the global object. Avoid using an arrow function as a method. Avoid using Var as well.
};
jonas.greet();
jonas.calcAge();

// arguments keyword

const addExpr = function (a, b) {
  console.log(arguments);
  return a + b;
};
addExpr(2, 5);
addExpr(2, 5, 8, 12); //you can add more than two arguments and use them in functions
var addArrow = (a, b) => {
  console.log(arguments); //arguments won't work in an arrow function
  return a + b;
};
addArrow(2, 5, 8);
*/

//primitives vs. objects
let age = 30;
let oldAge = age;
age = 31;
console.log(age);
console.log(oldAge);

//oldAge stays 30 while age updates to 31^^^

const me = {
  name: 'Jonas',
  age: 30,
};

const friend = me;
friend.age = 27;
console.log('Friend:', friend);
console.log('Me:', me);
// this changes both ages to 27^^^

/*primitives:
    number
    string
    boolean
    undefined
    null
    symbol
    bigint
*/
//primitive types
let lastName = 'Williams';
let oldLastName = lastName;
lastName = 'Davis';
console.log(lastName);
console.log(oldLastName);

//reference types
const jessica = {
  firstName: 'Jessica',
  lastName: 'Williams',
  age: 27,
};
const marriedJessica = jessica;
marriedJessica.lastName = 'Davis';
console.log('Before marriage:', jessica);
console.log('After marriage:', marriedJessica);

//copying objects
const jessica2 = {
  firstName: 'Jessica',
  lastName: 'Williams',
  age: 27,
  family: ['Alice', 'Bob'],
};

const jessicaCopy = Object.assign({}, jessica2); //creates a new object with copied properties. Creates a shallow copy only copying properties of first level not objects in an object.
jessicaCopy.lastName = 'Davis';
jessicaCopy.family.push('Mary'); //will add to jessica2 also
jessicaCopy.family.push('John'); //will add to jessica2 also, would need to deep clone using an external library

console.log('Before marriage:', jessica2);
console.log('After marriage:', jessicaCopy);
