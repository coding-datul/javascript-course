'use strict';

console.log(`varX`);
// console.log(`letX`);
// console.log(`constX`);

var varX = 1;
let letX = 2;
const constX = 3;

function addDecl(a, b) {
  return a + b;
}

const addExpr = function (a, b) {
  return a + b;
};

const addArrow = (a, b) => a + b;

const person = {
  name: 'Jonas',
  greet: function () {
    console.log(`Hello, I am ${this.name}`);
  },
};
const anotherPerson = { name: 'Sarah' };
anotherPerson.greet = person.greet;
anotherPerson.greet();
const greetFunction = person.greet;
greetFunction();

const button = document.querySelector('button');
button.addEventListener('click', person.greet);
button.addEventListener('click', () => person.greet());
button.addEventListener('click', person.greet.bind(person));

const obj = {
  name: 'Object',

  regularMethod: function () {
    console.log('Regular:', this.name);
  },

  arrowMethod: () => {
    console.log('Arrow:', this.name);
  },
};

obj.regularMethod();
obj.arrowMethod();

const quiz = {
  name: 'Quiz Object',
  regularMethod() {
    console.log('Regular:', this.name);
  },
  arrowMethod: () => {
    console.log('Arrow:', this.name);
  },
};

quiz.regularMethod();
quiz.arrowMethod();

const timer = {
  name: 'Timer',
  start: function () {
    console.log(`${this.name} starting...`);
    const self = this;

    setTimeout(function () {
      console.log(`${self.name} finished`);
    }, 1000);
  },
  startModern: function () {
    console.log(`${this.name} starting modern...`);

    setTimeout(() => {
      console.log(`${this.name} finished modern`); // this works!
    }, 1500);
  },
};

timer.start();
timer.startModern();

const functionTypes = {
  regularFunction: function () {
    console.log('Arguments length:', arguments.length);
    console.log('First argument:', arguments[0]);
  },

  arrowFunction: () => {
    console.log('Arrow function called');
  },

  modernFunction: (...args) => {
    console.log('Args length:', args.length);
    console.log('First arg:', args[0]);
  },
};

functionTypes.regularFunction('hello', 'world');
functionTypes.arrowFunction('test');
functionTypes.modernFunction('modern', 'approach');


let age = 30;

let oldAge = age;

age = 31;

console.log(`age`, age);
console.log(`oldAge`, oldAge);

const me = {
  name: 'Herszel',
  age: 20,
};

const friend = me;
friend.name = 'Ellica';
friend.age = 21;

console.log(`me`, me);
console.log(`friend`, friend);

const orignal = {
  name: 'Jesse',
  age: 24,
  hobbies: ['reading', 'coding'],
};

const shallowCopy = { ...orignal };

shallowCopy.name = 'Bob';

console.log(`orignal name:`, orignal);
console.log(`copy name:`, shallowCopy);

shallowCopy.hobbies.push('basketball');

console.log(`orignal hobbies:`, orignal);
console.log(`copy hobbies:`, shallowCopy);

const deepOrignal = {
  name: 'Charlie',
  age: 32,
  // nested object
  address: { city: 'Paris', country: 'France' },
  // nested array
  hobbies: ['traveling', 'photography'],
};

const deepCopy = structuredClone(deepOrignal);

deepCopy.address.city = 'London';
deepCopy.hobbies.push('cooking');
deepCopy.name = 'Lex';

console.log(`deepOrignal`, deepOrignal);
console.log(`deepCopy`, deepCopy);