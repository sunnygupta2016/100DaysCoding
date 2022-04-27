
// 202. Happy Number
// Easy

// 5280

// 702

// Add to List

// Share
// Write an algorithm to determine if a number n is happy.

// A happy number is a number defined by the following process:

// Starting with any positive integer, replace the number by the sum of the squares of its digits.
// Repeat the process until the number equals 1 (where it will stay), or it loops endlessly in a cycle which does not include 1.
// Those numbers for which this process ends in 1 are happy.
// Return true if n is a happy number, and false if not.

 

// Example 1:

// Input: n = 19
// Output: true
// Explanation:
// 12 + 92 = 82
// 82 + 22 = 68
// 62 + 82 = 100
// 12 + 02 + 02 = 1
// Example 2:

// Input: n = 2
// Output: false


var isHappy = function(n) {
    // console.log(n)
       let digitsSquare = n => n.toString().split('').reduce((acc,curr) => acc + curr**2, 0);
       //console.log(n)
       let slow, fast;
       slow = fast = n;
      // console.log(slow)
      // console.log(fast)
       do {
           slow = digitsSquare(slow);
           //console.log(slow)
           fast = digitsSquare(digitsSquare(fast));
           //console.log(fast)
           if (fast === 1) return true;
       } while (slow !== fast)
       return false;
   };