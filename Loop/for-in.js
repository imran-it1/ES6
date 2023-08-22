/**
 * for in loop ta Always Object er moddhe diye itterate kore
 *
 */

const myObj = {
  name: "javaScript",
  year: "1995",
  founder: "Brenden Eich",
};

// Key or Property bola jay

for (let key in myObj) {
  console.log(key);
}

// You can omit let

// for (key in myObj) {
//   console.log(key);
// }
