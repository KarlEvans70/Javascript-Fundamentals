// let offer = "none";
// let time = 1200;

// const cafe = {
//     name: "Whitesheep",
//     seatingCapacity: 100,
//     hasSpecialOffers: true,
//     drinks: [
//         "Cappuccino",
//         "Latte",
//         "Filter Coffee",
//         "Tea",
//         "Hot Chocolate"],
//     breakfastOffer: "Free croissant with coffee",
//     lunchOffer: "Free drink with surprisingly priced sandwich",
//     noOffer: "Sorry no offer",
//     openCafe() {
//         if (this.hasSpecialOffers) {
//           return "Come on in";
//         }
//     },    
//     closeCafe(){
//         return "We are closed, come back tomorrow!";
//     },
// };

// console.log(cafe.openCafe());

// if (time < 1100){
//     offer = cafe.breakfastOffer;
//     console.log(cafe.breakfastOffer);
// } else if (time < 1500) {
//     offer = cafe.lunchOffer;
//     console.log(cafe.lunchOffer);
// }

// const person = {
//     name: "Karl Evans",
//     age: 42,
//     favSongs: ["Untitled 1", "Untitled 2", "Untitled 3", "Untitled 4", "Untitled 5", "Untitled 6", "Untitled 7", "Untitled 8"], 
// }

// console.log(person.favSongs);

// Activity

// const alarmTypes = {
//     weekendAlarm: "No alarm needed",
//     weekdayAlarm: "Get up at 7am",
//   };

// let day = "Monday";
// let alarm;

// if (day === "Saturday" || day === "Sunday") {
//   alarm = alarmTypes.weekendAlarm;
// } else {
//   alarm = alarmTypes.weekdayAlarm;
// }

// console.log(alarm);

// Activity 1

// const person = {
//     name: "Karl Evans",
//     age: 42,
//     favSongs: ["Untitled 1", "Untitled 2", "Untitled 3", "Untitled 4", "Untitled 5", "Untitled 6", "Untitled 7", "Untitled 8"],
//     sayHi: (`Hello my name is ${this.name}`)
// }

// console.log(person.sayHi);

// Activity 2

// const pet = {
//         name: "Dave",
//         typeOfPet: "cat",
//         age: 22,
//         colour: "Tabby",
//         eating(){
//             return `${this.name} is eating`},
//             drinking(){
//                 return `${this.name} is drinking`
//             }
// };
    
// console.log(pet.eating());
// console.log(pet.drinking());    

// Activity 3

// const coffeeShop = {
//     branch: "Altrincham",
//     drinks: {
//         "Americano": 2.80,
//         "Latte": 2.30,
//         "Flat White": 3.00,
//         "Tea": 1.80
//     }, 
//     food: {
//         "Croissant": 2.00,
//         "Cinnamon Swirl": 2.50,
//         "Bear Claw": 3.20,
//         "Chocolate Twist": 1.80
//     }
//     drinksOrdered(drink1, drink2){
            // let drinks = Object.keys
//     
//     }
//     foodOrdered(){}
//     };

// console.log(coffeeShop.food);
// console.log(coffeeShop.food[1]);

let order = [];
const coffeeShop = {
    branch:"Altrincham",
    drink:{
        "Americano":2.80,
        "Water":1.20,
        "Mocha":2.90,
        "Flat White":3.00,
        "Tea":1.80
    },
    food:{
        "Croissant":2.10,
        "Cinnamon Swirl":2.50,
        "Bear Claw":3.20,
        "Chocolate Twist":1.80
    },
    drinksOrdered(drink1,drink2){
        let drinks = Object.keys(this.drink); 
        let drinkValues = Object.values(this.drink); 
        order.push(drinkValues[drinks.indexOf(drink1)]);
        order.push(drinkValues[drinks.indexOf(drink2)]);
        return `Drinks order ${drink1} and ${drink2}`;},
    foodOrdered(food1,food2){
        let foods = Object.keys(this.food); 
        let foodValues = Object.values(this.food); 
        order.push(foodValues[foods.indexOf(food1)]);
        order.push(foodValues[foods.indexOf(food2)]);
        return `Food order ${food1} and ${food2}`;
    }
}
console.log(coffeeShop.drinksOrdered("Americano","Mocha"));
console.log(coffeeShop.foodOrdered("Croissant","Cinnamon Swirl"));
let total = 0;
for(i=0;i<order.length;i++){
    total+=order[i];
}

console.log(`Total Value £${total}.`);