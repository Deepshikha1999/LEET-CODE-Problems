/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {string[]}
 */
var wordBreak = function (s, wordDict) {
    let wordMap = {};

    for (let x of wordDict) {
        if (!wordMap[x[0]]) {
            wordMap[x[0]] = [];
        }
        wordMap[x[0]].push(x);
    }
    // console.log(wordMap)
    let finalArr = [];

    let backTrackWord = (temp, str) => {
        // console.log(temp,str)
        if (!temp || temp.length === 0) {
            finalArr.push(str);
            return;
        }
        if(!wordMap[temp[0]]) return;
        for (let x of wordMap[temp[0]]) {
            if (temp.substring(0, x.length) !== x) {
                continue;
            }
            let tstr = str.length===0?(x):(str + " " + x);
            let ttemp = temp.substring(x.length, s.length);
            backTrackWord(ttemp, tstr);
        }
        return;
    }
    if (wordMap[s[0]] && wordMap[s[0]].length != 0) {
        backTrackWord(s, "");
    }
    return finalArr;
};

let s = "catsanddog", wordDict = ["cat", "cats", "and", "sand", "dog"];
s = "catsandog", wordDict = ["cats", "dog", "sand", "and", "cat"]
console.log(wordBreak(s, wordDict))