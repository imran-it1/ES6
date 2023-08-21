// In arrow function how (this) keyword works????

// let javaScript = {
//   name: "JavaScript",
//   //   Array
//   libraries: ["React", "Angular", "Vue"],
//   printLibraries: function () {
//     //This this refer this Object.😍
//     // console.log(this);
//     let selfThis = this;
//     //forEach a call back function use kora hoyece. Prottekbar iteration a se ei function ke call korbe
//     this.libraries.forEach(function (a) {
//       // This this does't refer this obeject. Wired. 😥
//       // That actually refer Windoe(Browser), Global(Node.js)
//       //   console.log(this);
//       console.log(`${selfThis.name} loves ${a}`);
//     });
//   },
// };

// Arrow Function use kore this er value ke thik kora
let javaScript = {
  name: "JavaScript",
  //   Array
  libraries: ["React", "Angular", "Vue"],
  printLibraries: function () {
    //This this refer this Object.😍
    // console.log(this);

    //forEach a call back function use kora hoyece. Prottekbar iteration a se ei function ke call korbe
    this.libraries.forEach((a) => {
      // This this does't refer this obeject. Wired. 😥
      // That actually refer Windoe(Browser), Global(Node.js)
      //   console.log(this);
      console.log(`${this.name} loves ${a}`);
    });

    // Jehetu only one stement there you can omit {} braket

    // this.libraries.forEach((a) => console.log(`${this.name} loves ${a}`));
  },
};

// javaScript.printLibraries();

/**
 * forEach er call back function seta to Oter this ke change kore feltece, er  Solution ki??? 😣😣😣
 * 1. --> Store the this value to an another variable so that we can refer that variable for
 *        call back function.
 *
 * 2.--> Arrow function use korle outer this er value change hobe na.
 *       actually arrow function this keyword a hat e dey na.
 *       Arrow function this ke niye bother na. Se jokhon jei contex a thake, se contex ke refer kore. This er value ke se change kore na.
 */
