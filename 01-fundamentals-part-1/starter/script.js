// // // // // JavaScript Fundamentals - Part 1
// // // // // We'll write our code here!

//     let js = "amazing";
//     console.log(40+8+23-10);
//     console.log(js);

//      console.log("=== VARIABLES ===");

//     let firstName = "Jonas";
//     console.log(firstName);
 
//     let age = 30;
//      console.log(age);
//      age = 50; 
//      console.log(age);

//     const birthYear = 1991;
//      console.log(birthYear);

//     birthYear = 2003;

//      const PI = 3.1415;
//      console.log(PI);

//      var job = "programmer";
//      job = "teacher";
//      console.log(job);

//      const country = "Philippines";
//      const language = "Filipino";

//      age = 25;
//      age = 26; // this will change

// // // // // good variable name
// // // // // let firstName 
// // // // // let myCurrentJob 
// // // // // const PI

// // // // // bad  name
// // // // // let 3years
// // // // // let jonas&matilda
// // // // // let now
    
// console.log("=== DATA TYPES ===");

// // // // // Number
//      let id = 12345;
//      console.log(id);
//      console.log(typeof age);

//      let lastName = "Datul";
//      console.log(lastName);
//      console.log(typeof lastName);

//      let javascriptIsFun = true;
//     console.log(javascriptIsFun);
//      console.log(typeof javascriptIsFun);

//      let year;
//      console.log(year); 
//      console.log(typeof year);

//      let dynamicVariable =40
//      console.log(dynamicVariable, typeof dynamicVariable);

//     dynamicVariable = "I am now a String!"
//      console.log(dynamicVariable, typeof dynamicVariable);

//     dynamicVariable = true;
//      console.log(dynamicVariable, typeof dynamicVariable);


// Basic Operators - Math operators
console.log("=== MATH OPERATORS ===");

const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;
console.log(ageJonas, ageSarah);

// More math operators
console.log(ageJonas * 2, ageJonas / 10, 2 ** 3);

console.log("Math operations:");
console.log("Addition:", 10 + 5); 
console.log("Subtraction:", 20 - 8); 
console.log("Multiplication:", 4 * 7); 
console.log("Division:", 15 / 3); 
console.log("Exponentiation:", 2 ** 3);

const firstName = "Jonas";
const lastName = "Doe";
console.log(firstName + " " + lastName); 

console.log("Hello " + "World" + "!"); 


// Assignment operators
console.log("=== ASSIGNMENT OPERATORS ===");

let x = 10 + 5; 
console.log("x starts as:", x);

x +=10;
console.log("x starts as:", x);
;

x *=4;
console.log("x starts as:", x);

x /=2;
console.log("x starts as:", x);

x ++;
console.log("x starts as:", x);

x--;
console.log("x starts as:", x);

// Comparison operators
console.log("=== COMPARISON OPERATORS ===");

console.log("Age comparison:");
console.log(ageJonas > ageSarah);
console.log(ageSarah >= 18); 
console.log(ageJonas < 30); 

console.log("Number comparisons:");
console.log(25 > 20);
console.log(15 < 10);
console.log(18 >= 18);
console.log(16 <= 15);

const isFullAge = ageSarah >= 18;
console.log("Sarah is adult:", isFullAge); 

console.log("Complex comparison:");
console.log(now - 1991 > now - 2018); // ageJonas > ageSarah

let z, y;
z = y = 25 - 10 - 5;
console.log(z,y);

const averageAge = (ageJonas + ageSarah) / 2;
console.log(ageJonas, ageSarah, averageAge);

////////////////////////////////////
// Coding Challenge #1 - BMI Calculator

// Test Data 1
const massMark1 = 78;
const heightMark1 = 1.69;
const massJohn1 = 92;
const heightJohn1 = 1.95;

// 1. Calculate BMIs using both versions
const BMIMark1 = massMark1 / heightMark1 ** 2;
const BMIJohn1 = massJohn1 / (heightJohn1 * heightJohn1);

// 2. Create markHigherBMI variable
const markHigherBMI1 = BMIMark1 > BMIJohn1;

// 3. Log results to console
console.log("Test Data 1:");
console.log(`Mark's BMI: ${BMIMark1.toFixed(2)}`);
console.log(`John's BMI: ${BMIJohn1.toFixed(2)}`);
console.log(`Does Mark have a higher BMI? ${markHigherBMI1}`);

////////////////////////////////////

// Test Data 2
const massMark2 = 95;
const heightMark2 = 1.88;
const massJohn2 = 85;
const heightJohn2 = 1.76;

// 1. Calculate BMIs
const BMIMark2 = massMark2 / heightMark2 ** 2;
const BMIJohn2 = massJohn2 / (heightJohn2 * heightJohn2);

// 2. Create markHigherBMI variable
const markHigherBMI2 = BMIMark2 > BMIJohn2;

// 3. Log results to console
console.log("\nTest Data 2:");
console.log(`Mark's BMI: ${BMIMark2.toFixed(2)}`);
console.log(`John's BMI: ${BMIJohn2.toFixed(2)}`);
console.log(`Does Mark have a higher BMI? ${markHigherBMI2}`);

// const firstName = "Jonas";
const job = "teacher";
const birthYear = 1991;
const year = 2037;

const jonas = "I'm " + firstName + ", a " + (year - birthYear) + " year old " + job + "!";
console.log(jonas);

const jonasNew = `I'm ${firstName}, a ${year - birthYear} year old ${job}!`;
console.log(jonasNew);

console.log(`I'm ${2037 - 1991} years old`);
console.log(`Math works: ${2 + 3} equals five`);
console.log(`Comparisons too: ${5 > 3}`);

console.log(`Just a regular string...`);

console.log(
  "String with \n\
multiple \n\
lines"
);

// New way - natural
console.log(`String multiple lines `);

// if else statement
const age = 10;

if (age >= 18) {
  console.log(`Sarah can start driving license 🚗`);
} else {
  const yearsLeft = 18 - age;
  console.log(`Sarah is too young. Wait another ${yearsLeft} years :)`);
}

console.log(Boolean(0)); 
console.log(Boolean(undefined)); 
console.log(Boolean("Jonas")); 
console.log(Boolean({})); 
console.log(Boolean(""));

// ////////////////////////////////////
// // Coding Challenge #2

// // Reuse your BMI calculation from Challenge #1
const massMark = 78;
const heightMark = 1.69;
const massJohn = 92;
const heightJohn = 1.95;

// const BMIMark = massMark / heightMark ** 2;
// const BMIJohn = massJohn / (heightJohn * heightJohn);

// // Compare BMIs and create intelligent messages
if (BMIMark > BMIJohn) {
  console.log(`Mark's BMI (${BMIMark.toFixed(1)}) is higher than John's (${BMIJohn.toFixed(1)})!`);
} else if (BMIJohn > BMIMark) {
  console.log(`John's BMI (${BMIJohn.toFixed(1)}) is higher than Mark's (${BMIMark.toFixed(1)})!`);
} else {
  console.log(`Mark and John have the same BMI (${BMIMark.toFixed(1)})!`);
}