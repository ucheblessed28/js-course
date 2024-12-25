// Function to play a single round of Rock, Paper, Scissors
function playGame(playerChoice) {
    // Define the possible choices in an array
    const choices = ['rock', 'paper', 'scissors'];
  
    // Randomly select a choice for the computer
    const computerChoice = choices[Math.floor(Math.random() * 3)];
  
    // Variable to store the result of the game
    let result = '';
  
    // Compare the player's choice with the computer's choice to determine the result
    if (playerChoice === computerChoice) {
      // If both choices are the same, it's a tie
      result = "It's a tie!";
    } else if (
      (playerChoice === 'rock' && computerChoice === 'scissors') || 
      (playerChoice === 'paper' && computerChoice === 'rock') || 
      (playerChoice === 'scissors' && computerChoice === 'paper')
    ) {
      // The player wins if they beat the computer's choice
      result = "You win!";
    } else {
      // Otherwise, the computer wins
      result = "You lose!";
    }
  
    // Log the results to the console for the player to see
    console.log(`You chose: ${playerChoice}`);
    console.log(`Computer chose: ${computerChoice}`);
    console.log(result);
  }
  