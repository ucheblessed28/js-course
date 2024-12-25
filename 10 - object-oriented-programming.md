# **Object-Oriented Programming (OOP) in JavaScript**



## **1. Introduction to Objects**

In JavaScript, an **object** is a collection of related data (properties) and functionality (methods). Objects help structure code and represent real-world entities like a user, product, or car.

**Example:**
```javascript
const car = {
  brand: "Toyota",
  model: "Corolla",
  year: 2020,
  start: function() {
    console.log("The car has started.");
  }
};

console.log(car.brand);  // Output: Toyota
car.start();             // Output: The car has started.
```

**Explanation:**
- `brand`, `model`, and `year` are **properties** that store data.
- `start` is a **method** (a function inside an object) that provides behavior.

---

## **2. Creating and Accessing Object Properties**

There are two main ways to access and manipulate object properties:
- **Dot Notation**
- **Bracket Notation**

---

**Code Example:**
```javascript
const person = {
  name: "Alice",
  age: 25
};

// Accessing properties
console.log(person.name);      // Dot Notation: Output: Alice
console.log(person["age"]);    // Bracket Notation: Output: 25

// Adding new properties
person.gender = "Female";      // Dot Notation
person["occupation"] = "Developer"; // Bracket Notation

console.log(person.gender);    // Output: Female
console.log(person.occupation); // Output: Developer

// Modifying properties
person.age = 26;
console.log(person.age);       // Output: 26
```

**Key Notes:**
- Use dot notation for simplicity when property names are valid identifiers (e.g., no spaces).
- Use bracket notation when property names have spaces or special characters.

---

## **3. Methods in Objects**

A method is a function stored as a property in an object. Methods allow objects to perform actions.

---

**Code Example:**
```javascript
const calculator = {
  add: function(a, b) {
    return a + b;
  },
  subtract: function(a, b) {
    return a - b;
  }
};

console.log(calculator.add(10, 5));      // Output: 15
console.log(calculator.subtract(10, 5)); // Output: 5
```

**Explanation:**
- `add` and `subtract` are methods inside the `calculator` object.
- Methods can use arguments just like normal functions.

---

## **4. `this` Keyword**

The `this` keyword refers to the object that is calling the method. It allows methods to access or modify the object’s properties.

---

**Code Example:**
```javascript
const user = {
  name: "Alice",
  age: 25,
  greet: function() {
    return `Hi, my name is ${this.name} and I am ${this.age} years old.`;
  }
};

console.log(user.greet());
// Output: Hi, my name is Alice and I am 25 years old.
```

**Explanation:**
- `this.name` and `this.age` refer to the `name` and `age` properties of the `user` object.
- Without `this`, the method wouldn’t know which object’s properties to access.

---

## **5. Constructor Functions**

A constructor function is a template for creating multiple objects with the same structure. They allow you to initialize an object’s properties.

---

**Code Example:**
```javascript
function Car(brand, model, year) {
  this.brand = brand;
  this.model = model;
  this.year = year;
}

const car1 = new Car("Toyota", "Corolla", 2020);
const car2 = new Car("Honda", "Civic", 2021);

console.log(car1.brand); // Output: Toyota
console.log(car2.year);  // Output: 2021
```

**Explanation:**
- `Car` is a constructor function.
- `new` creates a new object and assigns the properties (`brand`, `model`, `year`) using `this`.

---

## **6. Classes and Inheritance**

**Classes** are a modern way to create objects in JavaScript, introduced in ES6. They are syntactic sugar over constructor functions.

---

**Code Example:**
```javascript
class Animal {
  constructor(name, sound) {
    this.name = name;
    this.sound = sound;
  }

  makeSound() {
    console.log(`${this.name} says ${this.sound}`);
  }
}

const dog = new Animal("Dog", "Woof");
dog.makeSound(); // Output: Dog says Woof
```

**Inheritance:**
Classes can inherit properties and methods from other classes using the `extends` keyword.

