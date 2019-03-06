// reminds me of Goldilocks and the three bears (too hot, too cold).  

function testSize(num) {
  // Only change code below this line
  var changeMe;
  if (num < 5) changeMe = "Tiny";
  else if(num < 10)changeMe = "Small";
  else if(num < 15) changeMe = "Medium";
  else if(num < 20) changeMe = "Large";
  else changeMe = "Huge";
  return changeMe;
  // Only change code above this line
}

// Change this value to test
testSize(7);
