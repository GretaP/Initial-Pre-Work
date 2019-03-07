// Learned: A shorthand method of creating key/value pair.  I would like to look at some practical examples of this in the future

const createPerson = (name, age, gender) => {
  "use strict";
  // change code below this line
  return (name, age, gender) => ({name, age, gender});
  // change code above this line
};
console.log(createPerson("Zodiac Hasbro", 56, "male")); // returns a proper object
