var numbers = [1, 2, 3, 4, 5, 6];
var result1 = numbers.push(10, 11, 12, 13);
// Element charao, full arekta array kew push kora jay
let result2 = numbers.push([10, 11, 12]);
// console.log(numbers);

console.log(numbers);
// Return the new length after push element
console.log(result1);

let result3 = numbers.pop();
console.log(result3);
