/* This one took a little work.  I was zoning out and thinking too much about switches.
I learned that regex chars inside [] will match any character in the set.  I also had to look up the String() method so that I could use regex.
*/

var count = 0;

function cc(card) {
  if (card>1 && card<7) {count ++;}
  else if (String(card).match(/[JKQA]|10/g)) {count --;}
  return (count>0) ? `${count} Bet`:`${count} Hold`;
  // Only change code above this line
}

// Add/remove calls to test your function.
// Note: Only the last will display
cc(2); cc(3); cc(7); cc('K'); cc('A');cc(10);
