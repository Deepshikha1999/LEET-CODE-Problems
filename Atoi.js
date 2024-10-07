// let regex = /[a-zA-Z]/;

// console.log(("words and 987").replace(/[a-zA-Z]/g,""))
// console.log(("4193 with words").indexOf(/[a-zA-Z]/))
// console.log(("words and 987").indexOf(/[a-zA-Z]/))
// console.log("9"-"0")

//let str = "-91283472332";
//let str = "4193 with words";
//let str = "words and 987";
//let str = "+-12";
let str = "   +0 123";

/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function (s) {
    if(/[a-zA-Z]/.test(s[0])) return 0;
    s = s.trim();
    let sign = 1;
    if(s[0]=="+"){
        if(s[1]=="-") return 0;
        else s = s.replace("+","");
    }
    if(s[0]=="-"){
        if(s[1]=="+") return 0;
        else {
            s = s.replace("-","");
            sign = -1;
        }
    }
    let i = 0;
    let num = 0;
    while (i < s.length) {
        console.log(s[i])
        if (s[i] <= "9" && s[i] >= "0"){
            num = num * 10 + (s[i] - "0");
        }
        else{
            break;
        }
        ++i;
    }
    num = num * sign;
    num = Math.min(Math.max(-(2 ** 31), num), (2 ** 31 - 1))
    return num;
};

console.log(myAtoi(str))
