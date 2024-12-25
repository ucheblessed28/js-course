# **Functions in JavaScript**

### **What is a Function?**
A function is a block of code designed to perform a specific task. You can **define a function once** and then **reuse it multiple times**.

---

### **Benefits of Using Functions**
1. **Code Reusability**: Write once, use anywhere.
2. **Modularity**: Break your code into smaller, manageable parts.
3. **Improved Readability**: Functions make the code easier to read and maintain.
4. **DRY Principle**: Avoid repetition by using functions (Don’t Repeat Yourself).

---

### **Defining a Function**
The general syntax for defining a function is:

```javascript
function functionName(parameters) {
  // Code to execute
  return result; // Optional
}
```

#### **Key Parts**
1. `function`: Keyword to define a function.
2. `functionName`: Name of the function (e.g., `greetUser`).
3. `parameters`: Input values that the function accepts (optional).
4. `return`: Sends the result back to the caller (optional).

---

### **Code Example 1: A Simple Function**
```javascript
function greet() {
  console.log("Hello, welcome to the JavaScript course!");
}

// Calling the function
greet();
```

### **Explanation**
1. `function greet()`:
   - Declares a function named `greet`.
   - It takes no parameters.
2. `console.log()`:
   - Prints a message when the function is called.
3. `greet()`:
   - Calls the function, triggering the code inside.

---

### **Parameters and Arguments**
Functions can accept input values (parameters) when called. These inputs are processed inside the function.

### **Code Example 2: Function with Parameters**
```javascript
function greetUser(name) {
  console.log("Hello, " + name + "! Welcome to JavaScript.");
}

// Calling the function
greetUser("Alice");
greetUser("Bob");
```

### **Explanation**
1. **Parameter**:
   - `name` is a placeholder for the value passed to the function.
2. **Arguments**:
   - `"Alice"` and `"Bob"` are arguments passed when the function is called.
3. **Result**:
   - Outputs:
     ```
     Hello, Alice! Welcome to JavaScript.
     Hello, Bob! Welcome to JavaScript.
     ```

---

### **Returning a Value**
A function can return a value using the `return` statement.

#### **Code Example 3: Function with a Return Value**
```javascript
function addNumbers(a, b) {
  return a + b; // Returns the sum of a and b
}

let sum = addNumbers(5, 7);
console.log("The sum is: " + sum);
```

### **Explanation**
1. **Parameters**:
   - `a` and `b` are inputs.
2. **Return Statement**:
   - `return a + b` sends the result (`12`) back to where the function was called.
3. **Output**:
   - `"The sum is: 12"`.

---

### **Use Cases of Functions**
1. **Reusable Tasks**:
   - Example: Converting temperatures, calculating discounts.
2. **Organizing Logic**:
   - Example: Breaking complex operations into smaller steps.
3. **Event Handling**:
   - Example: Responding to user actions like button clicks.

---

### **Functions**
Functions let you write reusable code. They take inputs (parameters), perform actions, and can return outputs.

### **Defining a Function**
```javascript
function greet(name) {
  console.log("Hello, " + name + "!");
}
```
- **`greet`** is the function name.
- **`name`** is a parameter (input).

### **Calling a Function**
```javascript
greet("Alice"); // Outputs: Hello, Alice!
greet("Bob");   // Outputs: Hello, Bob!
```

---

### **Returning Values**
Functions can return a result for further use.
```javascript
function add(a, b) {
  return a + b; // Returns the sum of a and b
}

let result = add(3, 7); // result is 10
console.log(result);
```

---

### **Arrow Functions**
A shorter syntax for functions.
```javascript
const multiply = (a, b) => a * b;

console.log(multiply(2, 3)); // Outputs: 6
```

---

### **Combining Loops and Functions**
Let’s build something fun! 🎉

#### **Example: Print Multiplication Table**
```javascript
function printTable(number) {
  for (let i = 1; i <= 10; i++) {
    console.log(number + " x " + i + " = " + number * i);
  }
}

printTable(5); // Outputs the multiplication table of 5
```

---

### **Practice Exercises**
1. **Counting Numbers**: Write a `for` loop that prints numbers from 1 to 20.
2. **Even or Odd**: Write a `function` that checks if a number is even or odd.
   - Input: A number.
   - Output: "Even" or "Odd."
   - **Hint: Use the modulus operator `%`.**
