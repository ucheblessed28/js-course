## **JavaScript Basics (Part 2)**

### **Loops**
Loops let us repeat actions in our code. They’re super useful when you want to execute a block of code multiple times without writing it repeatedly.

#### **Types of Loops**
1. **`for` Loop**:
   Use when you know how many times to repeat the code.

   **Example:**

   ```javascript

   for (let i = 1; i <= 5; i++) {
     console.log("Count: " + i);
   }
   ```

   **How it works:**
   - `let i = 1`: Start at 1.
   - `i <= 5`: Run the loop as long as `i` is less than or equal to 5.
   - `i++`: Increment `i` by 1 after each iteration.

2. **`while` Loop**:
   Use when you don’t know the exact number of iterations but have a condition to meet.

   **Example:**

   ```javascript
   let count = 1;
   while (count <= 5) {
     console.log("Count: " + count);
     count++; // Increment count
   }
   ```

3. **`do-while` Loop**:
   Executes the code **at least once**, even if the condition is false.

   **Example:**

   ```javascript
   let count = 6;
   do {
     console.log("Count: " + count);
     count++;
   } while (count <= 5);
   ```

---


## **1. For Loop**

A **`for` loop** is used when you know in advance how many times you want the loop to run. It consists of three parts:
1. **Initialization**: Set a starting point (e.g., `let i = 0`).
2. **Condition**: Specify when the loop should stop (e.g., `i < 10`).
3. **Increment/Decrement**: Update the loop variable (e.g., `i++` to increase).

### **General Syntax**
```javascript
for (initialization; condition; increment/decrement) {
  // Code to execute
}
```

### **Examples**

#### **Example 1: Print Numbers 1 to 10**
```javascript
for (let i = 1; i <= 10; i++) {
  console.log(i);
}
```

**Output:**
```
1
2
3
4
...
10
```

#### **Example 2: Print Even Numbers from 2 to 20**
```javascript
for (let i = 2; i <= 20; i += 2) {
  console.log(i);
}
```

**Use Case:** Generating sequences, such as even or odd numbers.

---

### **Practical Use Cases for `for` Loops**

1. **Iterating Over Arrays**
```javascript
let fruits = ["Apple", "Banana", "Cherry", "Dates"];
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}
```

**Output:**
```
Apple
Banana
Cherry
Dates
```

2. **Calculating the Sum of Numbers**
```javascript
let sum = 0;
for (let i = 1; i <= 10; i++) {
  sum += i; // Add i to sum
}
console.log("Sum:", sum); // Sum: 55
```

---

## **2. While Loop**

A **`while` loop** is used when you want to repeat a block of code **until a condition is no longer true**. It’s ideal when you don’t know in advance how many iterations you’ll need.

### **General Syntax**
```javascript
while (condition) {
  // Code to execute
}
```

### **Examples**

#### **Example 1: Print Numbers 1 to 5**
```javascript
let count = 1;
while (count <= 5) {
  console.log(count);
  count++;
}
```

**Output:**
```
1
2
3
4
5
```

---

#### **Example 2: Guessing Game**
Keep asking the user for a number until they guess it correctly.

```javascript
let secretNumber = 7;
let guess;

while (guess !== secretNumber) {
  guess = parseInt(prompt("Guess the number:"));
  if (guess !== secretNumber) {
    console.log("Wrong! Try again.");
  }
}
console.log("Correct! The secret number is " + secretNumber);
```

**Use Case:** Repeating until a specific condition is met.


---

### **Code Overview**

This code implements a simple **guessing game** where the user has to guess a predefined secret number (`7`). The game keeps running until the user guesses the correct number.

---

### **Code Breakdown**
Let’s break this code down step by step to understand how it works:

#### **1. Initialization**
```javascript
let secretNumber = 7;
let guess;
```
- **`secretNumber`**: This is the number the user needs to guess. It’s set to `7` in this case.
- **`guess`**: This variable will store the user’s input (their guess). Initially, it is undefined because the user hasn’t entered anything yet.

---

#### **2. The `while` Loop**
```javascript
while (guess !== secretNumber) {
  // Code inside the loop
}
```
- This loop will **keep running** as long as the user’s guess (`guess`) is **not equal** to the secret number (`secretNumber`).
- **`!==`** means "not equal" in JavaScript.
- The loop condition checks after every iteration if the user’s guess matches the secret number. If it doesn’t, the loop continues.

---

#### **3. Getting User Input**
```javascript
guess = parseInt(prompt("Guess the number:"));
```
- **`prompt()`**: A built-in function that displays a pop-up asking the user for input.
  - It always returns a string.
- **`parseInt()`**: Converts the user’s input (a string) into an integer so it can be compared to the secret number.

**Example:**
- User enters `"5"` → `parseInt("5")` → `5`.
- If the user enters something invalid (like `"hello"`), `parseInt()` will return `NaN`.

---

#### **4. Checking the Guess**
```javascript
if (guess !== secretNumber) {
  console.log("Wrong! Try again.");
}
```
- Inside the loop, we check if the user’s guess is **not equal** to the secret number.
- If the guess is incorrect:
  - Print `"Wrong! Try again."` in the console.
- The loop then repeats and asks the user for another guess.

---

