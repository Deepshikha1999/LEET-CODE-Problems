/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function (nums) {

    let k = 0;
    let i = 0;
    while (k < 3) {
        let j = i;
        while (j<nums.length && i<nums.length) {
            if(nums[j]==k){
                [nums[i],nums[j]]=[nums[j],nums[i]];
                j++;
                i++;
            }
            else{
                j++;
            }
        }
        k++;
    }
    return nums;
};

let nums = [2, 0, 2, 1, 1, 0];
// nums = [2, 0, 1];
// nums = [1,0,2];
console.log(sortColors(nums))