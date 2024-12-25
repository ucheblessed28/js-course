### **Advanced DOM Concepts**

#### **1. Animations in DOM**

Animations can be implemented using JavaScript to create dynamic, visually appealing effects.

**Example: Animate a box moving across the screen**

```javascript
// HTML Example:
// <div id="box" style="width: 50px; height: 50px; background-color: blue; position: absolute;"></div>

let box = document.getElementById("box");
let position = 0;

function animate() {
  if (position >= 300) return; // Stop animation after 300px
  position++;
  box.style.left = position + "px"; // Move box horizontally
  requestAnimationFrame(animate); // Smooth animation
}

animate();
```

**Explanation:**
- `requestAnimationFrame()` ensures smooth animations by calling the `animate` function repeatedly.
- The `style.left` property is updated to change the box's position.

---

#### **2. Handling APIs**

JavaScript can fetch and display data from APIs, making applications dynamic and data-driven.

**Example: Fetch and display data from a public API**

```javascript
// HTML Example:
// <button id="fetchData">Fetch Data</button>
// <div id="output"></div>

let fetchButton = document.getElementById("fetchData");
let outputDiv = document.getElementById("output");

fetchButton.addEventListener("click", () => {
  fetch("https://jsonplaceholder.typicode.com/posts/1")
    .then((response) => response.json())
    .then((data) => {
      outputDiv.textContent = `Title: ${data.title}, Body: ${data.body}`;
    })
    .catch((error) => {
      console.error("Error fetching data:", error);
    });
});
```

**Explanation:**
- `fetch()` is used to request data from an API.
- `response.json()` parses the JSON response.
- The `then` and `catch` methods handle the resolved data and potential errors, respectively.

---

### **Practice Exercises**

1. Create a button that, when clicked, smoothly scrolls the page to the top.
2. Build a simple API-driven application that fetches and displays random user profiles.
3. Create a box that changes its background color every second in a loop using animations.

---

### **Solutions to the Practice Exercises**

---

#### **1. Create a button that, when clicked, smoothly scrolls the page to the top**

**HTML Example:**
```html
<button id="scrollToTop">Scroll to Top</button>
<div style="height: 1500px; background: linear-gradient(to bottom, skyblue, white);">
  Scroll down to test the button.
</div>
```

**JavaScript Solution:**
```javascript
let scrollToTopButton = document.getElementById("scrollToTop");

scrollToTopButton.addEventListener("click", () => {
  window.scrollTo({
    top: 0,            // Scroll to the very top of the page
    behavior: "smooth" // Smooth scrolling effect
  });
});
```

**Explanation:**
1. **Event Listener**: Adds a click event listener to the button.
2. **`window.scrollTo()`**: This function scrolls the page.  
   - The `top: 0` property specifies the top position of the page.
   - `behavior: "smooth"` enables a smooth scrolling effect.

---

#### **2. Build a simple API-driven application that fetches and displays random user profiles**

**HTML Example:**
```html
<button id="fetchUser">Get Random User</button>
<div id="userProfile">
  <h3 id="userName"></h3>
  <p id="userEmail"></p>
  <img id="userPicture" alt="User Picture" style="width: 100px; height: 100px; border-radius: 50%;">
</div>
```

**JavaScript Solution:**
```javascript
let fetchUserButton = document.getElementById("fetchUser");
let userName = document.getElementById("userName");
let userEmail = document.getElementById("userEmail");
let userPicture = document.getElementById("userPicture");

fetchUserButton.addEventListener("click", () => {
  fetch("https://randomuser.me/api/") // API for random user data
    .then((response) => response.json()) // Parse the JSON response
    .then((data) => {
      let user = data.results[0]; // Access the first user in the results
      userName.textContent = `${user.name.first} ${user.name.last}`;
      userEmail.textContent = user.email;
      userPicture.src = user.picture.large;
    })
    .catch((error) => {
      console.error("Error fetching user data:", error);
    });
});
```

**Explanation:**
1. **API Call**: The `fetch()` function requests random user data from the `randomuser.me` API.
2. **Response Handling**: 
   - `response.json()` converts the raw response to a JavaScript object.
   - The `data.results[0]` object contains user details.
