let mapDecode = {
    "1": "A", "2": "B", "3": "C", "4": "D", "5": "E", "6": "F", "7": "G", "8": "H", "9": "I", 
    "10": "J", "11": "K", "12": "L", "13": "M", "14": "N", "15": "O", "16": "P", "17": "Q", 
    "18": "R", "19": "S", "20": "T", "21": "U", "22": "V", "23": "W", "24": "X", "25": "Y", "26": "Z"
};

/**
 * @param {string} s
 * @return {number}
 */
var numDecodings = function (s) {
    let memo = {};
    return decoderWays(s, 0, memo);
};

let decoderWays = (s, i, memo) => {
    if (i in memo) return memo[i];
    if (i === s.length) return 1;
    if (s[i] === "0") return 0;

    let count = 0;
    
    // Check single digit
    if (mapDecode[s[i]]) {
        count += decoderWays(s, i + 1, memo);
    }

    // Check two digits
    if (i + 1 < s.length && mapDecode[s[i] + s[i + 1]]) {
        count += decoderWays(s, i + 2, memo);
    }

    memo[i] = count;
    return count;
}

// Test cases
let s1 = "12"; // Output: 2 ("AB", "L")
let s2 = "226"; // Output: 3 ("BZ", "VF", "BBF")
let s3 = "06"; // Output: 0 (Invalid encoding)
let s4 = "111111111111111111111111111111111111111111111"; // Output: Number of ways to decode

console.log(numDecodings(s1));
console.log(numDecodings(s2));
console.log(numDecodings(s3));
console.log(numDecodings(s4));