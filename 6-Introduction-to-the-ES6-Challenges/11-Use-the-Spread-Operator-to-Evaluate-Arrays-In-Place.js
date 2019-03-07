/* Learned: function.prototype.apply() method calls a function with a "this" value and and array/array-like object.
Some information from MDN that I found really helpful to better understand apply and why it would be used:
One way to use apply is to append an array to another (flat).  array.push.apply(array, elements); where elements is an array, and array is an existing array.
Another example is to find the max or min value in an array.  var max = Math.max.apply(null, numbers);  <-- where numbers is an array of the numbers to be checked.  The alternative would be a loop of some type, while this is one line.
Note that MDN warns that a function with too many arguments (Hard limit of 65536, or dependent on the engine), will cause various errors/problems, so if large #s of variables are expected, it is good practice to nest inside a loop/seperate the data in some way.
*/

const arr1 = ['JAN', 'FEB', 'MAR', 'APR', 'MAY'];
let arr2;
(function() {
  "use strict";
  arr2 = [...arr1]; // change this line
})();
console.log(arr2);
