console.log("Hello, World!");

let name = "Alice"; // Variable that can change
const age = 25;     // Variable that cannot change
var city = "Paris"; // Older way to declare a variable
console.log(name, age, city);

let sum = 5 + 3;       // 8
let difference = 5 - 3; // 2
let product = 5 * 3;    // 15
let quotient = 5 / 3;   // 1.666...
let remainder = 5 % 3;  // 2
console.log(sum);
console.log(difference);
console.log(product);
console.log(quotient);
console.log(remainder);

console.log(5 === 5); // true (strict equality)
console.log(5 !== 3); // true (not equal)
console.log(5 > 3);   // true
console.log(5 < 3);   // false
console.log(5 >= 3);  // true
console.log(5 <= 3);  // false

let myName = "Bryan";
let myAge = 16; // Replace with your age

if (myAge >= 18) {
  console.log(myName + ", you are eligible to vote.");
} else {
  console.log(myName + ", you are not eligible to vote.");
}


let balance = 10000;
let withdrawal = 5000;

if (withdrawal <= balance) {
    console.log('Transaction successfull')
} else {
    console.log('Insufficient funds!!!')
};
