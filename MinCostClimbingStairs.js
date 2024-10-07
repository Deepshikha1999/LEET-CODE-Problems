/**
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs = function (cost) {
    let n = cost.length;
    for(let i=2;i<n;i++){
        cost[i] = cost[i] + Math.min(cost[i-1],cost[i-2])
    }

    return Math.min(cost[n-1],cost[n-2])
};

let cost = [1, 100, 1, 1, 1, 100, 1, 1, 100, 1];
cost = [10, 15, 20];
console.log(minCostClimbingStairs(cost));
