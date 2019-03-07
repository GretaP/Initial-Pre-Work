// Learned: I have been trying to learn how spread syntax works, but haven't looked into it thouroughly.  From this exercise, its use in function declaration is clear, especially in dynamic programs.
// Spread syntax allows an unknown number of variables to be passed into the function and used as an array, which has several useful methods that are then able to be applied (ie map/filter)

const sum = (function() {
  "use strict";
  return function sum(...args) {
    return args.reduce((a, b) => a + b, 0);
  };
})();
console.log(sum(1, 2, 3)); // 6
