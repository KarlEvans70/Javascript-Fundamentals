// For Loops

// let favDrinks = [
//     "Coke", 
//     "Fanta", 
//     "Irn Bru",
//     "Red Bull"
// ];

// for(let i = 0; i < favDrinks.length; i++){

// console.log(favDrinks[i]);

// }

// // console.log(favouriteDrinks[1]);
// // console.log(favouriteDrinks[2]);

// let multiplesTwo = [];

// for(let i = 0; i <= 20; i++){
//     if (i % 2==0){
//         multiplesTwo.push(i);
//     }
// }

// console.log(`Numbers divisible by 2 between 0 and 20 are: ${multiplesTwo}.`);

// While Loops

// let age = 15;

// while(age < 18 ) {

//     console.log("You're a child!");
//     age++;
// }

// console.log("You're ann adult!");

// let cards = ["Diamond", "Spade", "Heart", "Club"];
// let currentCard = "Club";

// while(currentCard != "Spade"){

//     console.log(currentCard);
//     currentCard = cards[Math.floor(Math.random()*4)];

// }

// console.log(currentCard);

// //Activity 1

// let favFilms = [
//     "TDK", 
//     "Last Samurai", 
//     "Braveheart",
//     "Ragnorok",
//     "Batman Begins"
//     ];

// favFilms.push("Dune", "SMNWH");
    
// for(let i = 0; i < favFilms.length; i++){
    
// console.log(favFilms[i]);

// }

// Activity 2

// function getRandomInt(max) {
//     return Math.floor(Math.random() * max);
//   }
  
//   console.log(getRandomInt(50));

// let randNum = [];
// while(randNum.length < 6){
//     let r = Math.floor(Math.random() * 50) + 1;
//     if(randNum.indexOf(r) === -1) randNum.push(r)
// }
// console.log(randNum)

// Activity 3

// for (let input = 1; input <= 9; input++) {
//     console.log(input);
//    }

// reverse

// let arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
 
// arr.slice().reverse()
//     .forEach(function(item) {
//             console.log(item);
//         });// activitty

// Activity 4

// let someFilms = [
//     "TDK", 
//     "Last Samurai", 
//     "Ghostbusters",
//     "Ragnarok",
//     "Batman Begins"
//     ];

// for (let i = 0; i < someFilms.length; i++) {
//     if (i == 2) {
//         if (someFilms[i] == "Ghostbusters") {
//             console.log("It's ghostbusters");
//         } else {
//             console.log("It's NOT ghostbusters");
//         }
//     }
// }

// // Acitivty 5

// for(let i = 0; i < 6; i++){
//     let genNum = Math.floor((Math.random() * 30) + 1); 
//     if(genNum % 7 == 0){
//         console.log(`${genNum} is Divisible.`);
//     } else{ 
//         console.log(`${genNum} isn't divisible.`)
//     }
// }

// // Activty 6

// let bobsFollowers =[
//     "Donny O'Bisto",
//     "Wavid Flotts",
//     "Sick Pirrow",
//     "Wave Dithington",
//     "Mahonny Marckani"
// ];
// let hannahsFollowers =[
//     "Mick Rilne",
//     "Ill Mogrowry",
//     "Bryan Boberts",
//     "Mahonny Marckani",
//     "Sick Pirrow"
// ];
// for(i=0;i<bobsFollowers.length;i++){
//     for(let j=0;j<hannahsFollowers.length;j++){
//         if(bobsFollowers[i] == hannahsFollowers[j]){
//             console.log(`${bobsFollowers[i]} likes Hannah and Bob`);
//             continue;
//         }
//     }
// }

// Activty 7

// A while statement is a loop that executes a specific statement till the condition evaluates to false.
// The condition is evaluated after executing the statement, resulting in the specified statement executing at least once.

// while — loops through a block of code as long as the condition specified evaluates to true.
// do while — loops through a block of code once; then the condition is evaluated. 
//      If the condition is true, the statement is repeated as long as the specified condition is true.
// for — loops through a block of code until the counter reaches a specified number.