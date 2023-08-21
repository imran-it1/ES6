const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let result = numbers.filter((currentValue, currentIndex, arr) => {
  console.log(currentValue);
  console.log(currentIndex);
  console.log(arr);

  return currentValue > 5;
});
console.log(numbers);
console.log(result);

let arrayConcat = numbers.concat(result);
console.log(arrayConcat);
