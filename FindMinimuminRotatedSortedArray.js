/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
    if(nums.length==0) return null;
    let n = nums.length;
    let i=0;
    let j=n-1;
    while(nums[j]<=nums[i] && i!=j){
        // console.log(i,j)
        if(nums[i] === nums[j]){
            i++;
        }
        else{
            i++;
            if(nums[j]>=nums[j-1])
            j--;
        }
    }
    return nums[i]
};

let nums = [3,4,5,1,2];
// nums = [4,5,6,7,0,1,2];
// nums = [11,13,15,17];
// nums = [1];
// nums = [3,1,2];
// nums = [1,3,5];
// nums = [2,2,2,0,1];
// nums = [3,1,3];
console.log(findMin(nums))