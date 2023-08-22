var numbers = [1, 2, 3, 4, 5, 6];
let sum = numbers.reduce((preValue, currentValue, currentIndex, arr) => {
  console.log(preValue);
  console.log(currentValue);
  return preValue + currentValue;
  //   return preValue * currentValue;
}, 1);

console.log(sum);
