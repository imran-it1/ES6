// Array.prototype.find()

// var number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// var result = number.find(function (currentValue, currentIndex, arr) {
//   return currentValue > 4;
// });
// console.log(result);

// ----> find() calback function er pasapasi Second parameter hisabe this keyword o nite pare. <----

var number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
number.find(function (currentValue, currentIndex, arr) {
  return currentValue > 5;
}, this);

//This this will need when you use find with nested callback function
// Example bellow

class Student {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  test() {
    console.log("Hello");
  }
  exampleFunction() {
    let array = [1, 2, 3];
    array.find(function () {
      this.test();
    }, this);
    /**
     * 1.--> If you want to refer This this to the current object you have to use
     * second parameter this
     * 2.--> Or you can use fat arrow function. That does't care about this value
     */
  }
}

let student = new Student("Imran", 35);
// student.exampleFunction();
