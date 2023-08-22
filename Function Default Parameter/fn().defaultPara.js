/**
 * Parameter pass na korel undefined dekhay
 * Amra chaile default ekta parameter diye dite pari
 * Ete user jodi kono parameter na dey tahole default tai show korbe.
 *
 *
 * User parameter dile defalt ta override hoye user er deya parameter onujaye result show korbe
 *
 *
 *
 *
 *  undefinde pass korle --> Default value show korbe *** Undefined and Value nai same bepar*** So se default value tai print korbe
 *
 *
 *
 *  null pass korle ---> Null e show kore
 */

function myFunc(x = 5) {
  return x;
}

console.log(myFunc(null));
