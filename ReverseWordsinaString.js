/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    return s.split(" ").filter(item=>item!="").reverse().join(" ");
};

let s = "the sky is blue";
// s = "  hello world  ";
// s = "a good   example";
console.log(reverseWords(s))