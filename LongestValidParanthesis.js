/**
 * @param {string} s
 * @return {number}
 */
var longestValidParentheses = function(s) {
    let copys = s.split("");
    let stack = [];
    let keymap = {};
    let i = s.length-1;
    while(i>=0){
        if(s[i]==")"){
            keymap[i]=0;
            stack.push(")");
        }
        else{
            if(stack[stack.length-1]==")"){
                let k = Object.keys(keymap)[0];
                copys[parseInt(k)] = "1";
                copys[i]="1";
                delete keymap[k];
                stack.pop();
            }
        }
        i--;
    }
    // console.log(copys.join(""))
    // return copys.join("");

    let longString = 0;
    let c =0;
    let j = 0;
    while(j<copys.length){
        if(copys[j]=="1"){
            c++;
            if(j==copys.length-1 && longString<c){
                longString = c;
            }
        }
        else{
            if(longString<c){
                longString = c;
            }
            c=0;
        }
        j++;
    }
    return longString;
    
};

let s = "(()";
s = ")()())";
// s = "";
// s = "()(()";

console.log(longestValidParentheses(s))