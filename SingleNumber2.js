/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    nums = nums.sort();
    console.log(nums)
    for(let i=3;i<nums.length;i=i+3){
        if(nums[i-3]!=nums[i-1])
        return nums[i-3];
    }
    return nums[nums.length-1];
};

let nums = [2,2,3,2];
// nums = [0,1,0,1,0,1,99];
// nums = [1];
nums = [-2,-2,1,1,4,1,4,4,-4,-2];
console.log(singleNumber(nums))