Let's dive into **ES6 features** first, as they bring a lot of improvements to JavaScript.

### **Week 7-8: Advanced Topics - ES6 Features**

#### 1. **Let and Const**
- `let` and `const` were introduced in ES6 to replace `var`. They provide block-level scope and are much more predictable than `var`.

- `let`: Allows variable reassignment but has block-level scoping.
- `const`: Cannot be reassigned after declaration. It also has block-level scope.

**Example:**
```javascript
let a = 10;   // a can be reassigned
a = 20;       // Reassigning is allowed

const b = 30; // b cannot be reassigned
// b = 40; // This would throw an error
```

#### 2. **Arrow Functions**
- Arrow functions provide a shorter syntax for writing functions. They also don’t have their own `this` context, which is useful for maintaining the correct `this` reference when passing functions around.

**Example:**
```javascript
// Regular function
function sum(a, b) {
  return a + b;
}

// Arrow function
const sumArrow = (a, b) => a + b;

console.log(sum(3, 4)); // Output: 7
console.log(sumArrow(3, 4)); // Output: 7
```

- Arrow functions are especially useful in callbacks because they maintain the scope of `this`.

#### 3. **Template Literals**
- Template literals allow embedded expressions and multi-line strings, which makes string interpolation easier and more readable.

**Example:**
```javascript
const name = "Alice";
const age = 25;

// Without template literals
const greeting = "Hello, " + name + ". You are " + age + " years old.";

// With template literals
const greetingTemplate = `Hello, ${name}. You are ${age} years old.`;

console.log(greeting);
console.log(greetingTemplate);
```

#### 4. **Destructuring**
- Destructuring allows you to extract values from arrays or objects and assign them to variables.

**Array Destructuring Example:**
```javascript
const colors = ["red", "green", "blue"];
const [first, second] = colors;

console.log(first); // Output: red
console.log(second); // Output: green
```

**Object Destructuring Example:**
```javascript
const user = { name: "Alice", age: 25 };
const { name, age } = user;

console.log(name); // Output: Alice
console.log(age); // Output: 25
```

#### 5. **Default Parameters**
- ES6 allows you to set default values for function parameters if no value is passed.

**Example:**
```javascript
function greet(name = "Guest") {
  console.log(`Hello, ${name}!`);
}

greet("Alice"); // Output: Hello, Alice!
greet();         // Output: Hello, Guest!
```

#### 6. **Rest and Spread Operators**
- **Rest operator** collects arguments into an array.
- **Spread operator** is used to expand arrays or objects.

**Rest Operator Example:**
```javascript
function sum(...numbers) {
  return numbers.reduce((acc, curr) => acc + curr, 0);
}

console.log(sum(1, 2, 3, 4)); // Output: 10
```

**Spread Operator Example:**
```javascript
const arr1 = [1, 2, 3];
const arr2 = [...arr1, 4, 5];

console.log(arr2); // Output: [1, 2, 3, 4, 5]
```

#### 7. **Classes and Inheritance**
- ES6 introduces a `class` syntax for creating objects and handling inheritance.

**Example:**
```javascript
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
  }
}

class Employee extends Person {
  constructor(name, age, position) {
    super(name, age);
    this.position = position;
  }

  work() {
    console.log(`${this.name} is working as a ${this.position}.`);
  }
}

const emp = new Employee("Alice", 30, "Developer");
emp.greet(); // Output: Hello, my name is Alice and I am 30 years old.
emp.work();  // Output: Alice is working as a Developer.
```

#### 8. **Modules**
- ES6 introduced modules, allowing you to export and import functions, objects, or variables between different files.

**Example:**
```javascript
// file1.js
export const greet = (name) => {
  return `Hello, ${name}!`;
};

// file2.js
import { greet } from './file1.js';

console.log(greet("Alice")); // Output: Hello, Alice!
```

---

### **Next, let's move to Asynchronous JavaScript**

#### 1. **Callbacks**
- A **callback** is a function passed as an argument to another function, which is executed later.

**Example:**
```javascript
function greet(name, callback) {
  setTimeout(() => {
    console.log(`Hello, ${name}!`);
    callback();
  }, 1000);
}

greet("Alice", () => {
  console.log("Callback executed!");
});
```

#### 2. **Promises**
- A **promise** represents the eventual completion (or failure) of an asynchronous operation. It allows chaining multiple operations with `.then()` and handling errors with `.catch()`.

**Example:**
```javascript
let promise = new Promise((resolve, reject) => {
  let success = true;
  if (success) {
    resolve("Operation successful");
  } else {
    reject("Operation failed");
  }
});

promise
  .then((result) => console.log(result)) // Output: Operation successful
  .catch((error) => console.log(error));  // Output: Operation failed
```

#### 3. **Async/Await**
- **Async** functions always return a promise. The **await** keyword pauses the execution of an async function until the promise is resolved or rejected.

**Example:**
```javascript
async function fetchData() {
  let response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
  let data = await response.json();
  console.log(data);
}

fetchData(); // Output: Post data from the API
```

**Explanation**:
- `async`: Defines an asynchronous function.
- `await`: Waits for a promise to resolve before continuing with the code execution.

---

