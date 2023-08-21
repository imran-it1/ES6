/**
 * Boolean Context
 * Like if statement is a boolean contex
 *
 */

var myVar = {};

/*
if(myVar === true){

}
*/

// Same things

if (!myVar) {
  console.log("I am Truthy");
} else {
  console.log("I am Falsy");
}

/**
 * ---> Falsy Value <----
 * 1. empty string
 * 2. null
 * 3. undefined
 * 4. 0
 * 5. false
 * 6. NaN
 *
 * ! use korle just ulta vabe vabte hobe
 * Age jeta truth statement a dhukto, ebar seta false stement a dhukbe
 *
 */
