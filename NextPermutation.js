/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */

/**
 * return next permutation in new array
 * @param {*} nums 
 * @returns 
 * var nextPermutation = function(nums) {
    if(nums.length==1){
        return nums;
    }
    let i=nums.length-2;
    // console.log(i)
    while(i>=0){
        let subArray = nums.slice(i,nums.length);
        let sortedSubArray = nums.slice(i,nums.length).sort((a,b)=>b-a);
        // console.log(i,subArray,sortedSubArray)
        let checkIfSame=true;
        for(let i=0;i<subArray.length;i++){
            if(subArray[i]!=sortedSubArray[i])
            {
                checkIfSame=false;
                break;
            }
        }
        // console.log(checkIfSame)
        if(checkIfSame){
            if(nums.length==subArray.length){
                nums.sort((a,b)=>a-b);
                return nums;
            }
            else
            i--;
        }
        else{
            let finalArr = [];
            finalArr = finalArr.concat(nums.slice(0,i))
            finalArr = finalArr.concat(sortedSubArray);
            return finalArr;
        }
    }
};
 */
/**
 * modifying an existing array to give next permutation
 * @param {} nums 
 * @returns 
 */
var nextPermutation = function(nums) {
    if(nums.length==1){
        return nums;
    }
    let i=nums.length-2;
    while(i>=0 && nums[i]>=nums[i+1]){
        i--;
    }

    if(i==-1){
        nums.sort((a,b)=>a-b)
    }
    else{
        console.log(i)
        let j=i+1;
        let temp;
        while(j<nums.length){
            if(!temp){
                if(nums[i]<nums[j]){
                    temp = j;
                }
            }
            else{
                if(nums[i]<nums[j] && nums[temp]> nums[j])
                temp = j
            }
            j++;
        }
        [nums[i],nums[temp]] = [nums[temp],nums[i]];//swap temp and i positions

        //better the sorting algortihm faster the calculation
        i = i + 1;
        while (i < nums.length - 1) {
            let left = i + 1;
            while (left < nums.length) {
                if (nums[i] > nums[left]) {
                    [nums[i], nums[left]] = [nums[left], nums[i]];//swap left and i positions
                }
                left++;
            }
            i++;
        }
    }
};

let nums = [1,2,3];
// nums = [3,2,1];
// nums = [1,1,5];
// nums= [1,3,2];
// nums=[2,3,1];
nums = [2,3,1,3,3];
// nums = [2,1,2,2,2,2,2,1]
console.log(nums)
nextPermutation(nums)
console.log(nums)