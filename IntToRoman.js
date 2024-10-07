/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function (num) {
    let mapToRoman = {
        1: "I",
        4: "IV",
        5: "V",
        9: "IX",
        10: "X",
        40: "XL",
        50: "L",
        90: "XC",
        100: "C",
        400: "CD",
        500: "D",
        900: "CM",
        1000: "M"
    }

    if (mapToRoman[num])
        return mapToRoman[num]

    //Rule 1: no more than 3 repetition
    //Rule 2: order is from Left to Right

    let str = num + "";
    console.log(str)

    let finalStr = "";
    for (let i = 0; i < str.length; i++) {
        let decNum = str.length - (i + 1);
        let n = parseInt(str[i]) * Math.pow(10, decNum);
        if (mapToRoman[n]) {
            finalStr = finalStr + mapToRoman[n];
        }
        else {
            let defaultLowerRange = parseInt(Math.pow(10, decNum));
            let lowerRange = parseInt(Math.pow(10, decNum))
            let upperRange = parseInt(Math.pow(10, decNum + 1))
            let midRange = upperRange / 2;
            if (midRange < n) {
                lowerRange = midRange;
            }

            if (n < midRange) {
                upperRange = midRange;
            }
            let temp = n;
            while (temp > 0) {
                if (temp < lowerRange)
                    lowerRange = defaultLowerRange;
                finalStr = finalStr + mapToRoman[lowerRange];
                temp = temp - lowerRange;
            }
        }
    }
    return finalStr;
};


intToRoman(3749)
intToRoman(58)
intToRoman(1994)