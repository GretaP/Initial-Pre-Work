/* Learned: to be careful working with constants.  I originally used const [b,a] = [a,b].
This does not work.  I was seeing [a,b] as an array when it's really shorthand for assigning each variable seperately.  Since that variable is already declared with let, a re-declaration will not work.
*/

let a = 8, b = 6;
(() => {
  "use strict";
  // change code below this line
  [b,a] = [a,b];
  // change code above this line
})();
console.log(a); // should be 6
console.log(b); // should be 8
