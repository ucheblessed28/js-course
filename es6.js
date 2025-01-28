let food = ['afang', 'egusi', 'rice', 'beans', 'egg']
console.log(food);

// console.log(food.slice(1, 4))

let newFood = food.splice(1, 2, 'bread', 'fish');
console.log(food);



// let numbers = [1, 2, 3, 4, 5];

// // Slice example
// let sliced = numbers.slice(1, 4); // Start from index 1 to 4 (exclusive)
// console.log(sliced); // Output: [2, 3, 4]

// // Splice example
// numbers.splice(1, 2, 99, 100); // Removes 2 elements from index 1, adds 99 and 100
// console.log(numbers); // Output: [1, 2, 99, 100, 5]