---

**Code Example:**
```javascript
class Animal {
  constructor(name, sound) {
    this.name = name;
    this.sound = sound;
  }

  makeSound() {
    console.log(`${this.name} says ${this.sound}`);
  }
}

class Bird extends Animal {
  fly() {
    console.log(`${this.name} is flying.`);
  }
}

const parrot = new Bird("Parrot", "Squawk");
parrot.makeSound(); // Output: Parrot says Squawk
parrot.fly();       // Output: Parrot is flying.
```

**Explanation:**
- `Bird` extends `Animal`, inheriting its properties and methods.
- `parrot` can use both `makeSound` and `fly`.

---

## **Practice Exercises**
### **1. Create an Object**
Create an object named `student` with properties: `name`, `age`, and `grades` (an array). Add a method `getAverageGrade` that calculates the average of the grades.

---

### **2. Modify Properties**
Given the object below, use both dot notation and bracket notation to:
- Add a new property `color: "Red"`.
- Change the `year` to 2023.

```javascript
const car = {
  brand: "Ford",
  model: "Focus",
  year: 2020
};
```

---

### **3. Create a Class**
Create a class `Person` with properties `name` and `age`. Add a method `introduce` that prints `"Hi, I'm [name] and I'm [age] years old."`.

---

# Solutions:

### **Exercise 1: Create an Object**

#### **Problem**
Create an object named `student` with properties: `name`, `age`, and `grades` (an array). Add a method `getAverageGrade` that calculates the average of the grades.

---

#### **Solution**
```javascript
const student = {
  name: "John",
  age: 21,
  grades: [85, 90, 78],

  getAverageGrade: function() {
    let total = this.grades.reduce((sum, grade) => sum + grade, 0);
    return total / this.grades.length;
  }
};

console.log(`Name: ${student.name}`); // Output: Name: John
console.log(`Average Grade: ${student.getAverageGrade()}`); // Output: Average Grade: 84.33
```

#### **Explanation**
1. `name`, `age`, and `grades` are the properties of the `student` object.
2. `getAverageGrade` is a method that:
   - Uses `reduce` to sum up all the grades in the `grades` array.
   - Divides the total by the number of grades to calculate the average.
3. `this.grades` ensures the method accesses the grades property of the object it belongs to.

---

### **Exercise 2: Modify Properties**

#### **Problem**
Use dot notation and bracket notation to:
1. Add a new property `color: "Red"`.
2. Change the `year` to 2023.

```javascript
const car = {
  brand: "Ford",
  model: "Focus",
  year: 2020
};
```

---

#### **Solution**
```javascript
// Add a new property
car.color = "Red";            // Dot notation
car["color"] = "Red";         // Bracket notation (optional for demonstration)

// Modify an existing property
car.year = 2023;              // Dot notation
car["year"] = 2023;           // Bracket notation

console.log(car);
// Output:
// {
//   brand: "Ford",
//   model: "Focus",
//   year: 2023,
//   color: "Red"
// }
```

#### **Explanation**
1. **Dot Notation:** The simplest and most readable way to access or modify a property.
2. **Bracket Notation:** Useful if the property name is dynamic or contains special characters.

---

### **Exercise 3: Create a Class**

#### **Problem**
Create a class `Person` with properties `name` and `age`. Add a method `introduce` that prints `"Hi, I'm [name] and I'm [age] years old."`.

---

#### **Solution**
```javascript
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  introduce() {
    console.log(`Hi, I'm ${this.name} and I'm ${this.age} years old.`);
  }
}

const person1 = new Person("Alice", 30);
person1.introduce(); // Output: Hi, I'm Alice and I'm 30 years old.
```

#### **Explanation**
1. `constructor`: A special method that initializes the `name` and `age` properties when creating an object from the class.
2. `introduce`: A method that uses `this.name` and `this.age` to access the properties of the current object.

---