// Learned; get and set functions are often used to access private variables in classes.

function makeClass() {
  "use strict";
  /* Alter code below this line */
  class Thermostat {
    constructor(temp){
      this.Fahrenheit = temp
    }
    get C(){
      return (this.Farenheit-32) * 5/9;
    }

    set C(updatedTemp){
      this.celcius = updatedTemp;
    }
  }
  /* Alter code above this line */
  return Thermostat;
}
const Thermostat = makeClass();
const thermos = new Thermostat(76); // setting in Fahrenheit scale
let temp = thermos.temperature; // 24.44 in C
thermos.temperature = 26;
temp = thermos.temperature; // 26 in C
