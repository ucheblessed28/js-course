### **Advanced OOP Concepts in JavaScript**

---

#### **1. Encapsulation**

Encapsulation is the concept of bundling data (properties) and methods that operate on the data into a single unit (class or object) and restricting access to some parts of the object.

In JavaScript, we use **private fields** (denoted with `#`) to hide certain properties or methods, making them accessible only within the class.

---

**Example:**
```javascript
class BankAccount {
  #balance; // Private property

  constructor(accountHolder, initialBalance) {
    this.accountHolder = accountHolder;
    this.#balance = initialBalance;
  }

  deposit(amount) {
    if (amount > 0) {
      this.#balance += amount;
      console.log(`Deposited: $${amount}`);
    } else {
      console.log("Deposit amount must be positive.");
    }
  }

  getBalance() {
    return `Current balance: $${this.#balance}`;
  }
}

const account = new BankAccount("Alice", 1000);
account.deposit(500);
console.log(account.getBalance()); // Output: Current balance: $1500
console.log(account.#balance);    // Error: Private field '#balance' must be declared
```

**Explanation:**
1. The `#balance` field is private and cannot be accessed directly outside the class.
2. `deposit` and `getBalance` methods act as controlled ways to interact with `#balance`.
3. Encapsulation ensures sensitive data remains secure.

---

#### **2. Polymorphism**

Polymorphism allows methods in different classes to have the same name but behave differently. This is typically achieved through **method overriding**.

---

**Example:**
```javascript
class Animal {
  speak() {
    console.log("The animal makes a sound.");
  }
}

class Dog extends Animal {
  speak() {
    console.log("The dog barks.");
  }
}

class Cat extends Animal {
  speak() {
    console.log("The cat meows.");
  }
}

const animals = [new Animal(), new Dog(), new Cat()];
animals.forEach((animal) => animal.speak());
// Output:
// The animal makes a sound.
// The dog barks.
// The cat meows.
```

**Explanation:**
1. The `speak` method is overridden in the `Dog` and `Cat` classes.
2. When `speak` is called on an instance, the appropriate version of the method is executed based on the object's class.

---

#### **3. Static Methods**

Static methods belong to the class itself rather than to any object instance. They are used for utility functions or logic that doesn't depend on individual instances.

---

**Example:**
```javascript
class MathUtils {
  static add(a, b) {
    return a + b;
  }

  static subtract(a, b) {
    return a - b;
  }
}

console.log(MathUtils.add(10, 5));       // Output: 15
console.log(MathUtils.subtract(10, 5)); // Output: 5

const math = new MathUtils();
console.log(math.add(5, 3)); // Error: math.add is not a function
```

**Explanation:**
1. `add` and `subtract` are static methods, called directly on the `MathUtils` class.
2. They can't be accessed through instances of the class.

---

#### **4. Inheritance & Method Overriding**

Inheritance allows one class to extend another, inheriting its properties and methods. Overriding happens when a subclass provides a new implementation for an inherited method.

---

**Example:**
```javascript
class Employee {
  constructor(name, position) {
    this.name = name;
    this.position = position;
  }

  work() {
    console.log(`${this.name} is working as a ${this.position}.`);
  }
}

class Manager extends Employee {
  constructor(name, position, teamSize) {
    super(name, position); // Call the parent constructor
    this.teamSize = teamSize;
  }

  work() {
    super.work(); // Call the parent method
    console.log(`${this.name} also manages a team of ${this.teamSize}.`);
  }
}

const employee = new Employee("John", "Developer");
employee.work(); 
// Output: John is working as a Developer.

const manager = new Manager("Alice", "Manager", 10);
manager.work(); 
// Output:
// Alice is working as a Manager.
// Alice also manages a team of 10.
```

**Explanation:**
1. The `Manager` class extends `Employee` and adds a `teamSize` property.
2. The `work` method in `Manager` overrides the `work` method in `Employee` but still calls the parent method using `super.work()`.

---

### **Practice Exercises**

#### **1. Encapsulation Exercise**
Create a class `UserAccount` with a private property `password`. Add methods to:
- Set a new password.
- Validate the password during login.

---

#### **2. Polymorphism Exercise**
Create a base class `Shape` with a method `area()`. Create subclasses `Rectangle` and `Circle` that override `area()` to compute the area of their respective shapes.

---

#### **3. Static Methods Exercise**
Create a class `TemperatureConverter` with static methods to:
- Convert Celsius to Fahrenheit.
- Convert Fahrenheit to Celsius.

---

#### **4. Inheritance Exercise**
Create a base class `Vehicle` with properties `brand` and `speed`, and a method `move()`. Extend it with a `Car` class that adds a `fuel` property and overrides the `move` method.

---
<br><br>

# **Solutions to the Exercises**



### **1. Encapsulation Exercise**

**Problem**  
Create a class `UserAccount` with a private property `password`. Add methods to:  
- Set a new password.  
- Validate the password during login.

---

**Solution**
```javascript
class UserAccount {
  #password; // Private property

  constructor(username, password) {
    this.username = username;
    this.#password = password;
  }

  setPassword(newPassword) {
    if (newPassword.length >= 8) {
      this.#password = newPassword;
      console.log("Password updated successfully.");
    } else {
      console.log("Password must be at least 8 characters long.");
    }
  }

  login(inputPassword) {
    if (inputPassword === this.#password) {
      console.log("Login successful!");
    } else {
      console.log("Incorrect password. Please try again.");
    }
  }
}

const user = new UserAccount("JohnDoe", "mypassword123");
user.login("mypassword123"); // Output: Login successful!
user.setPassword("newpass"); // Output: Password must be at least 8 characters long.
user.setPassword("newpassword123"); // Output: Password updated successfully.
user.login("newpassword123"); // Output: Login successful!
```

---

### **2. Polymorphism Exercise**

**Problem**  
Create a base class `Shape` with a method `area()`. Create subclasses `Rectangle` and `Circle` that override `area()` to compute the area of their respective shapes.

---

**Solution**
```javascript
class Shape {
  area() {
    console.log("Area formula not defined for generic shape.");
  }
}

class Rectangle extends Shape {
  constructor(width, height) {
    super();
    this.width = width;
    this.height = height;
  }

  area() {
    return this.width * this.height;
  }
}

class Circle extends Shape {
  constructor(radius) {
    super();
    this.radius = radius;
  }

  area() {
    return Math.PI * this.radius ** 2;
  }
}

const rectangle = new Rectangle(5, 10);
console.log(`Rectangle area: ${rectangle.area()}`); // Output: Rectangle area: 50

const circle = new Circle(7);
console.log(`Circle area: ${circle.area().toFixed(2)}`); // Output: Circle area: 153.94
```

---

### **3. Static Methods Exercise**

**Problem**  
Create a class `TemperatureConverter` with static methods to:  
- Convert Celsius to Fahrenheit.  
- Convert Fahrenheit to Celsius.

---

**Solution**
```javascript
class TemperatureConverter {
  static celsiusToFahrenheit(celsius) {
    return (celsius * 9) / 5 + 32;
  }

  static fahrenheitToCelsius(fahrenheit) {
    return ((fahrenheit - 32) * 5) / 9;
  }
}

console.log(TemperatureConverter.celsiusToFahrenheit(25)); // Output: 77
console.log(TemperatureConverter.fahrenheitToCelsius(77)); // Output: 25
```

---

### **4. Inheritance Exercise**

**Problem**  
Create a base class `Vehicle` with properties `brand` and `speed`, and a method `move()`. Extend it with a `Car` class that adds a `fuel` property and overrides the `move` method.

---

**Solution**
```javascript
class Vehicle {
  constructor(brand, speed) {
    this.brand = brand;
    this.speed = speed;
  }

  move() {
    console.log(`${this.brand} is moving at ${this.speed} km/h.`);
  }
}

class Car extends Vehicle {
  constructor(brand, speed, fuel) {
    super(brand, speed); // Call the parent constructor
    this.fuel = fuel;
  }

  move() {
    super.move(); // Call the parent method
    console.log(`It is running on ${this.fuel}.`);
  }
}

const vehicle = new Vehicle("Generic Vehicle", 50);
vehicle.move(); 
// Output: Generic Vehicle is moving at 50 km/h.

const car = new Car("Toyota", 120, "petrol");
car.move(); 
// Output:
// Toyota is moving at 120 km/h.
// It is running on petrol.
```

---
<br><br>

## **Diving Deeper into Abstraction**

**Abstraction** is the process of hiding implementation details and showing only the essential features of an object. In JavaScript, it is achieved through classes, methods, and sometimes with interfaces in TypeScript.

---

**Example:**
```javascript
class Payment {
  processPayment(amount) {
    console.log(`Processing payment of $${amount}.`);
  }
}

class CreditCardPayment extends Payment {
  processPayment(amount) {
    console.log(`Processing credit card payment of $${amount}.`);
  }
}

class PayPalPayment extends Payment {
  processPayment(amount) {
    console.log(`Processing PayPal payment of $${amount}.`);
  }
}

function process(paymentMethod, amount) {
  paymentMethod.processPayment(amount);
}

const creditCard = new CreditCardPayment();
const paypal = new PayPalPayment();

process(creditCard, 100); // Output: Processing credit card payment of $100.
process(paypal, 50); // Output: Processing PayPal payment of $50.
```

**Explanation:**
1. **Abstract Concept**: `Payment` defines a general process.
2. Specific implementations (`CreditCardPayment` and `PayPalPayment`) override `processPayment`.

---

## **Understanding Prototypes**

Every object in JavaScript has an internal link to another object, called its **prototype**. Prototypes enable inheritance and the sharing of methods across objects.

---

#### **Prototype Example**
```javascript
function Person(name) {
  this.name = name;
}

Person.prototype.greet = function() {
  console.log(`Hello, my name is ${this.name}.`);
};

const alice = new Person("Alice");
alice.greet(); // Output: Hello, my name is Alice.

console.log(alice.__proto__ === Person.prototype); // Output: true
```

**Explanation:**
1. `Person.prototype.greet` is shared by all instances of `Person`.
2. `alice` accesses the `greet` method through its prototype chain.

---

### **Practice Exercises on Abstraction and Prototypes**

---

#### **1. Abstraction Exercise**
Create an abstract base class `Appliance` with a method `turnOn()`. Subclasses `WashingMachine` and `Refrigerator` should inherit and implement their own versions of `turnOn()`.  
Also, ensure the base class prevents direct instantiation.

---

#### **2. Prototype Exercise**
Using the prototype pattern, create a `Book` constructor function with properties `title` and `author`. Add a method `getDetails()` to the prototype that returns the book's title and author.

---

#### **3. Real-Life Prototype**
Simulate an object creation process where multiple users share the same prototype for a method `greet()` that returns `"Hello, my name is [name]"`.

---

#### **4. Combining Abstraction and Prototypes**
Create a `Vehicle` constructor function with a prototype method `startEngine()`. Then create subclasses `Bike` and `Truck` using prototype inheritance.  
Override the `startEngine()` method for each subclass with custom messages.

---

### **Solutions**

---

#### **1. Abstraction Exercise**
```javascript
class Appliance {
  constructor() {
    if (new.target === Appliance) {
      throw new Error("Cannot instantiate abstract class Appliance directly.");
    }
  }

  turnOn() {
    throw new Error("turnOn method must be implemented in subclass.");
  }
}

class WashingMachine extends Appliance {
  turnOn() {
    console.log("Washing Machine is now running.");
  }
}

class Refrigerator extends Appliance {
  turnOn() {
    console.log("Refrigerator is now cooling.");
  }
}

// Testing
const washer = new WashingMachine();
washer.turnOn(); // Output: Washing Machine is now running.

const fridge = new Refrigerator();
fridge.turnOn(); // Output: Refrigerator is now cooling.

// Uncommenting this will throw an error
// const genericAppliance = new Appliance();
```

---

#### **2. Prototype Exercise**
```javascript
function Book(title, author) {
  this.title = title;
  this.author = author;
}

Book.prototype.getDetails = function () {
  return `${this.title} by ${this.author}`;
};

const book1 = new Book("1984", "George Orwell");
const book2 = new Book("To Kill a Mockingbird", "Harper Lee");

console.log(book1.getDetails()); // Output: 1984 by George Orwell
console.log(book2.getDetails()); // Output: To Kill a Mockingbird by Harper Lee
```

---

#### **3. Real-Life Prototype**
```javascript
function User(name) {
  this.name = name;
}

User.prototype.greet = function () {
  return `Hello, my name is ${this.name}`;
};

const user1 = new User("Alice");
const user2 = new User("Bob");

console.log(user1.greet()); // Output: Hello, my name is Alice
console.log(user2.greet()); // Output: Hello, my name is Bob
```

---

#### **4. Combining Abstraction and Prototypes**
```javascript
function Vehicle(type) {
  this.type = type;
}

Vehicle.prototype.startEngine = function () {
  console.log(`Starting the engine of a generic ${this.type}.`);
};

function Bike(type, brand) {
  Vehicle.call(this, type); // Call Vehicle constructor
  this.brand = brand;
}

Bike.prototype = Object.create(Vehicle.prototype);
Bike.prototype.constructor = Bike;

Bike.prototype.startEngine = function () {
  console.log(`Kick-starting the ${this.brand} ${this.type}.`);
};

function Truck(type, capacity) {
  Vehicle.call(this, type); // Call Vehicle constructor
  this.capacity = capacity;
}

Truck.prototype = Object.create(Vehicle.prototype);
Truck.prototype.constructor = Truck;

Truck.prototype.startEngine = function () {
  console.log(`Starting the ${this.capacity} ton truck.`);
};

// Testing
const bike = new Bike("bike", "Yamaha");
bike.startEngine(); // Output: Kick-starting the Yamaha bike.

const truck = new Truck("truck", 10);
truck.startEngine(); // Output: Starting the 10 ton truck.
```

---

### **Next: Diving Deeper into Closures in OOP**

#### **Closures in OOP**
Closures allow private variables in objects, which are useful for encapsulation.  
In JavaScript, closures can be used to hide implementation details.

---

#### **Example:**
```javascript
function Counter() {
  let count = 0; // Private variable

  this.increment = function () {
    count++;
    console.log(`Count: ${count}`);
  };

  this.decrement = function () {
    count--;
    console.log(`Count: ${count}`);
  };
}

const counter = new Counter();
counter.increment(); // Output: Count: 1
counter.increment(); // Output: Count: 2
counter.decrement(); // Output: Count: 1
```

**Explanation:**
- `count` is not directly accessible outside the `Counter` function.
- Only `increment` and `decrement` methods can modify it.

