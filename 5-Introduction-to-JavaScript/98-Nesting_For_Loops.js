// Learned: I thought it would be more fun to use some other built-ins javascript has to offer for this one.  I had to look up arr.flat - I strongly suspected there was a way but hadn't used it before.  Reduce first this problem perfectly from what I know of coding.  This could be all one-lined by just substituting return for product = in line 4

function multiplyAll(arr) {
  var product = 1;
  // Only change code below this line
  product = arr.flat().reduce(function(accumulator, currentValue){return accumulator * currentValue});
  // One line if you use: return arr.flat ... (rest of line above, and killed off lines 4 and 9)
  // Only change code above this line
  return product;
}

// Modify values below to test your code
multiplyAll([[1,2],[3,4],[5,6,7]]);
