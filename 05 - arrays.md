# **Arrays in JavaScript**

Arrays are used to store multiple values in a single variable. They are one of the most fundamental data structures in JavaScript. Let's break down the concepts, starting from the basics to advanced operations.

---

#### **1. Creating Arrays**
An array is created using square brackets (`[]`) and can hold any data type.

```javascript
// Empty array
let emptyArray = [];

// Array with numbers
let numbers = [1, 2, 3, 4, 5];

// Array with mixed data types
let mixed = [42, "hello", true, { name: "Alice" }, [1, 2, 3]];

console.log(numbers); // Output: [1, 2, 3, 4, 5]
console.log(mixed);   // Output: [42, "hello", true, { name: "Alice" }, [1, 2, 3]]
```

**Explanation:**
- Arrays can store any type of data, including objects and other arrays.
- Elements are indexed starting from `0`.

---

#### **2. Accessing Array Elements**
You can access array elements using their index.

```javascript
let fruits = ["apple", "banana", "cherry"];

console.log(fruits[0]); // Output: apple
console.log(fruits[1]); // Output: banana
console.log(fruits[2]); // Output: cherry
```

---

#### **3. Modifying Array Elements**
You can change elements by assigning new values to specific indexes.

```javascript
let colors = ["red", "blue", "green"];
colors[1] = "yellow"; // Changing "blue" to "yellow"

console.log(colors); // Output: ["red", "yellow", "green"]
```

---

#### **4. Array Methods**
Here are some commonly used array methods:

1. **Adding and Removing Elements**
   - `push()`: Adds elements to the end.
   - `pop()`: Removes the last element.
   - `unshift()`: Adds elements to the beginning.
   - `shift()`: Removes the first element.

```javascript
let animals = ["cat", "dog"];
animals.push("rabbit"); // Add to the end
animals.unshift("lion"); // Add to the beginning
animals.pop(); // Remove the last element
animals.shift(); // Remove the first element

console.log(animals); // Output: ["dog"]
```

---

2. **Finding Elements**
   - `indexOf()`: Finds the index of an element.
   - `includes()`: Checks if an element exists.

```javascript
let numbers = [1, 2, 3, 4, 5];
console.log(numbers.indexOf(3)); // Output: 2
console.log(numbers.includes(6)); // Output: false
```

---

3. **Joining and Splitting**
   - `join()`: Converts an array into a string.
   - `split()`: Converts a string into an array.

```javascript
let words = ["Hello", "world"];
let sentence = words.join(" "); // Join with a space
console.log(sentence); // Output: Hello world

let newWords = sentence.split(" "); // Split by space
console.log(newWords); // Output: ["Hello", "world"]
```

---

4. **Slicing and Splicing**
   - `slice()`: Returns a portion of an array.
   - `splice()`: Adds/removes elements at a specific index.

```javascript
let numbers = [1, 2, 3, 4, 5];

// Slice example
let sliced = numbers.slice(1, 4); // Start from index 1 to 4 (exclusive)
console.log(sliced); // Output: [2, 3, 4]

// Splice example
numbers.splice(2, 2, 99, 100); // Removes 2 elements from index 2, adds 99 and 100
console.log(numbers); // Output: [1, 2, 99, 100, 5]
```

---

#### **5. Looping Through Arrays**
You can loop through arrays using various methods.

1. **For Loop**

```javascript
let fruits = ["apple", "banana", "cherry"];
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]); // Output: apple banana cherry
}
```

2. **For...of Loop**

```javascript
for (let fruit of fruits) {
  console.log(fruit); // Output: apple banana cherry
}
```

3. **forEach() Method**

```javascript
fruits.forEach((fruit, index) => {
  console.log(`${index}: ${fruit}`);
});
// Output: 
// 0: apple
// 1: banana
// 2: cherry
```

---

#### **6. Advanced Array Methods**
1. **map()**  
   Creates a new array by applying a function to each element.

```javascript
let numbers = [1, 2, 3];
let squared = numbers.map(num => num * num);

console.log(squared); // Output: [1, 4, 9]
```

2. **filter()**  
   Filters elements based on a condition.

```javascript
let numbers = [1, 2, 3, 4, 5];
let even = numbers.filter(num => num % 2 === 0);

console.log(even); // Output: [2, 4]
```

3. **reduce()**  
   Reduces the array to a single value.

```javascript
let numbers = [1, 2, 3, 4];
let sum = numbers.reduce((acc, num) => acc + num, 0);

console.log(sum); // Output: 10
```

---

### **Practice Exercises**
1. Create an array of numbers and find the sum of all even numbers using `filter()` and `reduce()`.
2. Write a function that accepts an array of words and returns an array with the words capitalized using `map()`.
3. Use `forEach()` to print the index and value of each element in an array of your favorite foods.
4. Write a function that removes duplicates from an array.

---

### **Solutions to the Exercises**

#### **1. Create an array of numbers and find the sum of all even numbers using `filter()` and `reduce()`.**

```javascript
function sumOfEvens(numbers) {
  // Step 1: Filter out even numbers
  let evens = numbers.filter(num => num % 2 === 0);

  // Step 2: Use reduce to sum up the even numbers
  let sum = evens.reduce((acc, num) => acc + num, 0);

  return sum;
}

// Example usage
let numbers = [1, 2, 3, 4, 5, 6];
console.log(sumOfEvens(numbers)); // Output: 12
```

**Explanation:**
- `filter(num => num % 2 === 0)` selects even numbers from the array.
- `reduce((acc, num) => acc + num, 0)` accumulates the sum of these even numbers.
- The function returns the total sum.

---

#### **2. Write a function that accepts an array of words and returns an array with the words capitalized using `map()`.**

```javascript
function capitalizeWords(words) {
  // Use map to capitalize each word
  return words.map(word => word[0].toUpperCase() + word.slice(1));
}

// Example usage
let words = ["hello", "world", "javascript"];
console.log(capitalizeWords(words)); // Output: ["Hello", "World", "Javascript"]
```

**Explanation:**
- `word[0].toUpperCase()` capitalizes the first letter.
- `word.slice(1)` gets the rest of the word after the first letter.
- `map()` applies this transformation to every word in the array.

---

#### **3. Use `forEach()` to print the index and value of each element in an array of your favorite foods.**

```javascript
let favoriteFoods = ["pizza", "pasta", "burger"];

favoriteFoods.forEach((food, index) => {
  console.log(`${index}: ${food}`);
});

// Output:
// 0: pizza
// 1: pasta
// 2: burger
```

**Explanation:**
- `forEach()` loops through the array.
- The callback function `(food, index)` takes the current element and its index, then logs them in the desired format.

---

#### **4. Write a function that removes duplicates from an array.**

```javascript
function removeDuplicates(arr) {
  // Use Set to remove duplicates and convert back to an array
  return [...new Set(arr)];
}

// Example usage
let arrayWithDuplicates = [1, 2, 2, 3, 4, 4, 5];
console.log(removeDuplicates(arrayWithDuplicates)); // Output: [1, 2, 3, 4, 5]
```

**Explanation:**
- `Set` is a collection that only stores unique values.
- `[...new Set(arr)]` converts the `Set` back into an array with all duplicates removed.

---