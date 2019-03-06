// Learned: I would have approached this by doing a logic check inside the loop, rather than just incrementing by 2.  This is a better solution - I just wouldn't have thought of it!

// Example
var ourArray = [];

for (var i = 0; i < 10; i += 2) {
  ourArray.push(i);
}

// Setup
var myArray = [];

// Only change code below this line.
for (i=1; i<10; i+=2){
  myArray.push(i);
}
