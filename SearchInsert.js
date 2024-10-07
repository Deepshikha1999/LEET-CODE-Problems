/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    let start = 0;
    let end = nums.length-1;
    while(start<=end){
        let pivot = Math.floor((start+end)/2);
        if(nums[pivot]==target) return pivot;
        else{
            if(nums[pivot]<target)
            start = pivot+1;

            else
            end = pivot-1;
        }
    }
    return end+1;
};

let nums = [1,3,5,6], target = 5;

nums = [1,3,5,6], target = 2;

nums = [1,3,5,6], target = 7;
nums = [1,3,5,6], target = 4;

console.log(searchInsert(nums,target))