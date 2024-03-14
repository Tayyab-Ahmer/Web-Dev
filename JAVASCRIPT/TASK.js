

// Task 1
// let name = "Tayyab";
// console.log("Name ", name);
// console.log("\n");

// Task 2
let age = 20;
console.log("Age ", age);
console.log("\n");

// Task 3
const Fruits = ["Mango", "Apple", "Grapes", "Peach"]
console.log(Fruits[0]);
console.log(Fruits[1]);
console.log(Fruits[2]);
console.log(Fruits[3]);
console.log("\n");

// Task 4
let currentYear = 2023;
currentYear = 2024;
console.log(currentYear);
console.log("\n");

// Task 5
let isRainyDay = false;
console.log("Rainy Day ", isRainyDay);
console.log("\n");

// Task 6
const personinfo = {
    Name: "Tayyab Ahmer",
    Age: 20,
    City: "Gujrat"
};
console.log("Name : ", personinfo.Name)
console.log("Age : ", personinfo.Age)
console.log("City : ", personinfo.City)
console.log("\n");



const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Please enter your name: ', function (userName) {
    console.log('Hello, ' + userName + '!');
    rl.close();
});
