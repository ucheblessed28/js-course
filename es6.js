// const sum = (a, b) => a + b;

// console.log(sum(5, 10)); // Outputs: 15

// // ================================

// function add(a, b) {
//     return a + b;
// }

// console.log(add(5, 10)); // Outputs: 15

function Even(number) {
    if (number % 2 === 0) {
        return 'Even';
    } else {
        return 'Odd';
    }
}

console.log(Even(5));
console.log(Even(10));

// =================================================================

const odd = (number) => number % 2 === 0 ? 'Even' : 'Odd';

console.log(odd(5));

// =================================================================

function sumUp(n) {
    if (n < 1) {
        return 0;
    }
    return (n * (n + 1)) / 2    
}

console.log(sumUp(20));

console.log(1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 + 9 + 10 + 11 + 12 + 13 + 14 + 15 + 16 + 17 + 18 + 19 + 20)