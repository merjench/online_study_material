// Given a non-empty array of digits representing a non-negative integer, plus one to the integer

Example 1:

Input: [1,2,3]
Output: [1,2,4]
Explanation: The array represents the integer 123.

Example 2:

Input: [4,3,2,1]
Output: [4,3,2,2]
Explanation: The array represents the integer 4321.

// ---------Solution 1 ------------------//


var plusOne = function(digits) {

for(var i = digits.length - 1; i >= 0; i--) {
    if(++digits[i] > 9) digits[i] = 0;
    else return digits;
  }
    digits.unshift(1);
    return digits;
};

//------------Solution 2  es6 ---------///

const plusOne = digits => {
    for (let i = digits.length - 1; i >= 0; i--) {
        if (digits[i] < 9) {
            digits[i]++
            return digits
        }
        digits[i] = 0
    }
    return [1, ...digits]
};
