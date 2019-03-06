// Learned: I want to learn how to use map more often.  I'm not sure if I've used both filter and map at the same time.  I feel like eventually it would be nice to refactor this, because I think there could be a better solution.

const realNumberArray = [4, 5.6, -9.8, 3.14, 42, 6, 8.34, -2];
const squareList = (arr) => {
  "use strict";
  // change code below this line
 const squaredIntegers = arr.filter( (element) =>(Number.isInteger(element) && Math.sign(element) == 1)).map( (element) => element *element);
  // change code above this line
  return squaredIntegers;
};
// test your code
const squaredIntegers = squareList(realNumberArray);
console.log(squaredIntegers);
