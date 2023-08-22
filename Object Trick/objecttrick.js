const myObj = {
  name: "javaScript",
  year: "1995",
  founder: "Brenden Eich",
  ranking: 1,
};

// How to get key and values of an Object
// ***** Object word will be Capitalized---> Must

// Old Apporoch
for (let key in myObj) {
  //   console.log(key);
  let value = myObj[key];
  //   console.log(value);
}

// Smaet Approch
// Return array

let keys = Object.keys(myObj);
let values = Object.values(myObj);
let keysValues = Object.entries(myObj);
// console.log(keys);
// console.log(values);
// console.log(keysValues);

// Jehetu array return kore, so array er method gulo etate kaj korbe

let popedKey = keys.pop();
// console.log(popedKey);

// Object Shortcut

var x = 4;
var y = 5;
var z = x + y;

const myObj2 = {
  name: "javaScript",
  year: "1995",
  founder: "Brenden Eich",
  ranking: 1,
  //    x  er value jodi x e (property name and assign value name same hole seta evabe likha jay) assign kora hoy tahole short kore lekha jay eta.
  //   x: x,
  //   y: y,
  //   z: z,

  //   O dhore nibe x: x, y: y, z: z
  x,
  y,
  z,
};

console.log(myObj2);
