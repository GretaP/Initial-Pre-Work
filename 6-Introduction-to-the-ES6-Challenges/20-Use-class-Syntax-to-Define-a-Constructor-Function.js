/* Recap: This reminds me how different JS is from C# in particular, and how I miss having the structure of real classes.
Learned: There is a "class" constructor in ES6, and you can use it to set values.  This is new to me, so I would have to look up syntax to use it in the future, or look below.
*/

function makeClass() {
  "use strict";
  /* Alter code below this line */
  class Vegetable {
    constructor(veg){
      this.name=veg;
    }
  }
  /* Alter code above this line */
  return Vegetable;
}
const Vegetable = makeClass();
const carrot = new Vegetable('carrot');
console.log(carrot.name); // => should be 'carrot'
