### **Objects and DOM Manipulation**

In this section, we will cover:

1. **Objects in JavaScript**: Understanding how to create and manipulate objects.
2. **DOM Manipulation**: How to interact with and modify HTML elements using JavaScript.

---

### **1. Objects in JavaScript**

Objects are a fundamental part of JavaScript and allow you to store collections of data and more complex entities.

#### **Creating Objects**
You can create an object using object literal syntax.

```javascript
let person = {
  firstName: "John",
  lastName: "Doe",
  age: 30,
  greet: function () {
    return `Hello, my name is ${this.firstName} ${this.lastName}`;
  },
};

console.log(person.firstName); // Output: John
console.log(person.greet());  // Output: Hello, my name is John Doe
```

**Explanation:**
- The object `person` contains properties (`firstName`, `lastName`, `age`) and a method (`greet`).
- `this` refers to the current object and is used to access its properties inside a method.

---

#### **Adding, Updating, and Deleting Properties**

```javascript
let car = {
  brand: "Toyota",
  model: "Corolla",
  year: 2020,
};

// Adding a property
car.color = "blue";

// Updating a property
car.year = 2022;

// Deleting a property
delete car.model;

console.log(car); // Output: { brand: "Toyota", year: 2022, color: "blue" }
```

---

#### **Looping Through Objects**

You can use a `for...in` loop to iterate over an object's properties.

```javascript
let book = {
  title: "1984",
  author: "George Orwell",
  year: 1949,
};

for (let key in book) {
  console.log(`${key}: ${book[key]}`);
}

// Output:
// title: 1984
// author: George Orwell
// year: 1949
```

**Explanation:**
- `key` is the property name.
- `book[key]` gives the corresponding value.

---

#### **Object Methods**

Some common object methods:
1. **`Object.keys()`**: Returns an array of property names.
2. **`Object.values()`**: Returns an array of property values.
3. **`Object.entries()`**: Returns an array of key-value pairs.

```javascript
let user = {
  name: "Alice",
  age: 25,
};

console.log(Object.keys(user));   // Output: ["name", "age"]
console.log(Object.values(user)); // Output: ["Alice", 25]
console.log(Object.entries(user)); // Output: [["name", "Alice"], ["age", 25]]
```
<br><br>

# **2. DOM Manipulation**

The **DOM (Document Object Model)** is an interface that allows scripts to update the structure, style, and content of a webpage.

## **Selecting Elements**

1. **`getElementById()`**: Selects an element by its ID.
2. **`querySelector()`**: Selects the first matching element.
3. **`querySelectorAll()`**: Selects all matching elements.

### HTML Structure:
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>DOM Manipulation Example</title>
</head>
<body>
    <div id="main">Hello, World!</div>

    <script src="script.js"></script>
</body>
</html>
```

### JavaScript (script.js):

```javascript
// Select the HTML element with the id "main"
let element = document.getElementById("main");

// Log the text content of the selected element to the console
console.log(element.textContent); // Output: Hello, World!
```

---

### Explanation:

1. **HTML Structure**:
   - The `<div>` element is defined with an `id="main"`, and inside it, the text "Hello, World!" is displayed. This is the content we will manipulate using JavaScript.

2. **JavaScript Code**:
   - **`document.getElementById("main")`**: This JavaScript command is used to select the HTML element with the `id="main"`. The `document.getElementById()` function retrieves the element, and the ID `main` tells the browser which specific element to look for. It returns a reference to that DOM element.
   
   - **`element.textContent`**: After selecting the element, we access its `textContent` property. This property contains the text inside the HTML element, which in this case is "Hello, World!". By logging `element.textContent` to the console, you are able to see the content inside the `<div>`.

3. **Console Output**:
   - When the JavaScript is executed, the text "Hello, World!" from the `<div>` element is output to the console.

### Full Process:
1. The HTML page loads and the browser renders the content, including the `<div>` with the ID "main".
2. The JavaScript is executed (after the page loads), selecting the element with `id="main"`.
3. The `textContent` of the element (which is "Hello, World!") is retrieved and logged to the browser's console.

### How DOM Manipulation Works:
In the web browser, the DOM represents the structure of the HTML document as a tree of objects. Each object represents an element, attribute, or piece of text in the HTML. With JavaScript, we can interact with this tree and modify the content, structure, or styling of the page dynamically.

In your case, you're reading the content of an element, but JavaScript can also change the content, apply styles, add or remove elements, and much more using DOM manipulation methods.

---

## **Changing Content**

### Updated HTML Structure:
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>DOM Manipulation - Changing Content</title>
</head>
<body>
    <p id="message">This is a message.</p>

    <script src="script.js"></script>
</body>
</html>
```

