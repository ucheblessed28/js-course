let secretNumber = 7;
let guess;

while (guess !== secretNumber) {
    // Prompt the user for a guess
    const userInput = prompt("Guess the number:");

    // Check if the user canceled the prompt
    if (guess !== secretNumber) {
    console.log("Wrong! Try again.");
  }
}
console.log("Correct! The secret number is " + secretNumber);


// // Define the secret number
// let secretNumber = 7;
// let guess = null; // Initialize guess to null

// while (guess !== secretNumber) {
//   // Prompt the user for a guess
//   const userInput = prompt("Guess the number:");

//   // Check if the user canceled the prompt
//   if (userInput === null) {
//     console.log("Game canceled.");
//     break; // Exit the loop
//   }

//   // Convert the input to an integer
//   guess = parseInt(userInput);

//   // Check for invalid input
//   if (isNaN(guess)) {
//     console.log("Please enter a valid number.");
//     continue; // Skip to the next iteration
//   }

//   // Check if the guess is incorrect
//   if (guess !== secretNumber) {
//     console.log("Wrong! Try again.");
//   }
// }

// // Check if the user guessed correctly
// if (guess === secretNumber) {
//   console.log("Correct! The secret number is " + secretNumber);
// }
