// console.log("All Around the World")
// console.log("All Around the World".charAt(7).toUpperCase());

// let i = 10;

// // i = i + 2; 
// i += 2;

// console.log(i);

// let favDrink = "coffee";

// let myName = "Karl";

// let myAge = "42";

// myAge = 28;

// favDrink = "Tea";

// console.log(`My favourite drink is ${favDrink} my name is ${myName} and I am ${myAge} years old`);

// Activity 1 - Program to store name age and fav color 

let favColor = "Red";

let myName = "Dave";

let myAge = "24";

myAge = 28;

favColor = "Mauve";

console.log(`Hi, my name is ${myName} my favourite color is ${favColor} and I am ${myAge} years old`);

// Activity 2 - Program to store what I eat today for my 3 meals - changed to tomorrows meals as well

let breakfast = "Croissant";
let lunch = "Noodles";
let dinner = "Lentil stew"

breakfast = "Toast";
lunch = "Pad Krapow";
dinner = "Raviolli";

console.log(`I will start the day with ${breakfast} for breakfast, later having ${lunch} for lunch. In the evening I will be having ${dinner} for dinner.`)

// Activity 3 - program that calculates the number of days from today to my birthday

// const birthday = new Date('24-11-2022');
// const today = Date.now('10-05-2022');

// const diff_time = Math.abs(birthday - today);
// const diff_days = Math.ceil(diff_time / (1000 * 60 * 60 * 24));

// console.log(`It is ${diff_days} days until my birthday`);

const today = new Date(2022, 05, 10, 23, 59, 59, 999);
const birthday = new Date(2022, 11, 24, 23, 59, 59, 999);
birthday.setFullYear(today.getFullYear(2022)); 
const msPerDay = 24 * 60 * 60 * 1000; 
let daysLeft = (birthday.getTime() - today.getTime()) / msPerDay;
daysLeft = Math.round(daysLeft); 

console.log(daysLeft);

// Activity 4 - Create 9 Variables. Assign either the value X, O, , to them and ut them in the board

let space1 = "X";
let space2 = "O";
let space3 = " ";
let space4 = "X";
let space5 = "X";
let space6 = " ";
let space7 = "O";
let space8 = " ";
let space9 = " ";

console.log(`      |      |      `)
console.log(`   ${space1}  |   ${space2}  |    ${space3}  `)
console.log(`      |      |      `)
console.log(`--------------------`)
console.log(`      |      |      `)
console.log(`   ${space4}  |   ${space5}  |   ${space6}   `)
console.log(`      |      |      `)
console.log(`--------------------`)
console.log(`      |      |      `)
console.log(`   ${space7}  |   ${space8}  |   ${space9}   `)
console.log(`      |      |      `)

// let s1= "X";
// let s2= "O";
// let s3= "";
// let s4= "X";
// let s5= "X";
// let s6= "";
// let s7= "O";
// let s8= "";
// let s9= "";
// console.log(`             |           |           `);
// console.log(`      ${s1}      |     ${s2}     |    ${s3}   `);
// console.log(`             |           |           `);
// console.log(`-------------------------------------`);
// console.log(`             |           |           `);
// console.log(`      ${s4}      |     ${s5}     |    ${s6}   `);
// console.log(`             |           |           `);
// console.log(`-------------------------------------`);
// console.log(`             |           |           `);
// console.log(`      ${s7}      |   ${s8}        |    ${s9}   `);
// console.log(`             |           |           `);

