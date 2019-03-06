// Learned: I hadn't thought that some devs only use const by default... I would be interested in seeing what other devs opinions declared
// Learned: const are still mutable (ie s[2] = 45 will still change index 2's value to 45)

const s = [5, 7, 2];
function editInPlace() {
  "use strict";
  // change code below this line

  // s = [2, 5, 7]; <- this is invalid
  s.unshift(2);
  s.pop();
  // change code above this line
}
editInPlace();
