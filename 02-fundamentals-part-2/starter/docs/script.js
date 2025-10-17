console.log("Part 2 function is ready. ");

console.log (" ==== FUNCTIONS ==== ");
function logger() {
    console.log("My name is Ellica ");
}
function logger2() {
    console.log("Your name is Chester ");
}

logger();
logger2();

function fruitProcessor(apples, oranges) {
   console.log(apples, oranges);
   const juice = `Juice with ${apples} apples and ${oranges} oranges`;
   return juice;
}

console.log(fruitProcessor(21, 19));

const juice1 = fruitProcessor(5,0);
const juice2 = fruitProcessor(24,2);
const juice3 = fruitProcessor(54,5);
const juice4 = fruitProcessor(53,3);

console.log(fruitProcessor(juice3));

//Function Expression
const calcAge = function (birthYear) {
    return 2025 - birthYear; 
};

const age1 = calcAge(2004); 
const age2 = calcAge(2001);

console.log(age1);
console.log(age2);
console.log(calcAge(2005));

function introduce(firstName, lastName, age) {
    const introduction = `Hi Im ${firstName} ${lastName} and Im ${age} years old. `;
    return introduction;
}

console.log(introduce("Chester", "Garcia", 22));
console.log(introduce("Chester"));

function yearsUntilRetirement (birthYear, firstName) {
    const age = calcAge(birthYear);
    const retirement = 65 - age;

    if (retirement > 0 ) {
        return `${firstName} retires in ${retirement} years`;
    }else{
        return `${firstName} has already retired`;
    }
}

console.log(yearsUntilRetirement(2003, "Chester"));


//function scope
const globalVar = `I am global`;
const localVar = `I am local`; 

function testScope() {
    const localVar = `I am local`;
    console.log(global);
    console.log(globalVar);
}

testScope();
console.log(globalVar);
console.log(localVar);

////////////////////////////////////
// Coding Challenge #1

// Function to calculate average of 3 scores
function calcAverage(score1, score2, score3) {
  return (score1 + score2 + score3) / 3;
}

// Function to check winner
function checkWinner(avgDolphins, avgKoalas) {
  if (avgDolphins >= 2 * avgKoalas) {
    return `Dolphins win (${avgDolphins} vs. ${avgKoalas})`;
  } else if (avgKoalas >= 2 * avgDolphins) {
    return `Koalas win (${avgKoalas} vs. ${avgDolphins})`;
  } else {
    return `No team wins. Dolphins: ${avgDolphins}, Koalas: ${avgKoalas})`;
  }
}

// Test Data 1
let scoreDolphins = calcAverage(44, 23, 71);
let scoreKoalas = calcAverage(65, 54, 49);
console.log(checkWinner(scoreDolphins, scoreKoalas));

// Test Data 2
scoreDolphins = calcAverage(85, 54, 41);
scoreKoalas = calcAverage(23, 34, 27);
console.log(checkWinner(scoreDolphins, scoreKoalas));