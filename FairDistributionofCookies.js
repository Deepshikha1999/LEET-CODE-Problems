/**
 * @param {number[]} cookies
 * @param {number} k
 * @return {number}
 */
var distributeCookies = function (cookies, k) {
    let sum = cookies.reduce((a, b) => a + b);
    let avg = Math.ceil(sum / k);

    let min = Infinity;
    let val = 0;
    // let distribute = (x, temp , n,val,min) => {
    //     if (x == cookies.length) {
    //         let diff = Math.abs(sum - temp);
    //         if (diff < min) {
    //             min = diff;
    //             val = temp;
    //         }
    //         return;
    //     }

    //     for (let i = x; i < x+3; i++){
    //         distribute((i+1),(temp+cookies[i]),(n-1),val,min)
    //     }
    // }

    // distribute(0,0,k,);
};

let cookies = [8, 15, 10, 20, 8], k = 2;

console.log(distributeCookies(cookies));