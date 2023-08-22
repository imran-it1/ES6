var numbers = [1, 2, 3, 4, 5];
let result = numbers.splice(1, 2, 10, 11, 12);
// console.log(result);
// console.log(numbers);

// Negative Index

var numbers = [1, 2, 3, 4, 5];
let output = numbers.splice(-3, 2, 10, 12);
console.log(output);
console.log(numbers);
