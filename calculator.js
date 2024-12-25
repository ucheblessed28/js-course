// Initialize variables to keep track of the current input, operator, and previous input
let currentInput = ''; // Stores the current number entered by the user
let operator = '';     // Stores the selected mathematical operator
let previousInput = ''; // Stores the previous number entered before the operator

// Function to append a number to the current input when a number button is clicked
function appendNumber(number) {
  // Add the number clicked to the current input
  currentInput += number;
  // Update the display to show the updated current input
  updateDisplay();
}

// Function to handle operator button clicks
function appendOperator(op) {
  // If there's no current input, return early (do nothing)
  if (currentInput === '') return;

  // Store the current input as the previous input
  previousInput = currentInput;

  // Set the operator to the one selected
  operator = op;

  // Clear the current input for the next number to be entered
  currentInput = '';
}

// Function to update the calculator display
function updateDisplay() {
  // Find the input field with ID 'display' and update its value with the current input
  document.getElementById('display').value = currentInput;
}

// Function to clear the calculator display and reset all variables
function clearDisplay() {
  // Reset all variables to their initial empty states
  currentInput = '';
  operator = '';
  previousInput = '';

  // Update the display to show an empty value
  updateDisplay();
}

// Function to calculate the result based on the inputs and operator
function calculate() {
  // If either currentInput or previousInput is empty, return early (do nothing)
  if (currentInput === '' || previousInput === '') return;

  // Convert previous and current inputs from strings to floating-point numbers
  const num1 = parseFloat(previousInput); // The first number entered
  const num2 = parseFloat(currentInput);  // The second number entered

  let result; // Variable to store the calculation result

  // Determine the operation to perform based on the operator
  switch (operator) {
    case '+':
      result = num1 + num2; // Perform addition
      break;
    case '-':
      result = num1 - num2; // Perform subtraction
      break;
    case '*':
      result = num1 * num2; // Perform multiplication
      break;
    case '/':
      result = num1 / num2; // Perform division
      break;
    default:
      return; // If no valid operator is found, exit the function
  }

  // Update the current input with the result (as a string)
  currentInput = result.toString();

  // Reset the operator and previous input since the calculation is complete
  operator = '';
  previousInput = '';

  // Update the display to show the result
  updateDisplay();
}
