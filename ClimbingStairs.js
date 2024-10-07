/**
 * @param {number} n
 * @return {number}
 */
// let total = 0;
// var climbStairs = function(n) {
//     total = 0;
//     countWays(0,n);
//     return total;
// };

// let countWays = (currentValue,n)=>{
//     if(currentValue==n) 
//     {
//         total++;
//         return;
//     }
//     else if(currentValue>n){
//         return;
//     }
//     else{
//         countWays((currentValue+1),n);
//         countWays((currentValue+2),n);
//         return;
//     }
// }

var climbStairs = function(n) {
    if (n <= 1) {
        return 1;
    }
    let dp = new Array(n + 1);
    dp[0] = 1;
    dp[1] = 1;
    for (let i = 2; i <= n; i++) {
        dp[i] = dp[i - 1] + dp[i - 2];
    }
    return dp[n];
};
let n = 2;
n = 3;
n = 44;
console.log(climbStairs(n))
