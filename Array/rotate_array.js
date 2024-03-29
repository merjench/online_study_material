Given an array, rotate the array to the right by k steps, where k is non-negative.

Example:
Input: [1,2,3,4,5,6,7] and k = 3
Output: [5,6,7,1,2,3,4]
Explanation:
 rotate 1 steps to the right: [7,1,2,3,4,5,6]
rotate 2 steps to the right: [6,7,1,2,3,4,5]
 rotate 3 steps to the right: [5,6,7,1,2,3,4]


var rotate = function(nums, k) {
    if(k!=0){
        let pop = nums.pop()
        nums.unshift(pop)
        rotate(nums,k-1)
    }
};
