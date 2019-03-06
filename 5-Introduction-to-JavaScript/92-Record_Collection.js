/* Learned: This one took me a little while.  My problem was getting the syntax/logic to work in line 35.  I kept trying to use hasOwnProperty, which not only wasn't working well but was much more convoluted than a simple check by seeing if a value returned null (false) or not.
 As you can see, I settled on doing that check and pushing the value onto the existing array if it existed (which leaves existing information untouched and just adds the value to the end of the array) and assigning both the prop and value if not.  Simple!
*/

// Setup
var collection = {
    "2548": {
      "album": "Slippery When Wet",
      "artist": "Bon Jovi",
      "tracks": [
        "Let It Rock",
        "You Give Love a Bad Name"
      ]
    },
    "2468": {
      "album": "1999",
      "artist": "Prince",
      "tracks": [
        "1999",
        "Little Red Corvette"
      ]
    },
    "1245": {
      "artist": "Robert Palmer",
      "tracks": [ ]
    },
    "5439": {
      "album": "ABBA Gold"
    }
};
// Keep a copy of the collection for tests
var collectionCopy = JSON.parse(JSON.stringify(collection));

// Only change code below this line
function updateRecords(id, prop, value) {
  if (value == "") {delete collection[id][prop];}
  else if (prop == "tracks") {collection[id][prop] ? collection[id][prop].push(value) : collection[id][prop]=[value]}
  else {collection[id][prop]=value};
  return collection;
}

// Alter values below to test your code
updateRecords(5439, "tracks", "ABBA");
