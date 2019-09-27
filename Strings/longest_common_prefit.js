
Write a function to find the longest common prefix string amongst an array of strings.
If there is no common prefix, return an empty string "".

Example:
Input: ["flower","flow","flight"]
 Output: "fl"

Input: ["dog","racecar","car"]
 Output: ""
Explanation: There is no common prefix among the input strings.

Note:
All given inputs are in lowercase letters a-z.
just like python, String can sort by ASCII.

// ------------Solution 1 ----------------------------///


let longestCommonPrefix = function (strs) {
  if (!strs.length) {
    return '';
   }
  let arr = strs.sort();
  let i = 0;
while (arr[0][i] && arr[arr.length - 1][i] && arr[0][i] === arr[arr.length - 1][i]) {
      i++;
  }
  return arr[0].slice(0, i);
 };

 
