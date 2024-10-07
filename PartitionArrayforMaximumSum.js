/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */
var maxSumAfterPartitioning = function (arr, k) {
    // let maxVal = 0;
    // let tx = 0;
    // let methodToPart = (x, temp) => {
    //     if (x >= arr.length-1) {
    //         tx++;
    //         if (maxVal < temp)
    //             maxVal = temp;
    //         return;
    //     }
    //     else {
    //         let t = [];
    //         let max = 0;
    //         for (let i = x; i < (x + k) && i < arr.length; i++) {
    //             if (max < arr[i]) max = arr[i];
    //             t.push(arr[i]);
    //             let tA = temp + (max * t.length);
    //             methodToPart((i + 1), tA);
    //         }
    //     }
    // }

    // methodToPart(0,0);
    // console.log(tx)
    // return maxVal;

    let n = arr.length;
    let dp = new Array(n).fill(0);

    for (let i = 0; i < n; i++) {
        let max = 0;
        for (let j = 1; j <= k && (i - j + 1) >= 0; j++) {
            max = Math.max(max, arr[i - j + 1]);
            dp[i] = Math.max(dp[i], ((i >= j ? dp[i - j] : 0) + (max * j)))
        }
    }
    return dp[n - 1];
};

let arr = [1, 15, 7, 9, 2, 5, 10], k = 3;
// arr = [1, 4, 1, 5, 7, 3, 6, 1, 9, 9, 3], k = 4;
// arr = [1], k = 1;
arr = [20779,436849,274670,543359,569973,280711,252931,424084,361618,430777,136519,749292,933277,477067,502755,695743,413274,168693,368216,677201,198089,927218,633399,427645,317246,403380,908594,854847,157024,719715,336407,933488,599856,948361,765131,335089,522119,403981,866323,519161,109154,349141,764950,558613,692211];
k = 26;

console.log(maxSumAfterPartitioning(arr, k))

// let n = arr.length;
// let dp = Array.from({length: k},()=>Array(n).fill(0))
// for(let i=0;i<n;i++){
//     for(let j=1;j<=k;j++){
//         let temp = arr.slice(i,i+j);
//         dp[j-1][i] = Math.max(...temp)*temp.length;
//     }
// }
// console.log(dp)
// let tdp = Array.from({length: n},()=>Array(n).fill(0))
// for(let i=0;i<n;i++){
//     for(let j=1;j<=k;j++){
//         let temp = arr.slice(i,i+j);
//         tdp[i][i+j] = Math.max(...temp)*temp.length;
//     }
// }
// console.log(tdp)