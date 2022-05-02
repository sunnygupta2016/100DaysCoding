// 905. Sort Array By Parity
// Easy

// 3130

// 116

// Add to List

// Share
// Given an integer array nums, move all the even integers at the beginning of the array followed by all the odd integers.

// Return any array that satisfies this condition.

 

// Example 1:

// Input: nums = [3,1,2,4]
// Output: [2,4,3,1]
// Explanation: The outputs [4,2,3,1], [2,4,1,3], and [4,2,1,3] would also be accepted.
// Example 2:

// Input: nums = [0]
// Output: [0]
var sortArrayByParity = function(A) {
    const temp = [];
    A.forEach(v => {
        v % 2 === 0 ? temp.unshift(v) : temp.push(v);
    })
    
    return temp;
};