### Updated JavaScript (script.js):

```javascript
// Select the HTML element with the id "message"
let message = document.getElementById("message");

// Change the text content of the selected element
message.textContent = "The content has been updated!";
```

---

### Explanation:

1. **HTML Structure**:
   - In this example, the HTML contains a paragraph (`<p>`) element with the `id="message"`. The text inside the paragraph is initially "This is a message." This is the content we will modify using JavaScript.

2. **JavaScript Code**:
   - **`document.getElementById("message")`**: Just like in the previous example, this line selects the HTML element with the ID `message`. The `document.getElementById()` function returns a reference to the `<p>` element in the DOM.
   
   - **`message.textContent = "The content has been updated!"`**: This line changes the text content of the selected element. Here, we set the `textContent` property to a new value: "The content has been updated!". This replaces the previous text, which was "This is a message."

3. **What Happens**:
   - When the page loads, the initial content of the `<p>` element is "This is a message."
   - After the JavaScript executes, the content of the paragraph changes to "The content has been updated!" because the `textContent` is updated dynamically.
   
   **Note**: The page content on the screen changes immediately once this line of JavaScript is executed. The browser reflects this change instantly.

### Full Process:

1. The HTML is loaded, and the `<p>` element is displayed with the text "This is a message."
2. JavaScript executes (after the page is loaded) and selects the element with `id="message"`.
3. The `textContent` of the paragraph is updated to "The content has been updated!".
4. The page content updates, and the user sees the new message in the browser.

### DOM Manipulation Recap:

This example demonstrates how we can **change** content using JavaScript. While `textContent` is used here to change the text inside an element, there are other ways to manipulate the DOM, such as:

- **`innerHTML`**: Can be used to change the content of an element, but it allows HTML markup as well (e.g., adding a link or bold text).
- **`setAttribute()`**: Allows us to change attributes like `id`, `class`, or `src` of elements.
- **`style`**: Can change the styles directly (e.g., `element.style.color = "red";` to change the text color).

This is a fundamental concept in JavaScript that makes web pages dynamic and interactive!

---

## **Changing Styles**

### HTML Structure:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>DOM Manipulation - Changing Styles</title>
</head>
<body>
    <div id="box" style="width: 100px; height: 100px;"></div>

    <script src="script.js"></script>
</body>
</html>
```

### JavaScript (script.js):

```javascript
// Select the HTML element with the id "box"
let box = document.getElementById("box");

// Change the background color of the box
box.style.backgroundColor = "blue";

// Change the border style of the box
box.style.border = "2px solid black";
```

---

### Explanation:

1. **HTML Structure**:
   - The HTML contains a `<div>` element with the `id="box"`. It has inline styles set in the `style` attribute to define the width and height of the `div`. The element is a square, 100px by 100px, but has no color or border yet.
   
2. **JavaScript Code**:
   - **`document.getElementById("box")`**: Just like before, this line selects the element with the ID `"box"` and stores the reference to it in the `box` variable.
   
   - **`box.style.backgroundColor = "blue";`**: This line changes the background color of the box to **blue** by accessing the `style` property of the `div` and modifying the `backgroundColor` attribute.
   
   - **`box.style.border = "2px solid black";`**: This line modifies the border of the box by setting it to **2px solid black**. Again, we're using the `style` property to change the `border` CSS attribute.

### What Happens:
1. The HTML is loaded and the `div` is displayed as a 100px by 100px square with no color and no border.
2. The JavaScript runs after the page is loaded:
   - The background color of the `div` is changed to **blue**.
   - A **black border** of `2px` width is applied around the box.
3. The changes are reflected immediately in the browser, and you’ll see a blue box with a black border.

### Full Process:
1. When the page loads, you’ll see the `div` as a small square without color or borders.
2. JavaScript is executed, and it modifies the styles of the `div` element dynamically.
3. The visual appearance of the box is updated with the new background color and border.

### DOM and Style Manipulation Recap:
In this case, you're using JavaScript to dynamically change the **CSS styles** of an element. Instead of writing the styles in the `<style>` section of HTML or using an external CSS file, you directly manipulate the `style` property of an element in JavaScript.

Here are a few more things you can do with the `style` property:

- **Change text color**:
   ```javascript
   box.style.color = "white";  // Changes the text color inside the box
   ```
- **Change font size**:
   ```javascript
   box.style.fontSize = "20px";  // Changes the font size
   ```
- **Change width and height dynamically**:
   ```javascript
   box.style.width = "200px";  // Change width
   box.style.height = "200px"; // Change height
   ```

This is a great way to interact with the visual properties of elements on your webpage, and it allows you to create interactive, dynamic user interfaces.

## Changing More Styles

### Full HTML and JavaScript Example:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Dark Mode</title>
</head>
<body>
    <!-- Button that will trigger the style change -->
    <button id="darkMode">Dark Mode</button>

    <script>
        // Select the button element by its ID
        let button = document.getElementById("darkMode");

        // Add an event listener to the button
        button.addEventListener("click", function() {
            // Change the background color of the body to navy blue
            document.body.style.backgroundColor = "navy";
            
            // Change the font color (text color) of the body to white
            document.body.style.color = "white";
        });
    </script>
</body>
</html>
```

