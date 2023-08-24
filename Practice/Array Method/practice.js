// Task 1
const array1 = [1, 3, 5, 7, 9];
const arrayEmpty = (array1.length = 0);
console.log(array1);
/**
 * How to empty an array?
 * 1. while loop chalay, jotokhon na array.length > 0 hoy
 * 2. array take re declared kore. const diye declare korle hobe na. Ei khetre let diye declare kora lagbe
 * 3. array.splice(0 index theke shuru kore, delete korba array.length mane sob gulo)
 * -->const arrayClear = array1.splice(0, array1.length);
    console.log(array1);
--->
    4. arry.length ke 0 set kore
 */

// while (array1.length > 0) {
//   array1.pop();
// }

// console.log(array1);

// Using for loop
const evenArrayForLoop = [];
for (let number of array1) {
  evenArrayForLoop.push(number + 1);
}
// console.log(evenArrayForLoop);

// Using map() method

const evenArrayMapMethod = array1.map((number) => number + 1);
// console.log(evenArrayMapMethod);

// Task 2
const array2 = [33, 50, 79, 78, 90, 101, 30];
// filter()
const divisableByTen = array2.filter((number) => number % 10 === 0);
// find()
const findeDivisableTen = array2.find((number) => number % 10 === 0);
// console.log(divisableByTen);
// console.log(findeDivisableTen);

// Task 3
const instructor = [
  {
    name: "Nodi",
    age: 28,
    position: "Senior",
  },
  {
    name: "Akil",
    age: 26,
    position: "Junior",
  },
  {
    name: "Shobuj",
    age: 30,
    position: "Senior",
  },
];

const seniorInstructor = instructor.filter((ins) => ins.position === "Senior");
// console.log(seniorInstructor);

// Task 4

const people = [
  {
    name: "Meena",
    age: 20,
  },
  {
    name: "Rina",
    age: 15,
  },
  {
    name: "Suchorita",
    age: 22,
  },
];

let ageSum = 0;
for (let peo of people) {
  ageSum = ageSum + peo.age;
}
// console.log(ageSum);

// Reduce
const ageSum2 = people.reduce((pre, cur) => pre + cur.age, 0);
// console.log(ageSum);
