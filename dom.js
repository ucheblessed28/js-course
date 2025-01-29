// Select the HTML element with the id "main"
let element = document.getElementById("main");

// Log the text content of the selected element to the console
console.log(element.textContent); // Output: Hello, World!

// Select the HTML element with the id "box"
let box = document.getElementById("box");

// Change the background color of the box
box.style.backgroundColor = "blue";

// Change the border style of the box
box.style.border = "2px solid black";

// Select the HTML element with the id "message"
let message = document.getElementById("message");

// Change the text content of the selected element
message.textContent = "The content has been updated!";

// Select the button element by its ID
let button = document.getElementById("darkMode");

// Variable to track the current state (if the style has been changed or not)
let dark = false;

// Add an event listener to the button
button.addEventListener("click", function() {
    if (dark) {
        // Revert to the original style
        document.body.style.backgroundColor = "";
        document.body.style.color = "";
        button.textContent = "Dark Mode"; // Reset button text

        // Set the button style for light mode (dark button)
        button.style.backgroundColor = "black";
        button.style.color = "white";
    } else {
        // Change to new style
        document.body.style.backgroundColor = "black";
        document.body.style.color = "white";
        button.textContent = "Light Mode"; // Change button text

        // Set the button style for dark mode (light button)
        button.style.backgroundColor = "white";
        button.style.color = "black";
    }

    // Toggle the state
    dark = !dark;
});

// =============================================

function myFunction() {
    // Get the value of the input field with id="numb"
    let x = document.getElementById("numb").value;
    // If x is Not a Number or less than one or greater than 10
    let text;
    if (x < 10) {
      text = "Number should be 10 or greater";
    }
    else if (x > 20) {
        text = "Number should be 20 or less";
    }
    else if (isNaN(x)) {
        text = "Input must be a Number or a string";
    }
    else {
      text = "Input OK";
    }
    document.getElementById("demo").innerHTML = text;
  }