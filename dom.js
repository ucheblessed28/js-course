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
let button = document.getElementById("changeStyleBtn");

// Variable to track the current state (if the style has been changed or not)
let isStyleChanged = false;

// Add an event listener to the button
button.addEventListener("click", function() {
    if (isStyleChanged) {
        // Revert to the original style
        document.body.style.backgroundColor = "";
        document.body.style.color = "";
        button.textContent = "Dark Mode"; // Reset button text
    } else {
        // Change to new style
        document.body.style.backgroundColor = "black";
        document.body.style.color = "white";
        button.textContent = "Light Mode"; // Change button text
    }

    // Toggle the state
    isStyleChanged = !isStyleChanged;
});