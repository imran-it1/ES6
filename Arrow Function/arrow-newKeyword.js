// Eta ekta constructor function
// That mean eta kicu creat kore
// function person(name, age) {
//   this.name = name;
//   this.age = age;
// }

// const sakib = new person("Sakib", 35);
// console.log(sakib);
// const imran = new person("Imran", 23);
// console.log(imran);

// Convert above fucntion to arrow function and see if new keyword work or not

let person = (name, age) => {
  this.name = name;
  this.age = age;
};

let imran = new person("Imran", 23);
// console.log(imran);

//Person is not a Constructor

/**
 * So we can tell that the new keyword can only use with normal function.
 * Because arrow function does't have constructor facilities
 */
