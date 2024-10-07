/**
 * @param {string} s1
 * @param {string} s2
 * @param {string} s3
 * @return {boolean}
 */
var isInterleave = function (s1, s2, s3) {
    if (s1 + s2 === s3) return true;
    if (s3.length < (s1.length + s2.length)) return false;
    
    // let dp = Array.from({ length: s1.length }, () => Array(s2.length).fill(""));
    // return dp;
};

let s1 = "aabcc", s2 = "dbbca", s3 = "aadbbcbcac";
s1 = "aabcc", s2 = "dbbca", s3 = "aadbbbaccc";
s1 = "", s2 = "", s3 = "";
s1 = "aa", s2 = "ab", s3 = "aaba";
s1 = "aabc", s2 = "abad", s3 = "aabacbad";

console.log(isInterleave(s1, s2, s3))