---

### Explanation:

1. **HTML Structure**:
   - We have a `<button>` element with the ID `darkMode`. This is the button that users will click to change the styles of the body.
   
2. **JavaScript Code**:
   - **`let button = document.getElementById("darkMode");`**: This line selects the button element using its ID (`darkMode`).
   
   - **`button.addEventListener("click", function() {...});`**: We use `addEventListener` to listen for a "click" event on the button. When the button is clicked, the function inside the event listener is executed.
   
   - **`document.body.style.backgroundColor = "navy";`**: Inside the click event function, this line changes the background color of the entire body to **navy**.
   
   - **`document.body.style.color = "white";`**: This line changes the font (text) color of the body to **white**.

### What Happens:
- Initially, the page loads with the default styles.
- When the user clicks the **"Dark Mode"** button:
   - The **background color** of the `body` changes to **navy blue**.
   - The **font color** (text color) of the `body` changes to **white**.
   
### Full Process:
1. When the page loads, you see the default styles (usually the background color is white, and the text is black).
2. After the button is clicked, the styles change dynamically, giving the page a new look with a navy background and white text.

### Enhancements:
- You can add more styles, animations, or effects based on user interaction.
- If you wanted to toggle the colors back to their original state (e.g., by clicking the button again), you could add a condition to check the current style and toggle it.


## Reverting Background Color:

### Updated Code with Toggle Functionality:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Toggle Body Styles</title>
</head>
<body>
    <!-- Button that will trigger the style change -->
    <button id="darkMode">Dark Mode</button>

    <script>
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
            } else {
                // Change to new style
                document.body.style.backgroundColor = "navy";
                document.body.style.color = "white";
                button.textContent = "Light Mode"; // Change button text
            }

            // Toggle the state
            dark = !dark;
        });
    </script>
</body>
</html>
```

### Explanation of Changes:

1. **Tracking the Current State (`dark`)**:
   - We introduce a variable `dark` that tracks whether the style has been changed or not.
   - Initially, it's set to `false`, meaning the styles haven't been changed yet.

2. **Condition to Toggle Styles**:
   - Inside the `click` event listener, we use an `if` statement to check whether the style has already been changed (`dark` is `true`).
   - If the style has been changed (i.e., `dark` is `true`):
     - We **revert the styles** back to their original state by setting the background color and text color to empty strings (`""`). This effectively removes any inline styles applied to the `body`, reverting it to the default styles defined by the browser or CSS.
     - The button text is also reset to "Dark Mode" to indicate the next action.
   - If the style hasn't been changed yet (`dark` is `false`):
     - We **apply the new styles** (navy background and white text).
     - The button text is changed to "Light Mode" so the user knows that clicking it again will revert the changes.

3. **Toggling the State**:
   - After each button click, we toggle the `dark` variable. This is done by setting it to the opposite value using `!dark`. This allows the script to switch between the two states: one where the style is changed, and one where it is not.

### What Happens:

- Initially, the body has the default styles (white background, black text).
- The first time you click the button, the background color changes to navy and the text color becomes white.
- The button text changes to **"Light Mode"**.
- If you click the button again, the styles revert to their original state, and the button text changes back to **"Dark Mode"**.

### Benefits:
- This makes the page more interactive by allowing the user to toggle between two different styles with a single button.
- The button also clearly communicates the current action by changing its text each time it’s clicked.

---

## **Adding and Removing Classes**

```javascript
// HTML Example: <div id="container" class="hidden"></div>