3. **Updating the DOM**: Updates the `userName`, `userEmail`, and `userPicture` elements with the API response.
4. **Error Handling**: Logs an error if the API call fails.

---

#### **3. Create a box that changes its background color every second in a loop using animations**

**HTML Example:**
```html
<div id="colorBox" style="width: 100px; height: 100px; background-color: red; margin: 20px;"></div>
```

**JavaScript Solution:**
```javascript
let colorBox = document.getElementById("colorBox");
let colors = ["red", "green", "blue", "yellow", "purple"];
let currentIndex = 0;

setInterval(() => {
  colorBox.style.backgroundColor = colors[currentIndex]; // Change the background color
  currentIndex = (currentIndex + 1) % colors.length;    // Cycle through colors
}, 1000); // Change color every second (1000ms)
```

**Explanation:**
1. **Array of Colors**: An array holds the colors to cycle through.
2. **`setInterval()`**: 
   - Runs the function every 1000ms (1 second).
   - Updates the `style.backgroundColor` of the box.
3. **Index Management**:
   - The `currentIndex` variable tracks the current color.
   - `(currentIndex + 1) % colors.length` ensures that the index cycles back to `0` after reaching the end of the array.

---

### **Practice Exercises for Advanced DOM Manipulation**

---

#### **1. Create a modal popup**
Build a modal that appears when you click a button and disappears when you click the close button.

**HTML Example:**
```html
<button id="openModal">Open Modal</button>
<div id="modal" style="display: none; position: fixed; top: 50%; left: 50%; transform: translate(-50%, -50%); 
  background: white; padding: 20px; border: 1px solid gray; box-shadow: 0 4px 8px rgba(0,0,0,0.2);">
  <p>This is a modal popup!</p>
  <button id="closeModal">Close</button>
</div>
```

---

#### **2. Build an image carousel**
Create an image slider where you can navigate through images with "Previous" and "Next" buttons.

**HTML Example:**
```html
<div id="carousel">
  <button id="prev">Previous</button>
  <img id="carouselImage" src="https://via.placeholder.com/400" alt="Carousel Image" 
    style="width: 400px; height: 300px;">
  <button id="next">Next</button>
</div>
```

---

#### **3. Create a dynamic to-do list**
Add functionality to:
- Add new items to the list.
- Remove items by clicking on them.

**HTML Example:**
```html
<input id="newItem" type="text" placeholder="Enter new item">
<button id="addItem">Add</button>
<ul id="todoList"></ul>
```

---

#### **4. Implement a live character counter**
Create an input field that displays the number of characters typed in real-time.

**HTML Example:**
```html
<textarea id="textInput" rows="5" cols="30" placeholder="Type something..."></textarea>
<p>Characters: <span id="charCount">0</span></p>
```

---

#### **5. Create a dropdown menu**
Show and hide a dropdown menu when clicking a button.

**HTML Example:**
```html
<button id="dropdownButton">Toggle Menu</button>
<ul id="dropdownMenu" style="display: none; background: lightgray; list-style: none; padding: 10px;">
  <li>Option 1</li>
  <li>Option 2</li>
  <li>Option 3</li>
</ul>
```

---

### **Solutions to the Advanced DOM Manipulation Exercises**

---

#### **1. Modal Popup**

**HTML (No Changes):**
```html
<button id="openModal">Open Modal</button>
<div id="modal" style="display: none; position: fixed; top: 50%; left: 50%; transform: translate(-50%, -50%); 
  background: white; padding: 20px; border: 1px solid gray; box-shadow: 0 4px 8px rgba(0,0,0,0.2);">
  <p>This is a modal popup!</p>
  <button id="closeModal">Close</button>
</div>
```

**JavaScript Solution:**
```javascript
const openModalButton = document.getElementById("openModal");
const closeModalButton = document.getElementById("closeModal");
const modal = document.getElementById("modal");

// Show the modal
openModalButton.addEventListener("click", () => {
  modal.style.display = "block"; // Make the modal visible
});

// Hide the modal
closeModalButton.addEventListener("click", () => {
  modal.style.display = "none"; // Hide the modal
});
```

