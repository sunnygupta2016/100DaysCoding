


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

