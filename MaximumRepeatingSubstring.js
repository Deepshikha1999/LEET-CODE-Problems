/**
 * @param {string} sequence
 * @param {string} word
 * @return {number}
 */
var maxRepeating = function (sequence, word) {
    let maxCount = 0;
    let wordRepeat = word;
    while (sequence.includes(wordRepeat)) {
        maxCount++;
        wordRepeat += word;
    }
    return maxCount;
};

let sequence = "ababc", word = "ab";
sequence = "ababc", word = "ba";
sequence = "ababc", word = "ac";
sequence = "a", word = "a";
sequence = "aaabaaaabaaabaaaabaaaabaaaabaaaaba", word = "aaaba";
console.log(maxRepeating(sequence, word));