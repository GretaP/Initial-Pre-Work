// Recap: I was aware of the radix option on ParseInt but had never used it.  It is useful to see an example.

function convertToInteger(str) {
  return parseInt(str, 2);
}

convertToInteger("10011");
