/**
 * @param {string} s
 * @return {boolean}
 */

let openClosMap = {
    "[":"]",
    "{":"}",
    "(":")",
}
var isValid = function(s) {
    if(!openClosMap[s[0]] || s.length==1) return false;

    let stack = [];
    for(let i=s.length-1;i>=0;i--){
        if(!openClosMap[s[i]])
        {
            stack.push(s[i]);
            // console.log("push",stack)
        }
        else{
            if(stack.length==0)
            return false;

            if(stack[stack.length-1] == openClosMap[s[i]])
            stack.pop();

            else{
               return false;
                // console.log("push2",stack)
            }
            // console.log("pop",stack)
        }
    }

    if(stack.length==0){
        return true;
    }
    else{
        return false;
    }
};

let s = "()[]{}";
console.log(isValid(s));

s = "(]";
console.log(isValid(s));

s = "({[)";
console.log(isValid(s))