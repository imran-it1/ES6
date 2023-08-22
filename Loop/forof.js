// Jekono iterable js object er jonnoi eta kaj kore
/**
---> Iterable Object in JS<---
Arrays
Strings
Maps
Sets
NodeList
Arguments (array-like object holding function arguments)
TypedArrays (e.g., Int8Array, Float64Array)
Generators
DOM Collections (e.g., HTMLCollection)
Iterators (custom objects with Symbol.iterator property)
*/

// Array
let myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (let element of myArray) {
  console.log(element);
}

// String
let myString = "My country name is Bangladesh";
for (let words of myString) {
  console.log(words);
}
