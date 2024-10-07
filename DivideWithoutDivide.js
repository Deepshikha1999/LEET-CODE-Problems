/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
/**
 * simple direct approach of division by subsrtacting
 * @param {*} dividend 
 * @param {*} divisor 
 * @returns 
 * var divide = function (dividend, divisor) {
    let sign = (dividend<0 && divisor<0) || (dividend>0 && divisor>0)? 1:-1;
    let k = 0;
    while (Math.abs(dividend) >= Math.abs(divisor)) {
        dividend = Math.abs(dividend) - Math.abs(divisor)
        k++;
    }
    if(k>Math.pow(2,31)-1) k = Math.pow(2,31)-1;
    let result = k * sign; 
    return result;
};
 */

/**
 * Bitwise division
 * */
var divide = function (dividend, divisor) {
    if(dividend == 0) return 0;
    if(divisor == 0) return NaN;
    
    let sign = (dividend<0 && divisor<0) || (dividend>0 && divisor>0)? 1:-1;
    if(Math.abs(dividend)==Math.abs(divisor)) return sign;
    let k=0;
    let absdividend=Math.abs(dividend);
    let absdivisor=Math.abs(divisor);
   
    if(Math.abs(dividend)==Math.pow(2,31) && sign==1 && Math.abs(divisor)==1) return sign*(absdividend-1);
    let rem=0;
    let temp = absdividend;
    let n=0;
    let tempdivisor = absdivisor;
    if(temp==1){
        n=1;
    }
    else {
        while (temp > 1) {
            temp = Math.floor(temp / 2);
            n++;
        }
        if(n==31) n=30;
        while(tempdivisor>1){
            if(tempdivisor%2!=0)
            rem = tempdivisor%2;
            tempdivisor = parseInt(tempdivisor/2);
            n--;
        }
    }
    for(n;n>=0;n--){
        if((absdivisor<<n)<=absdividend){
            absdividend -= (absdivisor << n);
            k+=(1<<n);
        }
    }
    if(Math.abs(dividend)==Math.pow(2,31) && sign==-1 && (rem==0 || absdivisor==1 || absdivisor==2)) {
        return k*sign-1;
    };

    return k*sign;
};
/**
 * 2 power division
 * var divide = function (dividend, divisor) {
    const MAX = 2 ** 31 - 1;
    if (dividend === -MAX - 1 && divisor === -1) return MAX;

    var isPositive = true;
    if (dividend > 0 !== divisor > 0) isPositive = false;

    dividend = Math.abs(dividend);
    divisor = Math.abs(divisor);

    let result = 0
    while (dividend >= divisor) {
        let value = divisor;
        let multiple = 1;

        while (value * 2 <= dividend) {
            value *= 2;
            multiple *= 2;
        }

        dividend -= value;
        result += multiple;
    }

    if (!isPositive) result = -result;

    return result;
};
 */

let dividend = 10, divisor = -3;
// dividend = 27, divisor = 7;
// dividend = -2147483648, divisor = -1;
// dividend = 1, divisor = 1;
// dividend = -2147483648, divisor = 122481295;
// dividend = -2147483648, divisor = 1262480350;
// dividend = -2147483648, divisor = 4;
dividend = -2147483648, divisor = -2147483647;
console.log(divide(dividend,divisor))
console.log(parseInt(dividend/divisor))

