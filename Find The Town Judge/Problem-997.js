// Algorithm:-
// Create an array Trusted of size N+1 to represent the total number of peoples in a town and initialize it with 0 .
// After initialization, whenever a person trust someone else than himself, the trusted value of that person should be decreased since that person is not satisfying the two conditions that were mentioned in the question.
// Also if a certain x person is trusted by others from town, than this x person value should be increased and those who trusted that x person there values should be decreased.
// At last traverse through every person of town and while traversing If a person is found with N-1 trusts than this person should be the judge and return the index of that person

// In a town, there are n people labeled from 1 to n. There is a rumor that one of these people is secretly the town judge.

// If the town judge exists, then:

// The town judge trusts nobody.
// Everybody (except for the town judge) trusts the town judge.
// There is exactly one person that satisfies properties 1 and 2.
// You are given an array trust where trust[i] = [ai, bi] representing that the person labeled ai trusts the person labeled bi.

// Return the label of the town judge if the town judge exists and can be identified, or return -1 otherwise.

// Example 1:

// Input: n = 2, trust = [[1,2]]
// Output: 2
// Example 2:

// Input: n = 3, trust = [[1,3],[2,3]]
// Output: 3

function a (n, trust) {
    const Trusted = new Array(n+1).fill(0);
    console.log(Trusted)
    for(let [i,j] of trust) {
        Trusted[i]--
        Trusted[j]++
    }
   
    for(let i = 1; i < Trusted.length; i++) {
        if ((n-1) === Trusted[i]) {
            return console.log(i);
        }
    }
    return console.log(-1)
};

a(5,[ [1,3], [1,4], [2,3], [2,4], [4,3],[1,5],[3,5],[4,5],[2,5]])