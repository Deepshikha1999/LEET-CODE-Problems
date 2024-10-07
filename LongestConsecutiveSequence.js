/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
    if(nums.length==0) return 0;
    nums.sort((a,b)=>a-b);
    let count = 1;
    let max =0;
    for(let i=1;i<nums.length;i++){
        if(nums[i]==nums[i-1])continue;
        if(nums[i]==(nums[i-1]+1)){
            count++;
        }
        else{
            max = Math.max(count,max);
            count = 1;
        }
    }
    max = Math.max(count,max);
    return max;
};

let nums = [100,4,200,1,3,2];
nums = [0,3,7,2,5,8,4,6,0,1];
nums = [1,2,0,1];

console.log(longestConsecutive(nums))