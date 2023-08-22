// Spred Operator.....Element gulo ke choriye deya

const numbers = [1, 2, 3];
const numbersCopy = [...numbers];

const newNumbers = [...numbers, 4, 5, 6];
const newNumbers2 = [...numbers, [4, 5, 6]];

// console.log(numbersCopy);
// console.log(newNumbers2);

// Usages

// 1. Immutable Copy

/**
 * 1. Kono array er immutable copy korte
 * var numbers = [1, 2, 3];
 * var numbersCopy = [...numbers];
 * numbers array te kono method use kore array element ke change kora holeo, numbersCopy er element change hobe na
 */

const originalArray = [1, 2, 3, 4, 5];
const immutableCopy = [...originalArray];

originalArray.push(6); // Modify the original array

// console.log(originalArray); // Outputs: [1, 2, 3, 4, 5, 6]
// console.log(immutableCopy); // Outputs: [1, 2, 3, 4, 5]

// 2. Array Concatinate

const number1 = [1, 2, 3, 4];
const number2 = [5, 6, 7, 8];

const concatArray = [...number1, ...number2];
// console.log(concatArray);

// Spread Operator In Object

let myObj1 = {
  x: 1,
  y: 2,
};
let myObj2 = {
  a: 3,
  b: 4,
};

let newObj = { ...myObj1, ...myObj2 };
// Agei boleci element gulo ke choray dey
console.log(newObj);
