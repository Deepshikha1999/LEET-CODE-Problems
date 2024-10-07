/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n) {

    let str = "(";
    let arr = [];
    let backtrackTheSol = (even, odd, str) => {
        if (str.length == 2 * n) {
            arr.push(str);
            return;
        }

        if (even < n) {
            backtrackTheSol((even + 1), odd, (str + "("));
        }

        if (odd < n && even > odd) {
            backtrackTheSol(even, (odd + 1), (str + ")"));
        }

        return;
    }

    backtrackTheSol(1, 0, str);
    return arr;
};

let n = 3;
n = 1;

console.log(generateParenthesis(n));