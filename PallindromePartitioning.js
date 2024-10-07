/**
 * @param {string} s
 * @return {number}
 */
var minCut = function(s) {
    const n = s.length;
    if (n === 0) return 0;

    // dp[i] will be the minimum cut needed for a palindrome partitioning of substring s[0..i]
    const dp = Array(n).fill(0);
    // pal[i][j] will be true if substring s[i..j] is a palindrome
    const pal = Array.from({ length: n }, () => Array(n).fill(false));

    for (let i = 0; i < n; i++) {
        let minCuts = i; // maximum cuts needed
        for (let j = 0; j <= i; j++) {
            if (s[i] === s[j] && (i - j < 2 || pal[j + 1][i - 1])) {
                pal[j][i] = true;
                // if s[0..j-1] is a palindrome, no cuts needed for this part
                minCuts = j === 0 ? 0 : Math.min(minCuts, dp[j - 1] + 1);
            }
        }
        dp[i] = minCuts;
    }

    return dp[n - 1];
};

// Test cases
console.log(minCut("aab")); // Output: 1
console.log(minCut("a"));   // Output: 0
console.log(minCut("ab"));  // Output: 1
