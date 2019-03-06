// Recap: let means a variable can only be declared once, unlike var which allows for multiple declarations of the same variable
// Learned: "use strict"; <-- enables Strict Mode.  ie this will throw and error for x=3.14 if x is not declared.
let catName;
let quote;
function catTalk() {
  "use strict";

  catName = "Oliver";
  quote = catName + " says Meow!";

}
catTalk();
