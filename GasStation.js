/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
// var canCompleteCircuit = function (gas, cost) {
//     let n = gas.length;
//     for (let i = 0; i < n; i++) {
//         if (gas[i] < cost[i]) {
//             continue;
//         }
//         else {
//             let f = gas[i]-cost[i];
//             let k = i == (n - 1) ? 0 : (i + 1);
//             let next = true;
//             while (k != i) {
//                 f += gas[k];
//                 if (f < cost[k]) {
//                     next = false;
//                     break;
//                 }
//                 f -= cost[k];
//                 if (k == (n - 1)) k = 0;
//                 else k++;
//             }

//             if (!next) continue;
//             else return i;
//         }
//     }
//     return -1;
// };

var canCompleteCircuit = function (gas, cost) {
    let n = gas.length;
    let f = 0;
    let x = -1;
    for (let i = 0; i < n; i++) {
        // if (gas[i] < cost[i] || (i>0 && gas[i-1]==gas[i] && cost[i-1]==cost[i])) {
        //     continue;
        // }
        // else {
        //     let f = gas[i]-cost[i];
        //     let k = i == (n - 1) ? 0 : (i + 1);
        //     let next = true;
        //     while (k != i) {
        //         f += gas[k];
        //         if (f < cost[k]) {
        //             next = false;
        //             break;
        //         }
        //         f -= cost[k];
        //         if (k == (n - 1)) k = 0;
        //         else k++;
        //     }

        //     if (!next) continue;
        //     else return i;
        // }
        f +=  gas[i]-cost[i];
        if(f<0) x = i+1;
    }
    return f<0?-1:(x-1);
};
let gas = [1, 2, 3, 4, 5], cost = [3, 4, 5, 1, 2];
// gas = [2, 3, 4], cost = [3, 4, 3];
console.log(canCompleteCircuit(gas, cost))