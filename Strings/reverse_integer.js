Given a 32-bit signed integer, reverse digits of an integer.

Example 1:

Input: 123
Output: 321

Example 2:

Input: -123
Output: -321

Example 3:

Input: 120
Output: 21

//-------------------Solution 1 ----------------------//

// var reverse = function(x) {
//   const reversed = x
//   .toString()
//   .split('')
//   .reverse()
//   .join('');

//   return parseInt(reversed) * Math.sign(x);
// }

//---------Solution 2------------------------------//
var reverse = function(x) {
     // check if negative
  const negative = x < 0 && "-";

  // create array from number
  const array = Array.from(x.toString()).map(Number);

  // reverse array and parse into an integer
  const num = parseInt(array.reverse().join(""));

  // if greater than the max 32bit integer return 0
  if (num > 2147483647) return 0;

  return parseInt(negative + num);

};
