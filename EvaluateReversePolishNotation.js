/**
 * @param {string[]} tokens
 * @return {number}
 */

const OPERATORS = ["+", "-", "/", "*"];
var evalRPN = function (tokens) {
    let stack = [];
    stack[0] = tokens[0];
    let i = 1;
    while (i < tokens.length) {
        if (OPERATORS.includes(tokens[i])) {
            // pop 2, push 1
            let var1 = stack.pop();
            let var2 = stack.pop();
            let val;
            if (tokens[i] === '+') {
                val = parseInt(var1) + parseInt(var2);
            }

            if (tokens[i] === '-') {
                val = parseInt(var2) - parseInt(var1);
            }

            if (tokens[i] === '/') {
                val = parseInt(var2) / parseInt(var1);
            }

            if (tokens[i] === '*') {
                val = parseInt(var1) * parseInt(var2);
            }
            stack.push(val);
        }
        else {
            // push 
            stack.push(tokens[i]);
        }
        i++;
    }
    return stack[0];
};

let tokens = ["2", "1", "+", "3", "*"];
tokens = ["4","13","5","/","+"];
tokens = ["10","6","9","3","+","-11","*","/","*","17","+","5","+"];

console.log(evalRPN(tokens))