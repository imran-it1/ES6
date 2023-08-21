// Amra eventListner a oneksomoy arrow function use kori, sei khetre  eta kivabe kaj kore???? Use kora koto ta thik hobe??🤔🤔🤔🤔

// Variable
const searchInput = document.querySelector(".search");
const result = document.querySelector(".result");
const thanks = document.querySelector(".thanks");
// Show function
function show() {
  // Ei this input field ke refer kore tai tar value ke ekhane access kora jay
  //   console.log(this);
  //   Ei this asole searchInput ta ke bujhay
  result.innerHTML = this.value;
  //   var currentThis = this;
  //   setTimeout(function () {
  //     // Ei this window ke refer kore tai tar value ke ekhane access kora jay na
  //     // console.log(this);
  //     thanks.innerHTML = `You have typed: ${currentThis.value}`;
  //   }, 1000);

  setTimeout(() => {
    thanks.innerHTML = `You have typed: ${this.value}`;
  }, 1000);
}

/**
 * Full Function take arrow function a convert kora jabe na. Tahole input field er  value tai paoa jbae
 * na. Kaaron this tokhon window context ke refer korbe. ar window.value kicu output dey na.
 */

// searchInput.addEventListener("keyup", () => {
//   result.innerHTML = this.value;
// });

// Search Input a keyUp a show name er ekta function call hobe
// searchInput.addEventListener("keyup", show);

/**
 * You can solve this issue just like before strategy
 * 1. --> Store the this value so that you can use the value on call
 *       back function
 * 2. --> Use fat arrow function because we know that fat arrow function have no matha betha about this keyword.
 */