let container = document.getElementById("container");

// Adding a class
container.classList.add("visible");

// Removing a class
container.classList.remove("hidden");

// Checking if a class exists
console.log(container.classList.contains("visible")); // Output: true
```

---

#### **Creating and Appending Elements**

```javascript
// HTML Example: <ul id="list"></ul>

let list = document.getElementById("list");

// Create a new list item
let newItem = document.createElement("li");
newItem.textContent = "This is a new item";

// Append it to the list
list.appendChild(newItem);
```

---

#### **Event Listeners**

```javascript
// HTML Example: <button id="clickMe">Click Me</button>

let button = document.getElementById("clickMe");

button.addEventListener("click", () => {
  console.log("Button was clicked!");
});
```

**Explanation:**
- `addEventListener` attaches a function to an event (e.g., `click`).

---

### **Practice Exercises**
1. Create an object representing a student with properties: name, age, and grades (array). Add a method to calculate the average grade.
2. Write a script that selects a paragraph with a specific ID and changes its text to "Hello, DOM!".
3. Create a button that, when clicked, adds a new item to a list on the webpage.
4. Build a simple counter using DOM manipulation. Include buttons to increment, decrement, and reset the counter.

---

### **Solutions to Practice Exercises**

#### **1. Create an object representing a student with properties: name, age, and grades (array). Add a method to calculate the average grade.**

```javascript
let student = {
  name: "Alice",
  age: 20,
  grades: [85, 90, 78, 92],
  calculateAverage: function () {
    let sum = this.grades.reduce((total, grade) => total + grade, 0);
    return sum / this.grades.length;
  },
};

console.log(student.calculateAverage()); // Output: 86.25
```

**Explanation:**
- `reduce((total, grade) => total + grade, 0)` calculates the sum of the grades.
- `sum / this.grades.length` computes the average by dividing the total sum by the number of grades.

---

#### **2. Write a script that selects a paragraph with a specific ID and changes its text to "Hello, DOM!".**

```javascript
// HTML Example: <p id="greeting">Original Text</p>

let paragraph = document.getElementById("greeting");
paragraph.textContent = "Hello, DOM!";

console.log(paragraph.textContent); // Output: Hello, DOM!
```

**Explanation:**
- `getElementById("greeting")` selects the paragraph element by its `id`.
- `textContent` updates the content of the selected paragraph.

---

#### **3. Create a button that, when clicked, adds a new item to a list on the webpage.**

```javascript
// HTML Example:
// <ul id="list"></ul>
// <button id="addItem">Add Item</button>

let button = document.getElementById("addItem");
let list = document.getElementById("list");

button.addEventListener("click", () => {
  let newItem = document.createElement("li");
  newItem.textContent = "New List Item";
  list.appendChild(newItem);
});
```

**Explanation:**
- `createElement("li")` creates a new list item.
- `textContent = "New List Item"` sets the content of the list item.
- `appendChild(newItem)` adds the new item to the existing list.

---

#### **4. Build a simple counter using DOM manipulation. Include buttons to increment, decrement, and reset the counter.**

```javascript
// HTML Example:
// <div id="counter">0</div>
// <button id="increment">Increment</button>
// <button id="decrement">Decrement</button>
// <button id="reset">Reset</button>

let counter = document.getElementById("counter");
let increment = document.getElementById("increment");
let decrement = document.getElementById("decrement");
let reset = document.getElementById("reset");

let count = 0;

increment.addEventListener("click", () => {
  count++;
  counter.textContent = count;
});

decrement.addEventListener("click", () => {
  count--;
  counter.textContent = count;
});

reset.addEventListener("click", () => {
  count = 0;
  counter.textContent = count;
});
```

**Explanation:**
- The variable `count` tracks the current value.
- Each button updates the value of `count` and reflects it on the webpage by updating `counter.textContent`.

---

### **Diving Deeper into DOM Concepts: Event Delegation and Forms**

#### **1. Event Delegation**

Event delegation is a technique where a single event listener is added to a parent element to manage events for its child elements.

**Why Use Event Delegation?**
- Efficient when managing many child elements.
- Automatically handles dynamically added elements.

**Example: Handling clicks on dynamically added list items**

```javascript
// HTML Example: <ul id="list"></ul>

let list = document.getElementById("list");

// Add event listener to the parent element
list.addEventListener("click", (event) => {
  if (event.target.tagName === "LI") {
    console.log(`You clicked on: ${event.target.textContent}`);
  }
});

