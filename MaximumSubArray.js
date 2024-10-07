/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    let max_sum = nums[0];
    let n = nums.length;
    let i = 1;
    let curr_sum = nums[0];
    while(i<n){
        if(curr_sum<0)
        {
            curr_sum = nums[i];
        }
        else{
            curr_sum+=nums[i];
            
        }
        max_sum = Math.max(max_sum,curr_sum);
        i++;
    }
    return max_sum;
    
};

let nums = [-2,1,-3,4,-1,2,1,-5,4];
// nums = [1];
// nums = [5,4,-1,7,8];
// nums = [1,2];
// nums = [8,-19,5,-4,20];
console.log(maxSubArray(nums))