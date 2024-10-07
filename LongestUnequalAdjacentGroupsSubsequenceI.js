/**
 * @param {string[]} words
 * @param {number[]} groups
 * @return {string[]}
 */
var getLongestSubsequence = function(words, groups) {
    let s = [words[0]];
    let p =0;
    let i = 1;
    while(i<words.length){
        if(groups[i]!=groups[p])
        {
            s.push(words[i]);
            p=i;
        }
        i++;
    }
    return s;
};

let words = ["e","a","b"], groups = [0,0,1];
console.log(getLongestSubsequence(words,groups));
