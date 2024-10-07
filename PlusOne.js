/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    let carry=0;
    for(let i=digits.length-1;i>=0;i--){
        digits[i]=digits[i]+1;
        if(digits[i]<=9) return digits;
        else {
            carry = 1;
            digits[i] = 0;
        }
    }
    if(carry) digits.splice(0, 0, carry);
    return digits;
};

let digits = [6,1,4,5,3,9,0,1,9,5,1,8,6,7,0,5,5,4,3];
digits = [8,9,9,9];
console.log(plusOne(digits))