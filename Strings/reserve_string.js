// Write a function that reverses a string. The input string is given as an array of characters char[].
//
// Do not allocate extra space for another array, you must do this by modifying the input array in-place with O(1) extra memory.
//
// You may assume all the characters consist of printable ascii characters.



Example 1:

Input: ["h","e","l","l","o"]
Output: ["o","l","l","e","h"]

Example 2:

Input: ["H","a","n","n","a","h"]
Output: ["h","a","n","n","a","H"]



var reverseString = function(s) {
    let res = "";
    for(let i = s.length - 1; i >= 0; i --){
        res += s[i];
    }
    return res;
};

//-------------Solution 1 ----------/////

// var reverseString = function(s) {
//     return s.split('')
            // .reverse()
            // .join('');
// };


//-----------Solution 2 ------------////

// let reverseString = function(s) {
//     let arr = s.split(''), left = 0, right = arr.length - 1;
//     while (left < right) {
//         let temp = arr[left];
//         arr[left] = arr[right];
//         arr[right] = temp;
//         ++left;
//         --right;
//     }
//     return arr.join('');
// };
