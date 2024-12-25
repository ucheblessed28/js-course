# **Advanced Function Concepts in JavaScript**

**Advanced Function Concepts**,  include:
1. **Arrow Functions**
2. **Default Parameters**
3. **Function Expressions**
4. **Rest Parameters**
5. **Higher-Order Functions**

---


### **1. Arrow Functions**
Arrow functions are a shorter way to write functions introduced in ES6. They are ideal for concise code and are especially useful for one-liners.

---

#### **Syntax**
```javascript
// Regular function
function add(a, b) {
  return a + b;
}

// Arrow function
const add = (a, b) => a + b;
```

**Key Features:**
1. No `function` keyword is needed.
2. If the function body has only one expression, you can omit the `return` keyword and the curly braces.
3. For zero or more than one parameter, parentheses are required.  
   Example:
   ```javascript
   const greet = () => "Hello!";
   const square = num => num * num;
   ```

---

#### **Code Example: Arrow Function**
```javascript
// Regular function
function double(num) {
  return num * 2;
}

// Arrow function
const double = num => num * 2;

console.log(double(5)); // Output: 10
```

---

### **2. Default Parameters**
Default parameters allow you to set default values for function arguments. If no value is passed, the default value is used.

---

#### **Syntax**
```javascript
function greet(name = "Guest") {
  return `Hello, ${name}!`;
}

console.log(greet());        // Output: Hello, Guest!
console.log(greet("Alice")); // Output: Hello, Alice!
```

---

#### **Code Example: Default Parameters**
```javascript
const calculateArea = (width = 1, height = 1) => width * height;

console.log(calculateArea());         // Output: 1 (default values used)
console.log(calculateArea(5));        // Output: 5 (width = 5, height = default 1)
console.log(calculateArea(5, 10));    // Output: 50 (both values provided)
```

---

### **3. Function Expressions**
A **function expression** allows you to assign a function to a variable. It can be anonymous or named.

---

#### **Syntax**
```javascript
// Function Expression
const greet = function(name) {
  return `Hello, ${name}!`;
};

// Anonymous Function Expression
const square = function(num) {
  return num * num;
};

console.log(greet("Alice"));  // Output: Hello, Alice!
console.log(square(5));       // Output: 25
```

---

### **4. Rest Parameters**
Rest parameters (`...args`) allow a function to accept an arbitrary number of arguments. These arguments are stored in an array.

---

#### **Syntax**
```javascript
function sum(...numbers) {
  return numbers.reduce((acc, num) => acc + num, 0);
}

console.log(sum(1, 2, 3));      // Output: 6
console.log(sum(4, 5, 6, 7));   // Output: 22
```

---

#### **Code Example: Rest Parameters**
```javascript
const logNames = (...names) => {
  console.log("Names:", names.join(", "));
};

logNames("Alice", "Bob", "Charlie"); // Output: Names: Alice, Bob, Charlie
```

---

### **5. Higher-Order Functions**
A **higher-order function** is a function that takes another function as an argument or returns a function.

---

### **Examples**
1. **Using Callback Functions**
   ```javascript
   const applyOperation = (a, b, operation) => operation(a, b);

   const add = (x, y) => x + y;
   const multiply = (x, y) => x * y;

   console.log(applyOperation(3, 5, add));      // Output: 8
   console.log(applyOperation(3, 5, multiply)); // Output: 15
   ```

2. **Array Methods (like `map`, `filter`, `reduce`)**
   ```javascript
   const numbers = [1, 2, 3, 4, 5];

   const doubled = numbers.map(num => num * 2);  // [2, 4, 6, 8, 10]
   const even = numbers.filter(num => num % 2 === 0);  // [2, 4]
   const total = numbers.reduce((sum, num) => sum + num, 0);  // 15

   console.log(doubled);
   console.log(even);
   console.log(total);
   ```

---

## **Practice Exercises for Advanced Functions**

### **Exercise 1: Arrow Functions**
Write an arrow function named `multiply` that takes two numbers as parameters and returns their product.

**Example:**
```javascript
multiply(3, 4); // Output: 12
multiply(7, 8); // Output: 56
```

---

### **Exercise 2: Default Parameters**
Write a function `greetUser` that takes two parameters: `name` and `greeting`.  
If no greeting is provided, it should default to `"Hello"`.

**Example:**
```javascript
greetUser("Alice");          // Output: "Hello, Alice!"
greetUser("Bob", "Hi");      // Output: "Hi, Bob!"
```

---

### **Exercise 3: Function Expressions**
Convert the following function to a function expression:
```javascript
function findSquare(num) {
  return num * num;
}
```

**Expected Output:**
```javascript
findSquare(5); // Output: 25
findSquare(9); // Output: 81
```

---

### **Exercise 4: Rest Parameters**
Write a function named `sumAll` that accepts any number of arguments and returns their sum.

**Example:**
```javascript
sumAll(1, 2, 3);       // Output: 6
sumAll(10, 20, 30, 40); // Output: 100
```

---

### **Exercise 5: Higher-Order Functions**
1. Write a higher-order function named `applyMathOperation` that takes two numbers and a callback function to apply an operation on those numbers.

   **Example:**
   ```javascript
   applyMathOperation(5, 3, (a, b) => a + b); // Output: 8
   applyMathOperation(5, 3, (a, b) => a - b); // Output: 2
   ```

2. Use `map` to create a new array from the array `[1, 2, 3, 4, 5]`, where each element is squared.

   **Expected Output:**
   ```javascript
   [1, 4, 9, 16, 25]
   ```

---

## **Solutions**

### **Solution 1: Arrow Functions**
```javascript
const multiply = (a, b) => a * b;

console.log(multiply(3, 4)); // Output: 12
console.log(multiply(7, 8)); // Output: 56
```

---

### **Solution 2: Default Parameters**
```javascript
const greetUser = (name, greeting = "Hello") => `${greeting}, ${name}!`;

console.log(greetUser("Alice"));          // Output: Hello, Alice!
console.log(greetUser("Bob", "Hi"));      // Output: Hi, Bob!
```

---

### **Solution 3: Function Expressions**
```javascript
const findSquare = function(num) {
  return num * num;
};

console.log(findSquare(5)); // Output: 25
console.log(findSquare(9)); // Output: 81
```

---

### **Solution 4: Rest Parameters**
```javascript
const sumAll = (...numbers) => numbers.reduce((sum, num) => sum + num, 0);

console.log(sumAll(1, 2, 3));        // Output: 6
console.log(sumAll(10, 20, 30, 40)); // Output: 100
```

---

### **Solution 5: Higher-Order Functions**
1. **applyMathOperation**
   ```javascript
   const applyMathOperation = (a, b, operation) => operation(a, b);

   console.log(applyMathOperation(5, 3, (a, b) => a + b)); // Output: 8
   console.log(applyMathOperation(5, 3, (a, b) => a - b)); // Output: 2
   ```

2. **Map**
   ```javascript
   const numbers = [1, 2, 3, 4, 5];
   const squared = numbers.map(num => num * num);

   console.log(squared); // Output: [1, 4, 9, 16, 25]
   ```

---

### **What’s Next?**

**Object-Oriented Programming (OOP)** in JavaScript. Here’s the breakdown of topics:

1. **Introduction to Objects**
2. **Creating and Accessing Object Properties**
3. **Methods in Objects**
4. **`this` Keyword**
5. **Constructor Functions**
6. **Classes and Inheritance**