// Dynamically add list items
let newItem = document.createElement("li");
newItem.textContent = "Dynamically Added Item";
list.appendChild(newItem);
```

**Explanation:**
- `event.target` refers to the actual clicked element.
- Only `LI` elements are targeted using `if (event.target.tagName === "LI")`.

---

#### **2. Forms**

Forms allow user input and interaction. You can use JavaScript to validate and process form data.

**Example: Form Validation**

```javascript
// HTML Example:
// <form id="userForm">
//   <input type="text" id="username" placeholder="Enter username" required />
//   <button type="submit">Submit</button>
// </form>

let form = document.getElementById("userForm");
let usernameInput = document.getElementById("username");

form.addEventListener("submit", (event) => {
  event.preventDefault(); // Prevent form submission

  let username = usernameInput.value.trim();

  if (username === "") {
    alert("Username cannot be empty!");
  } else {
    console.log(`Submitted username: ${username}`);
  }
});
```

**Explanation:**
- `event.preventDefault()` prevents the default form submission.
- `trim()` removes leading and trailing spaces from the input value.
- An alert is shown if the input is empty; otherwise, the username is logged.

---

### **Practice Exercises**

1. Create a dynamic table where clicking a "Add Row" button adds a new row to the table.
2. Implement a simple form that accepts a user's name and email, validates the inputs, and displays the data below the form when submitted.
3. Use event delegation to handle click events on a list where items can be dynamically added.

---

### **Solutions to Practice Exercises**

#### **1. Create a dynamic table where clicking an "Add Row" button adds a new row to the table.**

```javascript
// HTML Example:
// <table id="dynamicTable" border="1">
//   <thead>
//     <tr>
//       <th>Name</th>
//       <th>Age</th>
//     </tr>
//   </thead>
//   <tbody></tbody>
// </table>
// <button id="addRow">Add Row</button>

let table = document.getElementById("dynamicTable");
let addRowButton = document.getElementById("addRow");

addRowButton.addEventListener("click", () => {
  let newRow = table.insertRow(); // Add a new row at the end of the table

  let nameCell = newRow.insertCell(0); // First column
  let ageCell = newRow.insertCell(1); // Second column

  nameCell.textContent = "John Doe"; // Example name
  ageCell.textContent = Math.floor(Math.random() * 100); // Random age
});
```

**Explanation:**
- `table.insertRow()` creates a new row.
- `row.insertCell(columnIndex)` adds cells to the row.
- `textContent` assigns content to the cells.

---

#### **2. Implement a simple form that accepts a user's name and email, validates the inputs, and displays the data below the form when submitted.**

```javascript
// HTML Example:
// <form id="userForm">
//   <input type="text" id="name" placeholder="Enter name" required />
//   <input type="email" id="email" placeholder="Enter email" required />
//   <button type="submit">Submit</button>
// </form>
// <div id="output"></div>

let userForm = document.getElementById("userForm");
let output = document.getElementById("output");

userForm.addEventListener("submit", (event) => {
  event.preventDefault();

  let name = document.getElementById("name").value.trim();
  let email = document.getElementById("email").value.trim();

  if (name === "" || email === "") {
    alert("All fields are required!");
    return;
  }

  output.textContent = `Name: ${name}, Email: ${email}`;
});
```

**Explanation:**
- Form submission is prevented using `event.preventDefault()`.
- Input values are retrieved and trimmed to ensure no leading/trailing spaces.
- Validation ensures that fields are not empty, displaying an error if validation fails.

---

#### **3. Use event delegation to handle click events on a list where items can be dynamically added.**

```javascript
// HTML Example:
// <ul id="dynamicList">
//   <li>Initial Item</li>
// </ul>
// <button id="addListItem">Add List Item</button>

let list = document.getElementById("dynamicList");
let addListItemButton = document.getElementById("addListItem");

// Event delegation for list items
list.addEventListener("click", (event) => {
  if (event.target.tagName === "LI") {
    console.log(`Clicked on: ${event.target.textContent}`);
  }
});

// Add new list items dynamically
addListItemButton.addEventListener("click", () => {
  let newItem = document.createElement("li");
  newItem.textContent = "New Item " + (list.children.length + 1);
  list.appendChild(newItem);
});
```

**Explanation:**
- Event delegation is implemented on the parent `ul` element to listen for clicks on `li` elements.
- Dynamically added items are also handled because the parent listener reacts to any `LI` under it.

---