

---

### **`do...while` Loops in JavaScript**

#### **What is a `do...while` loop?**
A `do...while` loop is similar to a `while` loop, but with one key difference:
- **A `do...while` loop always executes its code block at least once**, even if the condition is `false`. 
- This happens because the condition is checked **after** the code block is executed.

---

### **Syntax**
```javascript
do {
  // Code to execute
} while (condition);
```
- The **code block** inside the `do` section runs **before** the condition is checked.
- If the condition evaluates to `true`, the loop continues; otherwise, it stops.

---

### **Code Example 1: Basic `do...while` Loop**
```javascript
let count = 1;

do {
  console.log("Count is: " + count);
  count++; // Increment count
} while (count <= 5);
```

#### **Step-by-Step Explanation**
1. **Initialization**:
   - `let count = 1`: We initialize a variable `count` with the value `1`.
2. **First Execution**:
   - The code inside the `do` block runs immediately, printing: `"Count is: 1"`.
   - `count` is incremented to `2`.
3. **Condition Check**:
   - After executing the `do` block, the condition `count <= 5` is checked.
   - If `true`, the loop continues; otherwise, it stops.
4. **Subsequent Iterations**:
   - The loop runs until `count > 5`.
5. **Final Output**:
   - Prints:
     ```
     Count is: 1
     Count is: 2
     Count is: 3
     Count is: 4
     Count is: 5
     ```

---

### **Use Case 1: Validating User Input**
A `do...while` loop is useful when you need to ensure that a block of code runs **at least once**, regardless of the condition.

#### Example: Asking for a Positive Number
```javascript
let number;

do {
  number = parseInt(prompt("Enter a positive number:"));
} while (isNaN(number) || number <= 0);

console.log("You entered: " + number);
```

#### **Step-by-Step Explanation**
1. **Initialization**:
   - `let number;` creates a variable to store user input.
2. **`do` Block**:
   - Prompts the user to enter a positive number.
   - `parseInt()` converts the input to a number.
3. **Condition Check**:
   - The loop runs again if the user:
     - Enters something invalid (`isNaN(number)`).
     - Enters a non-positive number (`number <= 0`).
4. **Exit Loop**:
   - When the user enters a valid positive number, the loop stops.
5. **Final Output**:
   - Displays the valid input with `console.log()`.

---

### **Code Example 2: Password Authentication**
```javascript
let password;
const correctPassword = "1234";

do {
  password = prompt("Enter your password:");
  if (password !== correctPassword) {
    console.log("Incorrect password. Try again.");
  }
} while (password !== correctPassword);

console.log("Access granted!");
```

#### **Step-by-Step Explanation**
1. **Initialization**:
   - `let password;` creates a variable for user input.
   - `correctPassword` stores the correct password (`"1234"`).
2. **`do` Block**:
   - Prompts the user for the password.
   - If the input doesn’t match `correctPassword`, it shows an error message.
3. **Condition Check**:
   - The loop runs again if `password !== correctPassword`.
4. **Exit Loop**:
   - When the user enters the correct password, the loop ends.
5. **Final Output**:
   - Displays `"Access granted!"`.

---

### **Key Differences: `while` vs `do...while`**
| **Feature**         | **`while` Loop**                  | **`do...while` Loop**              |
|----------------------|-----------------------------------|------------------------------------|
| **Execution**        | May never execute if condition is false initially. | Always executes at least once.    |
| **Condition Check**  | Checked before the loop starts.  | Checked after the first execution. |

---

### **When to Use a `do...while` Loop?**
1. **Guaranteed Execution**: If you need a block of code to run at least once (e.g., prompting for input).
2. **Repeated Prompts or Tasks**: When you need to keep asking the user for valid data until they comply.

---

# **`do...while` Exercises**

### **Exercise 1: Countdown Timer**
Write a `do...while` loop that prints a countdown from 10 to 1 and then prints `"Liftoff!"`.

---

### **Exercise 2: Valid Age Input**
Write a `do...while` loop that repeatedly asks the user to enter their age. The loop should continue until the user enters a valid positive number.

---

### **Exercise 3: Sum Calculator**
Write a `do...while` loop that keeps asking the user to enter numbers. The loop should stop when the user enters `0`. At the end, display the total sum of the entered numbers.

---

### **Exercise 4: Random Guessing Game**
Write a `do...while` loop where:
1. A random number between 1 and 10 is generated using `Math.random()`.
2. The user guesses the number until they get it right.
3. After each guess, display whether the number is too high, too low, or correct.


---

# **Solutions**

### **Exercise 1: Countdown Timer**
```javascript
let count = 10;

do {
  console.log(count);
  count--;
} while (count > 0);

console.log("Liftoff!");
```

---

### **Exercise 2: Valid Age Input**
```javascript
let age;

do {
  age = parseInt(prompt("Enter your age:"));
  if (isNaN(age) || age <= 0) {
    console.log("Invalid input. Please enter a valid age.");
  }
} while (isNaN(age) || age <= 0);

console.log("Thank you! Your age is " + age);
```

---

### **Exercise 3: Sum Calculator**
```javascript
let number;
let sum = 0;

do {
  number = parseInt(prompt("Enter a number (0 to stop):"));
  if (!isNaN(number)) {
    sum += number;
  } else {
    console.log("Invalid input! Please enter a number.");
  }
} while (number !== 0);

console.log("The total sum is: " + sum);
```

---

### **Exercise 4: Random Guessing Game**
```javascript
let randomNumber = Math.floor(Math.random() * 10) + 1; // Generate random number between 1 and 10
let guess;

do {
  guess = parseInt(prompt("Guess a number between 1 and 10:"));

  if (isNaN(guess)) {
    console.log("Invalid input! Please enter a number.");
  } else if (guess < randomNumber) {
    console.log("Too low! Try again.");
  } else if (guess > randomNumber) {
    console.log("Too high! Try again.");
  } else {
    console.log("Correct! The number was " + randomNumber);
  }
} while (guess !== randomNumber);
```

---

### **How to Practice Further?**
- Change the input ranges (e.g., allow guesses between 1 and 100).
- Add limits to the number of attempts.
- Modify the exercises to include additional features like displaying hints after every 3 wrong attempts.

