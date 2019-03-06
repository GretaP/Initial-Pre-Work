// Learned: Mathematic logic behind the solution.  The max-min+1 is the RANGE of the numbers (+1 because both start and end must be counted).  Add the min to set the lowest number to the minimum, and the full range starting at that number is available based on Math.random.

// Example
function ourRandomRange(ourMin, ourMax) {

  return Math.floor(Math.random() * (ourMax - ourMin + 1)) + ourMin;
}

ourRandomRange(1, 9);

// Only change code below this line.

function randomRange(myMin, myMax) {

  return Math.floor(Math.random() * (myMax - myMin+1)+myMin); // Change this line

}

// Change these values to test your function
var myRandom = randomRange(5, 15);
