// let weather = "sunny";

// if (weather == "sunny") {
//     console.log("Well, I better wear some suncream!")
// }   else if (weather == "rainy") {
//     console.log("Better take an umbrella")
// }   else {
//     console.log("Hmmm, it could go either way!")
// }

// if (1 === "1")  {
//     console.log(true);
// }
// else    {
//     console.log(false);
// }

// if (1 != "1")  {
//     console.log(true);
// }
// else    {
//     console.log(false);
// }

// let place = "Manc";
// let weather = "Cloudy";

// if (place == "Manc" && weather == "Sunny")   {
// console.log("Check again");
// }
// else if (place == "Manc" && weather =="Rain")   {
// console.log("Obvs");
// }
// else {
// console.log("What it isn't raining");
// }

// let car = "Honda";

// switch(car){
//     case "Ford":
//     case "GM":
//         console.log("You've got an American Car!");
//         break;
//     case "Peugeot":
//     case "Citroen":
//         console.log("You've got a French boy!");
//         break;
//     case "Honda":
//     case "Toyota":
//     case "Suzuki":
//         console.log("Japanese cars are dead quiet!");
//         break;
//     case "Mercedes":
//         console.log("You are proper posh German!");
//         break;
//     case "Volkswagen":
//         console.log("German aren't that bad at all");
//         break;
//     case "Hyundai":
//     case "KIA":
//         console.log("South Korean cars are getting popular");
//         break;
//     default:
//         console.log("Your car is not in the top ten companies in the world!!");
// }

// Activity 1 - Creat a variable called age. Write an if statement that logs "You arent old enough"

// let age = 16;

// if (age >= 17) {
//     console.log("Yes, I can serve you!")
// }   else if (age <= 17) {
//     console.log("You are not old enough!")
// }

// //Stretch - add country as well

// let age = 24;
// let country = "USA";

// if (age >= 17 && country == "UK")   {
// console.log("Yes, I can serve you!");
// }
// else if (age <= 17 && country == "UK")   {
// console.log("Sorry, I can not serve you");
// }


// // Activity 2 - 

// let topping = "Pepperoni";

// switch(topping){
//     case "Pepperoni":
//     case "Anchovies":
//         console.log("These are important ingredients for my Pizza");
//         break;
//     case "Sweetcorn":
//     case "Spicy Beef":
//         console.log(`I dont mind having ${topping} on my pizza`);
//         break;
//     default:
//         console.log(`${topping} should not be anywhere near a pizza!!`);
// }

// // Activity 3 - 

// const password = "easytocrack"

// if (password.length < 8){
//     console.log("Sorry you need to rethink your password choice!")
// }else{
//     console.log("Your password checks out!")
// }

// Activity 4 - 

// let num = 25;

// if (num /3 == 0 && /5 == 0){
//     console.log("This number is divisble by 3 or 5")
// }else{
//     console.log("This does not compute!")
// }

// Activity 5

// let num = 25;

// if (num % 3 == 0 && num % 5 == 0){
//     console.log("Fizz Buzz") 
// }
// else (num % 5 == 0) {
//     console.log("Buzz")
// }
// else (num % 3 == 0){
//     console.log("Fizz")
// }
// default{
//   console.log(This does not compute!)
// }

//Activity 6 

// let num = 5335;
// let numString = num.toString(); 
// let reverseNumString = numString.split('').reverse().join('');

// if (num == reverseNumString){
//     console.log(`Yes ${num} is a palindrome`)
// } else {
//     console.log(`No ${num} is not a palindrome`)
// }

// Activity 7

// let time = 7;
// let workPlace = "Cheadle"
// let homeTown = "Altrincham"

// if (time == 7){
//   console.log(`I am on my way to ${workPlace} to work`);
// } else if (time == 7){
//   console.log(`I am at home in ${homeTown}`);
// } else if (time == 9){
//   console.log(`I am at work in ${workPlace}`)
// } else {
//     console.log(`If it is between 9 and 5 I am at work in ${workPlace}. Otherwise, I'm at home in ${homeTown}`);
//   }

//   // // Activity 8
// let string = 'jrfndklhgfndjkjlkgperfijfhdknsadcvjhiiohjfkledsopiuhgtyujwsdxcvhgfdjhiopiwquhejkdsoiufghedjwshi';
// let vowelArr = ['a', 'e', 'i', 'o', 'u'];
// let highestIndex =0;
// // counter go through whole array using length as limiter
// for (let i = 0; i < vowelArr.length; i++){
// //  console.log(string.lastIndexOf(vowelArr[i]));
// // gets index of vowel in current iteration
//     index = string.lastIndexOf(vowelArr[i]);
// // compares current index to find highest index
// if (index >= highestIndex ){
// // so new highestindex becomes index
//     highestIndex = index;
// // won't reach last two nums in vowelarray
//     lastVowel = vowelArr[i];
// }
// }

// // This like logs the last Vowel to the console. 
// console.log(lastVowel); 
// // This line logs the index number of the last vowel. 
// console.log(highestIndex)

// // // Activity 9
// let word = "ABBA";
// if (word.charAt(0) == word.charAt(word.length-1)){
//   console.log("True")
// } else {
//   console.log("False")
// }

// // Challenge 10
// let num1 = 7;
// let num2 = 7;
// let sum = num1 + num2;

// if (sum % 2 == 0){
//   console.log(`The sum = ${sum} and is even.`)
// } else {
//   console.log(`${num1 * num2}`)
// }