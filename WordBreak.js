/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function (s, wordDict) {
    let arr = new Array(s.length+1).fill(false);
    arr[0] = true;
    let set = new Set(wordDict);

    for(let i=1;i<arr.length;i++){
        for(let j=0;j<i;j++){
            if(arr[j] && set.has(s.substring(j,i))){
                arr[i] = true;
                break;
            }
        }
    }
    return arr[s.length];
};

let s = "leetcode", wordDict = ["leet", "code"];
// s = "applepenapple", wordDict = ["apple", "pen"];
s = "catsandog", wordDict = ["cats","dog","sand","and","cat"];
// s = "ddadddbdddadd", wordDict = ["dd", "ad", "da", "b"];
// s = "bb", wordDict = ["a","b","bbb","bbbb"];
console.log(new Set(wordDict))
console.log(wordBreak(s, wordDict))