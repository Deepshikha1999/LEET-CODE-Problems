/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
    let maxVal = nums[0];
    let minVal = nums[0];
    let result = maxVal;
    for(let i=1;i<nums.length;i++){
        let tempVal = Math.max(nums[i],(nums[i]*maxVal),(nums[i]*minVal))
        minVal = Math.min(nums[i],(nums[i]*maxVal),(nums[i]*minVal))
        maxVal = tempVal;
        result = Math.max(maxVal,result)
    }
    return result;
};

let nums = [2,3,-2,4];
nums = [-2,0,-1];
nums = [-4,-3,-2];

console.log(maxProduct(nums))