// Learned: always make sure you spell correctly... Also, I generally don't like the look of chained ternaries.  I would be curious what is considered best practice in the industry in example cases - in some cases it seems a bit difficult to read easily. 

function checkSign(num) {
  return Math.sign(num) == 0 ? "zero" : Math.sign(num) ==1 ? "positive":"negative";
}

checkSign(10);
