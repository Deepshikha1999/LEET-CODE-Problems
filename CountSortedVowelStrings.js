/**
 * @param {number} n
 * @return {number}
 */

var countVowelStrings = function (n) {
    let count = 0;
    let recursiveWay = (k, temp) => {
        if (temp == n) {
            count++;
            return;
        }
        for (let i = k; i < 5; i++) {
            recursiveWay(i, (temp+1));
        }
        return;
    }

    recursiveWay(0,0);
    return count;
};

let n = 1;
n = 2;
n = 33;
console.log(countVowelStrings(n))