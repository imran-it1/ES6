// var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let result = numbers.slice(2, 5);
// console.log(result);

// Think in negative Way

/**
 * First cut ta jekhane hoy element tar por theke neya hoy
 */
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

/**
 * result will be empty array []. because first cut ta jekhane porche
 * second cut ta tar age porce. first cut er por a second cut porle
 * majhkhaner element gulo se nito
 */
let result = numbers.slice(-2, 5);
// Just start bolle seta theke shuru kore baki sob output hisabe dibe
let result2 = numbers.slice(-2);
let result3 = numbers.slice(-5, 8);
// console.log(result);
// console.log(result2);
// console.log(result3);

// ------------------->
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Index 2 theke shuru kore baki sob
let output1 = numbers.slice(2);
// Index 2 theke shuru kore index 7 er moddhe jei element gulo pabe
let output2 = numbers.slice(2, 7);
// From right side er 5 index theke baki sob
let output3 = numbers.slice(-5);
// Hisab
// Right side er 5 index and left side er index 2 er por
// Second cut first cut er por na hole empty array [] return korbe
let output4 = numbers.slice(-5, 2);
let output5 = numbers.slice(-5, 8);

console.log(output1, output2, output3, output4, output5);
// Does't change the main array
console.log(numbers);
