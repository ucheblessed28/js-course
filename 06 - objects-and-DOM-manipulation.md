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

---

### **2. DOM Manipulation**

The **DOM (Document Object Model)** is an interface that allows scripts to update the structure, style, and content of a webpage.

#### **Selecting Elements**

1. **`getElementById()`**: Selects an element by its ID.
2. **`querySelector()`**: Selects the first matching element.
3. **`querySelectorAll()`**: Selects all matching elements.

```javascript
// HTML Example: <div id="main">Hello, World!</div>

let element = document.getElementById("main");
console.log(element.textContent); // Output: Hello, World!
```

---

#### **Changing Content**

```javascript
// HTML Example: <p id="message">This is a message.</p>

let message = document.getElementById("message");
message.textContent = "The content has been updated!";
```

**Explanation:**
- `textContent` changes the inner text of the element.

---

#### **Changing Styles**

```javascript
// HTML Example: <div id="box" style="width: 100px; height: 100px;"></div>

let box = document.getElementById("box");
box.style.backgroundColor = "blue";
box.style.border = "2px solid black";
```

**Explanation:**
- Use the `style` property to change CSS styles dynamically.

---

#### **Adding and Removing Classes**

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