/**
 * @param {number} n
 * @return {number[]}
 */
var countBits = function (n) {
    let finalArr = [0];
    for (let i = 1; i <= n; i++) {
        //right shift
        let binaryN = i.toString(2);
        let ifZeroOrOne = binaryN[binaryN.length - 1] == 0 ? 0 : 1;
        finalArr.push(finalArr[i >> 1] + ifZeroOrOne)
    }

    return finalArr;
};

console.log(countBits(5))