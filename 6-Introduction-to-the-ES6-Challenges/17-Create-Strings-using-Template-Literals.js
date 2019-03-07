/* Learned: A functional use of map is to return an array, as in this example.  I realized that several of the times I used map incorrectly had to do with the return type (array).
I also appreciated an example of how temperate literals can be used dynamically.

*/

const result = {
  success: ["max-length", "no-amd", "prefer-arrow-functions"],
  failure: ["no-var", "var-on-top", "linebreak"],
  skipped: ["id-blacklist", "no-dup-keys"]
};
function makeList(arr) {
  "use strict";

  // change code below this line
  const resultDisplayArray = arr.map(x => `<li class="text-warning">${x}</li>`);
  // change code above this line
  console.log(resultDisplayArray);

  return resultDisplayArray;
}
/**
 * makeList(result.failure) should return:
 * [ `<li class="text-warning">no-var</li>`,
 *   `<li class="text-warning">var-on-top</li>`,
 *   `<li class="text-warning">linebreak</li>` ]
 **/
const resultDisplayArray = makeList(result.failure);
