/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
    let carry = 0;
    let sum = "";
    let an = a.length - 1;
    let bn = b.length - 1;

    while (an >= 0 || bn >= 0 || carry) {
        let a1 = an >= 0 ? parseInt(a[an]) : 0;
        let b1 = bn >= 0 ? parseInt(b[bn]) : 0;

        let total = a1 + b1 + carry;
        sum = (total % 2) + sum;
        carry = Math.floor(total / 2);

        an--;
        bn--;
    }

    return sum;
};

var a = "11", b = "1";
a = "1010", b = "1011";
a = "10100000100100110110010000010101111011011001101110111111111101000000101111001110001111100001101";
b = "110101001011101110001111100110001010100001101011101010000011011011001011101111001100000011011110011";
console.log(addBinary(a,b))


  // let an = parseInt(a,2);
    // let bn = parseInt(b,2);
    // let sum = an + bn;
    // let s = "";
    // if(sum==0) return sum.toString();
    // while(sum>0){
    //     s = sum%2 + s;
    //     sum = parseInt(sum/2);
    // }
    // return s;
