var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let result = numbers.findIndex((currentValue, currentIndex, arr) => {
  /**
   *  1 % 2 = 1, 1 mean truthy value,
   * We know that this callback function return when find any truthy value
   */
  //   return !(currentValue % 2);
  //   return currentValue > 5;

  /**
   * If you pass such a value that doesn't exist. That will return -1 always;
   * That means this element doesn't exist in the array
   * You you want to check if any element exists in an array you can check the index of the element,
   * if the result is 0 or higher. That mean the element exists in the array. -1 mean the element doesn't exist in the array.
   */

  return currentValue > 15;
});
console.log(numbers);

console.log(result);
