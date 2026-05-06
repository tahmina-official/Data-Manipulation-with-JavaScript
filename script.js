// =============================================
// Part 1: Math Problems
// =============================================

// The initial numbers that must be verified.

const n1 = 10;
const n2 = 15;
const n3 = 20;
const n4 = 5;

// ------------------------------
// Check one: add up to 50
// This is a fairly simple operation using
// arithmetic operators and a comparison.
// ------------------------------

const isSum50 = (n1 + n2 + n3 + n4) === 50;
console.log(`The numbers add up to 50: ${isSum50}`);

// ------------------------------
// Check two: at least two odd numbers
// Here, we use modulus to check if something is odd.
// Since % 2 is 0 if even and 1 if odd, we can use
// arithmetic to count the total number of odd numbers.
// ------------------------------

const isTwoOdd = (n1 % 2) + (n2 % 2) + (n3 % 2) + (n4 % 2) >= 2;

console.log(`There are at least two odd numbers: ${isTwoOdd}`);

// ------------------------------
// Check three: no number larger than 25
// This time, we use the OR operator to check
// if ANY of the numbers is larger than 25.
// ------------------------------

const isUnder25 = n1 > 25 || n2 > 25 || n3 > 25 || n4 > 25;

console.log(`All numbers are 25 or less: ${isUnder25}`);

// ------------------------------
// Check four: all unique numbers
// This is long, and there are more efficient
// ways of handling it with other data structures
// that we will review later.
// ------------------------------

const isUnique = n1 !== n2 && n1 !== n3 && n1 !== n4 && n2 !== n3 && n2 !== n4 && n3 !== n4;

console.log(`All numbers are unique: ${isUnique}`);

// ------------------------------
// All divisible by 5
// ------------------------------

const allDivisibleBy5 = n1 % 5 === 0 && n2 % 5 === 0 && n3 % 5 === 0 && n4 % 5 === 0;

console.log(`All numbers are divisible by 5: ${allDivisibleBy5}`);

// ------------------------------
// First number larger than last
// ------------------------------

const isFirstLargerThanLast = n1 > n4;

console.log(`First number is larger than last: ${isFirstLargerThanLast}`);


// ------------------------------
// Arithmetic chain
// ------------------------------

// Step 1: subtract first from second
let result = n2 - n1;
console.log(`Step 1 (n2 - n1): ${result}`);

// Step 2: multiply by third
result = result * n3;
console.log(`Step 2 (result * n3): ${result}`);

// Step 3: remainder with fourth
result = result % n4;
console.log(`Step 3 (result % n4): ${result}`);

// ------------------------------
// Here, we put the results into a single variable 
// for convenience. Note how we negate isOver25 using
// the ! operator. We could also have tested for 
// "isUnder25" as an alternative.
// ------------------------------
const isValid =
    isSum50 &&
    isTwoOdd &&
    isUnder25 &&
    isUnique;

console.log(`The four numbers are valid according to the criteria: ${isValid}`);


// =============================================
// Part 2: Practical Math - Road Trip
// =============================================

// Trip details
const distance = 1500; // miles
const fuelBudget = 175; // dollars
const fuelPrice = 3; // dollars per gallon


// ------------------------------
// 55 MPH
// ------------------------------
const mpg55 = 30;
const speed55 = 55;

const gallons55 = distance / mpg55;
const cost55 = gallons55 * fuelPrice;
const time55 = distance / speed55;
const withinBudget55 = cost55 <= fuelBudget;

console.log(`\n--- Traveling at 55 MPH ---`);
console.log(`Gallons needed: ${gallons55}`);
console.log(`Fuel cost: $${cost55}`);
console.log(`Within budget: ${withinBudget55}`);
console.log(`Trip time: ${time55} hours`);


// ------------------------------
// 60 MPH
// ------------------------------
const mpg60 = 28;
const speed60 = 60;

const gallons60 = distance / mpg60;
const cost60 = gallons60 * fuelPrice;
const time60 = distance / speed60;
const withinBudget60 = cost60 <= fuelBudget;

console.log(`\n--- Traveling at 60 MPH ---`);
console.log(`Gallons needed: ${gallons60}`);
console.log(`Fuel cost: $${cost60}`);
console.log(`Within budget: ${withinBudget60}`);
console.log(`Trip time: ${time60} hours`);


// ------------------------------
// 75 MPH
// ------------------------------
const mpg75 = 23;
const speed75 = 75;

const gallons75 = distance / mpg75;
const cost75 = gallons75 * fuelPrice;
const time75 = distance / speed75;
const withinBudget75 = cost75 <= fuelBudget;

console.log(`\n--- Traveling at 75 MPH ---`);
console.log(`Gallons needed: ${gallons75}`);
console.log(`Fuel cost: $${cost75}`);
console.log(`Within budget: ${withinBudget75}`);
console.log(`Trip time: ${time75} hours`);


// ------------------------------
// Comparison / Conclusion
// ------------------------------
console.log(`\n--- Comparison ---`);
console.log(`At 55 MPH: Cheapest fuel cost but longest travel time.`);
console.log(`At 60 MPH: Balanced between time and cost.`);
console.log(`At 75 MPH: Fastest trip but most expensive.`);

// Simple conclusion
const bestOption = "60 MPH";

console.log(`\nBest option for this trip: ${bestOption}, because it balances cost and travel time.`);