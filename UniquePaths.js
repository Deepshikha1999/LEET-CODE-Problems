/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(m, n) {
    let factorial = [1];
    let Steps = m+n - 2;
    for(let i=1;i<=Steps+2;i++){
        factorial[i] = factorial[i-1]* i;
    }

    return factorial[Steps]/(factorial[m-1]*factorial[n-1])
};

let m = 3, n = 7;
m = 3, n = 2;
m = 23, n = 12;
console.log(uniquePaths(m,n))

/**
 * recusion:
 * let results = 0;
var uniquePaths = function(m, n) {
    results = 0;
    let i = 0;
    let j = 0;
    traverse(i,j,m,n);
    return results;
};

let traverse = (i,j,n,m)=>{
    //possible moves are down and right only
    if(i==(n-1) && j==(m-1)){
        ++ results;
    }
    else{
        if(i>=n || j>=m)
        return;
        else{
            //for down
            traverse(i,(j+1),n,m);

            //for right
            traverse((i+1),j,n,m);
        }
    }
    return;
}

 */