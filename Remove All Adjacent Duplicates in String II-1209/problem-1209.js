// <!-- You are given a string s and an integer k, a k duplicate removal consists of choosing k adjacent and equal letters from s and removing them, causing the left and the right side of the deleted substring to concatenate together.

// We repeatedly make k duplicate removals on s until we no longer can.

// Return the final string after all such duplicate removals have been made. It is guaranteed that the answer is unique.

 

// Example 1:

// Input: s = "abcd", k = 2
// Output: "abcd"
// Explanation: There's nothing to delete.
// Example 2:

// Input: s = "deeedbbcccbdaa", k = 3
// Output: "aa"
// Explanation: 
// First delete "eee" and "ccc", get "ddbbbdaa"
// Then delete "bbb", get "dddaa"
// Finally delete "ddd", get "aa"
// Example 3:

// Input: s = "pbbcggttciiippooaais", k = 2
// Output: "ps" -->
var removeDuplicates = function(S, K) {
    for (let i = 1, count = 1; i < S.length; i++) {
        S.charAt(i) === S.charAt(i-1) ? count++ : count = 1
        if (count === K)
            S = removeDuplicates(S.slice(0, i-K+1) + S.slice(i+1), K);
    }
    return S
};
//by using stack
var removeDuplicates = function(S, K) {
    let SC = S.split(""), st = [0], i, j
    for (i = 1, j = 1; j < S.length; SC[++i] = SC[++j]) {
        if (SC[i] !== SC[i-1]) st.push(i)
        else if (i - st[st.length-1] + 1 === K) i = st.pop()-1
    }
    return SC.slice(0,i+1).join("")
};