#### **5. Winning the Game**
```javascript
console.log("Correct! The secret number is " + secretNumber);
```
- If the user guesses the correct number, the `while` loop stops because the condition (`guess !== secretNumber`) is no longer true.
- After exiting the loop, this message is displayed, congratulating the user.

---

### **Example Execution**

Here’s how the code might run:

1. **First Guess**:
   - User enters `5`.
   - `guess = 5`.
   - Condition: `5 !== 7` → **True**.
   - Message: `"Wrong! Try again."`.

2. **Second Guess**:
   - User enters `8`.
   - `guess = 8`.
   - Condition: `8 !== 7` → **True**.
   - Message: `"Wrong! Try again."`.

3. **Third Guess**:
   - User enters `7`.
   - `guess = 7`.
   - Condition: `7 !== 7` → **False**.
   - Loop stops.
   - Message: `"Correct! The secret number is 7"`.

---

### **Key Points**

1. **`while` loop**: Keeps running until the user guesses the correct number.
2. **`prompt()`**: Gets user input.
3. **`parseInt()`**: Converts input into a number for comparison.
4. **`if` statement**: Provides feedback when the guess is wrong.

---

### **Improvement Ideas**
1. **Input Validation**: Handle cases where the user enters invalid input (like letters).
2. **Feedback on Guesses**: Add hints like "Too high" or "Too low."
   ```javascript
   if (guess < secretNumber) {
     console.log("Too low! Try again.");
   } else if (guess > secretNumber) {
     console.log("Too high! Try again.");
   }
   ```

---

This is an improved version of the guessing game with helpful feedback when the guess is too high or too low, along with input validation to handle invalid inputs. 🚀

---

### **Improved Guessing Game Code**
```javascript
let secretNumber = 7;
let guess;

while (guess !== secretNumber) {
  let input = prompt("Guess the number:");

  // Convert input to a number and validate it
  guess = parseInt(input);

  if (isNaN(guess)) {
    console.log("Invalid input! Please enter a number.");
    continue; // Skip to the next iteration of the loop
  }

  // Check if the guess is too high, too low, or correct
  if (guess < secretNumber) {
    console.log("Too low! Try again.");
  } else if (guess > secretNumber) {
    console.log("Too high! Try again.");
  } else {
    console.log("Correct! The secret number is " + secretNumber);
  }
}
```

---

### **What’s New?**

#### 1. **Input Validation**
```javascript
if (isNaN(guess)) {
  console.log("Invalid input! Please enter a number.");
  continue;
}
```
- **`isNaN()`**: Checks if the converted value (`guess`) is `NaN` (not a number).
- If the user enters something invalid (like `"abc"`), we inform them and skip to the next iteration of the loop using `continue`.

---

#### 2. **Hints (Too High or Too Low)**
```javascript
if (guess < secretNumber) {
  console.log("Too low! Try again.");
} else if (guess > secretNumber) {
  console.log("Too high! Try again.");
}
```
- **`guess < secretNumber`**: If the guess is smaller than the secret number, print `"Too low! Try again."`
- **`guess > secretNumber`**: If the guess is greater, print `"Too high! Try again."`
- This gives the user helpful hints to adjust their guess.

---

### **Example Execution**

1. **User Input: `"abc"`**
   - Output: `"Invalid input! Please enter a number."`

2. **User Input: `"5"`**
   - Output: `"Too low! Try again."`

3. **User Input: `"10"`**
   - Output: `"Too high! Try again."`

4. **User Input: `"7"`**
   - Output: `"Correct! The secret number is 7"`

---

### **Further Enhancements**
1. **Limit the Number of Attempts**: End the game if the user runs out of attempts.
2. **Generate a Random Secret Number**:
   ```javascript
   let secretNumber = Math.floor(Math.random() * 100) + 1; // Random number between 1 and 100
   ```
3. **Keep Track of Attempts**:
   ```javascript
   let attempts = 0;
   attempts++;
   console.log("Attempts so far:", attempts);
   ```

---


### **Practical Use Cases for `while` Loops**

1. **Waiting for a Condition**
For example, a countdown:
```javascript
let timer = 5;
while (timer > 0) {
  console.log("Timer:", timer);
  timer--;
}
console.log("Time's up!");
```

**Output:**
```
Timer: 5
Timer: 4
...
Time's up!
```

2. **Processing Until Data is Exhausted**
Reading from a data source:
```javascript
let data = [10, 20, 30];
while (data.length > 0) {
  let item = data.pop(); // Remove last item
  console.log("Processing:", item);
}
```

**Output:**
```
Processing: 30
Processing: 20
Processing: 10
```

---

## **Differences Between `for` and `while` Loops**

| Feature                  | `for` Loop                                      | `while` Loop                                 |
|--------------------------|-------------------------------------------------|---------------------------------------------|
| **Use Case**             | When the number of iterations is known.         | When the number of iterations is unknown.   |
| **Initialization**       | Included in the loop statement.                 | Must be done before the loop.               |
| **Condition Check**      | At the start of each iteration.                 | At the start of each iteration.             |
| **Increment/Decrement**  | Included in the loop statement.                 | Must be handled manually inside the loop.   |

---

### **Which One to Use?**
- **Use `for` loops** when iterating over collections like arrays or when the iteration count is fixed.
- **Use `while` loops** for open-ended scenarios like waiting for user input or processing until a specific condition is met.

---

