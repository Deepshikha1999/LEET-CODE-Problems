/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function(s, p) {
    let sLen = s.length;
    let pLen = p.length;
    let sIndex = 0;
    let pIndex = 0;
    let starIndex = -1;
    let match = 0;
    
    while (sIndex < sLen) {
        if (pIndex < pLen && (p[pIndex] === '?' || p[pIndex] === s[sIndex])) {
            // Match current character or single character wildcard '?'
            sIndex++;
            pIndex++;
        } else if (pIndex < pLen && p[pIndex] === '*') {
            // '*' found, only advance the pattern pointer
            starIndex = pIndex;
            match = sIndex;
            pIndex++;
        } else if (starIndex !== -1) {
            // Last pattern pointer was '*', advancing string pointer
            pIndex = starIndex + 1;
            match++;
            sIndex = match;
        } else {
            // Current pattern pointer is not star, last pattern pointer was not '*'
            // Characters do not match
            return false;
        }
    }
    
    // Check for remaining characters in pattern
    while (pIndex < pLen && p[pIndex] === '*') {
        pIndex++;
    }
    
    return pIndex === pLen;
};

let s = "cb", p = "?a";
s = "", p = "******";
s = "abcabczzzde", p = "*abc???de*";

console.log(isMatch(s,p))