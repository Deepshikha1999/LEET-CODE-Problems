/**
 * @param {string} s
 * @return {boolean}
 */
var isNumber = function(s) {
    return /^[\+-]?(\d+(\.\d*)?|\.\d+)([Ee][\+-]?\d+)?$/.test(s)
};

let s = "0089";
console.log(isNumber(s))