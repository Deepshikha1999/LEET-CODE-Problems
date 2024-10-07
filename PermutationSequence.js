/**
 * @param {number} n
 * @param {number} k
 * @return {string}

var getPermutation = function (n, k) {
    let str = "";
    let arr = [];
    for (let i = 0; i < n; i++) {
        str += (i + 1) + "";
    }
    getList(str, "", arr, n, k);
    return arr[k-1];
};

let getList = (str, newStr, arr, n, k) => {
    if (arr.length==k) return;
    else {
        if (newStr.length == n) {
            arr.push(newStr);
            return;
        }
        else {
            for (let i = 0; i < str.length; i++) {
                let tempa = str.split("");
                tempa.splice(i, 1)
                let s = tempa.join("");
                let newS = newStr + str[i];
                getList(s, newS, arr, n,k);
            }
            return;
        }
    }
}
let n = 3, k = 3;
n = 4, k = 9;
n = 8, k = 22602;
n = 9, k = 296662;

console.log(getPermutation(n, k))
*/

/**
 * @param {number} n
 * @param {number} k
 * @return {string}
 */
var getPermutation = function (n, k) {
    let factorial = [1];
    let numbers = [];
    let result = "";

    // Generate factorials and the list of numbers
    for (let i = 1; i <= n; i++) {
        factorial[i] = factorial[i - 1] * i;
        numbers.push(i.toString());
    }

    // Convert k to zero-based index
    k--;

    // Generate the k-th permutation
    for (let i = n; i > 0; i--) {
        let index = Math.floor(k / factorial[i - 1]);
        result += numbers[index];
        numbers.splice(index, 1);
        k %= factorial[i - 1];
    }

    return result;
};

// Example usage
let n = 3, k = 3;
console.log(getPermutation(n, k)); // Output: "213"
