/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    nums = nums.sort();
    for(let i=2;i<nums.length;i=i+2){
        if(nums[i-2]!=nums[i-1])
        return nums[i-2];
    }
    return nums[nums.length-1];
};

let nums = [2,2,1];
nums = [4,1,2,1,2];
// nums = [1];
console.log(singleNumber(nums))