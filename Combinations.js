/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function (n, k) {
    let arr = [];
    let inputArr = [];
    for (let i = 1; i <= n; i++) {
        inputArr.push(i);
    }
    let i = 0;
    while (i < n) {
        listCombinations(inputArr.slice(i+1,n), k, [inputArr[i]], arr,n);
        i++;
    }
    return arr;
};

let listCombinations = (inputArr, k, temarr, arr,n) => {
    if (temarr.length === k) {
        arr.push(temarr);
    }
    else {
        for (let i = 0; i < inputArr.length; i++) {
            if (!temarr.includes(inputArr[i])) {
                let tarr = [...temarr];
                tarr.push(inputArr[i]);
                listCombinations(inputArr.slice(i+1,n), k, tarr, arr,n);
            }
        }
    }
    return;
}

let n = 4, k = 3;
// n = 4, k = 2;
n = 13, k = 13;

console.log(combine(n, k))