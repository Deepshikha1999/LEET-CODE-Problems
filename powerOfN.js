/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function(x, n) {
    if(x==1) return 1;
    if(x==-1 && Math.abs(n)%2==0) return 1;
    if(x==-1 && Math.abs(n)%2!=0) return -1;
    let value = 1;
    if(n<0) x=1/x;
    if(n%2==0 && x<0) x= Math.abs(x);

    n = Math.abs(n);
    let i=0;
    let j=1;
    while(j<=n){
        // console.log(j);
        if(i==0)value = x;
        else  value *=value;
        i++;
        j=Math.pow(2,i);
    }
    let remainingOccurance = n-Math.pow(2,(i-1));
    // console.log(remainingOccurance)
    while(remainingOccurance>0){
        value*=x;
        remainingOccurance--;
    }
    return value.toFixed(5);
};

let x = 2.00000, n = 10;
x = 2.10000, n = 3;
// x = 2.00000, n = -2;
// x = 2.00000, n = 2147483648;

console.log(myPow(x,n))