3. **Sum of Numbers**: Write a function that calculates the sum of all numbers from 1 to a given number `n`.
   - **Example:**
     - Input: `5`.
     - Output: `1 + 2 + 3 + 4 + 5 = 15`.

---

### **Challenge: FizzBuzz Game**
Print numbers from 1 to 30, but:
- Print "Fizz" for multiples of 3.
- Print "Buzz" for multiples of 5.
- Print "FizzBuzz" for multiples of both 3 and 5.

**Hint: Use the `if-else` statements with modulus (`%`).**

---

## Solution

```javascript
// FizzBuzz game
for (let num = 1; num <= 30; num++) {
    if (num % 3 === 0 && num % 5 === 0) {
        console.log("FizzBuzz");
    } else if (num % 3 === 0) {
        console.log("Fizz");
    } else if (num % 5 === 0) {
        console.log("Buzz");
    } else {
        console.log(num);
    }
}
```

### Explanation:
1. **`num % 3 === 0 && num % 5 === 0`**:
   - Checks if `num` is divisible by both 3 and 5. Prints `"FizzBuzz"`.
2. **`num % 3 === 0`**:
   - Checks if `num` is divisible by 3 only. Prints `"Fizz"`.
3. **`num % 5 === 0`**:
   - Checks if `num` is divisible by 5 only. Prints `"Buzz"`.
4. **`else`**:
   - For all other numbers, prints the number itself.

Run this code in your browser console or a JavaScript environment to see the output!!!

---

## **Practice Exercises for Functions**

### **Exercise 1: Greeting Function**
Write a function named `sayHello` that takes a name as a parameter and returns a greeting message.  
For example, calling `sayHello("Alice")` should return `"Hello, Alice!"`.

---

### **Exercise 2: Area of a Rectangle**
Write a function named `calculateArea` that takes the width and height of a rectangle as parameters and returns its area.

**Example:**
```javascript
calculateArea(5, 10); // Should return 50
```

---

### **Exercise 3: Check Even or Odd**
Write a function named `isEven` that takes a number as a parameter and returns `true` if the number is even, otherwise `false`.

**Example:**
```javascript
isEven(4); // Should return true
isEven(7); // Should return false
```

---

### **Exercise 4: Convert Celsius to Fahrenheit**
Write a function named `toFahrenheit` that takes a temperature in Celsius as a parameter and returns the temperature converted to Fahrenheit.  
Use the formula: `F = (C × 9/5) + 32`.

**Example:**
```javascript
toFahrenheit(0);  // Should return 32
toFahrenheit(100); // Should return 212
```

---

### **Exercise 5: Find Maximum**
Write a function named `findMax` that takes three numbers as parameters and returns the largest number.

**Example:**
```javascript
findMax(5, 12, 7); // Should return 12
```

---


## **Solutions**

#### **Solution 1: Greeting Function**
```javascript
function sayHello(name) {
  return "Hello, " + name + "!";
}

console.log(sayHello("Alice")); // Output: "Hello, Alice!"
console.log(sayHello("Bob"));   // Output: "Hello, Bob!"
```

---

#### **Solution 2: Area of a Rectangle**
```javascript
function calculateArea(width, height) {
  return width * height;
}

console.log(calculateArea(5, 10)); // Output: 50
console.log(calculateArea(7, 3));  // Output: 21
```

---

#### **Solution 3: Check Even or Odd**
```javascript
function isEven(number) {
  return number % 2 === 0; // Returns true if divisible by 2
}

console.log(isEven(4)); // Output: true
console.log(isEven(7)); // Output: false
```

---

#### **Solution 4: Convert Celsius to Fahrenheit**
```javascript
function toFahrenheit(celsius) {
  return (celsius * 9/5) + 32;
}

console.log(toFahrenheit(0));    // Output: 32
console.log(toFahrenheit(100));  // Output: 212
```

---

#### **Solution 5: Find Maximum**
```javascript
function findMax(num1, num2, num3) {
  return Math.max(num1, num2, num3); // Returns the largest number
}

console.log(findMax(5, 12, 7)); // Output: 12
console.log(findMax(2, 1, 10)); // Output: 10
```

---