**Explanation:**
- **Event Listeners**:
  - Clicking "Open Modal" sets `modal.style.display` to `"block"` to make it visible.
  - Clicking "Close" sets `modal.style.display` to `"none"` to hide it.

---

#### **2. Image Carousel**

**HTML (No Changes):**
```html
<div id="carousel">
  <button id="prev">Previous</button>
  <img id="carouselImage" src="https://via.placeholder.com/400" alt="Carousel Image" 
    style="width: 400px; height: 300px;">
  <button id="next">Next</button>
</div>
```

**JavaScript Solution:**
```javascript
const carouselImage = document.getElementById("carouselImage");
const prevButton = document.getElementById("prev");
const nextButton = document.getElementById("next");

const images = [
  "https://via.placeholder.com/400/FF0000",
  "https://via.placeholder.com/400/00FF00",
  "https://via.placeholder.com/400/0000FF",
];

let currentIndex = 0;

// Update the image source
function updateImage() {
  carouselImage.src = images[currentIndex];
}

// Show the previous image
prevButton.addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + images.length) % images.length; // Loop backward
  updateImage();
});

// Show the next image
nextButton.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % images.length; // Loop forward
  updateImage();
});
```

**Explanation:**
- **`images` Array**: Holds URLs for the carousel images.
- **Navigation Logic**:
  - Clicking "Next" increases the index, cycling back to `0` after the last image.
  - Clicking "Previous" decreases the index, cycling to the last image if `currentIndex` becomes negative.

---

#### **3. Dynamic To-Do List**

**HTML (No Changes):**
```html
<input id="newItem" type="text" placeholder="Enter new item">
<button id="addItem">Add</button>
<ul id="todoList"></ul>
```

**JavaScript Solution:**
```javascript
const newItemInput = document.getElementById("newItem");
const addItemButton = document.getElementById("addItem");
const todoList = document.getElementById("todoList");

// Add a new item to the list
addItemButton.addEventListener("click", () => {
  const itemText = newItemInput.value.trim(); // Trim whitespace
  if (itemText !== "") {
    const listItem = document.createElement("li"); // Create a new <li>
    listItem.textContent = itemText;
    listItem.addEventListener("click", () => {
      listItem.remove(); // Remove item on click
    });
    todoList.appendChild(listItem); // Add <li> to <ul>
    newItemInput.value = ""; // Clear input field
  }
});
```

**Explanation:**
- **Add New Items**: Creates a new `<li>` element with the user's input and appends it to the list.
- **Remove Items**: Attaches a click event listener to each `<li>` to remove it when clicked.

---

#### **4. Live Character Counter**

**HTML (No Changes):**
```html
<textarea id="textInput" rows="5" cols="30" placeholder="Type something..."></textarea>
<p>Characters: <span id="charCount">0</span></p>
```

**JavaScript Solution:**
```javascript
const textInput = document.getElementById("textInput");
const charCount = document.getElementById("charCount");

// Update the character count
textInput.addEventListener("input", () => {
  charCount.textContent = textInput.value.length; // Update count dynamically
});
```

**Explanation:**
- **Event Listener**: Listens for the `input` event, which triggers whenever the user types in the text area.
- **Update Count**: Sets the `textContent` of `charCount` to the length of the text area's value.

---

#### **5. Dropdown Menu**

**HTML (No Changes):**
```html
<button id="dropdownButton">Toggle Menu</button>
<ul id="dropdownMenu" style="display: none; background: lightgray; list-style: none; padding: 10px;">
  <li>Option 1</li>
  <li>Option 2</li>
  <li>Option 3</li>
</ul>
```

**JavaScript Solution:**
```javascript
const dropdownButton = document.getElementById("dropdownButton");
const dropdownMenu = document.getElementById("dropdownMenu");

// Toggle menu visibility
dropdownButton.addEventListener("click", () => {
  dropdownMenu.style.display = dropdownMenu.style.display === "none" ? "block" : "none";
});
```

**Explanation:**
- **`style.display` Check**: Toggles between `"none"` (hidden) and `"block"` (visible) each time the button is clicked.

---

