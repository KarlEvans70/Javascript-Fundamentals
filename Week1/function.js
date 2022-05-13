// const pressGrindBeans = () => {
//     console.log("Grinding for 20 seconds");
// }
// pressGrindBeans();

// let coffeeIsGrinding = false;

// const pressGrindBeans = () => {
//     if (coffeeIsGrinding) {
//         console.log("Stopping the grind");
//         coffeeIsGrinding = false;
//     }else{
//         console.log("Grinding is about to begin");
//         coffeeIsGrinding = true;
//     }
// }
// pressGrindBeans();

// const cashWithdrawal = (amount, accnum) => {
//     console.log(`Withdrawing ${amount} from account ${accnum}`);
// }
// cashWithdrawal (300, 50449921);
// cashWithdrawal (30, 50449921);
// cashWithdrawal (200, 50449921);

// let accnum = 50449921;
// const cashWithdrawal = (amount, accnum) => {
//     console.log(`Withdrawing ${amount} from account ${accnum}`);
// }
// cashWithdrawal (300, accnum);
// cashWithdrawal (30, accnum);
// cashWithdrawal (200, 50447921);

// const addUp = (num1, num2) => {
//     return num1 + num2;
// }
// addUp(7, 3);
// console.log(addUp(2, 5));

// // //calculates celsius to farenheit
// const multiplyByNineFifths = (celsius) => {
//     return celsius * (9/5);
// };
// const getFarenheit = (celsius) => {
//     return multiplyByNineFifths(celsius) + 32;
// };
// console.log("The temperature is " + getFarenheit(15) + "°F");

// // Activity 1

// // Take this code and turn it into arrow function

// function factorial (n) {
//     if ((n === 0) || (n === 1)) {
//         return 1;
//     } else {
//         return (n * factorial(n-1));
//     }
// }

// console.log(factorial(33));

// const factorial = (n) => {
//     if ((n === 0) || (n === 1)) {
//         return 1;
//     } else {
//         return (n * factorial(n-1));
//     }
// }

// console.log(factorial(33));

// Activity 2

// Edit the below snippet to include two parameters and a running order count updated when the function is called:

// let orderCount = 0;

// const takeOrder = (size, topping1, topping2) => {
//     console.log(`${size} inch, Pizza with ${topping1} and ${topping2}`);
//     return orderCount++;
// }

// takeOrder(12, "pineapple", "pepperoni");
// takeOrder(18, "Sweetcorn", "chicken")
// takeOrder(18, "Ham", "mushroom")

// console.log(orderCount);

// // Activity 3

// class newAccount {
//     constructor(newPin, newBalance, newName){
//         this.pin = newPin;
//         this.balance = newBalance;
//         this.name = newName;
//     }
// }
// const Dave = new newAccount(2536, 20000, "Dave");
// const withdrawCash = (account,pin,amount) => {
//     pin = account.pin;
//     if(amount < account.balance){
//         console.log(`Your cash will be dispensed shortly, ${account.name}, your new balance is ${account.balance - amount}`)
//     }
//     else {
//         console.log("Sorry, please enter a valid amount");
//     }
// }
// const pinCheck = (account,pin,amount) => {
//     if(pin == account.pin){
//         withdrawCash(account,pin,amount);
//     }
//     else{
//         console.log("Incorrect PIN!");
//     }
// }

// pinCheck(Dave,2536,20);