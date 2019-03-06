// Learned: Math.random produces rnadom decimal #s between 0, and 1, so to get a number between other values, just multiply and round (Math.floor or Math.ceil) if you want an int.

var randomNumberBetween0and19 = Math.floor(Math.random() * 20);

function randomWholeNum() {

  // Only change code below this line.

  return Math.floor(Math.random()*10);
}
