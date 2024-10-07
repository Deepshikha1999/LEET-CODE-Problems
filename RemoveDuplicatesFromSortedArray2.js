/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let i=0;
    let j=1;
    let count = 1;
    while(i<j && j<nums.length){
        if(nums[i]==nums[j]){
            if(count<2){
                count++;
            }
            else{
                nums[j] = "_";
            }
            j++;
        }
        else{
            let firstIndex = nums.indexOf("_");
            let lastIndex = j-1;
            let diff = firstIndex==-1?-1:lastIndex-firstIndex+1;
            if(diff>-1){
                let k = firstIndex;
                for(k;k<nums.length-diff;k++)
                nums[k]=nums[k+diff];

                for(k;k<nums.length;k++)
                nums[k]="_";
                count = 1;
                i=firstIndex;
                j=i+1;
            }
            else{
                count = 1;
                i=j;
                j++;
            }
        }
    }
    let indexOfDash = nums.indexOf("_")==-1? nums.length:nums.indexOf("_");
    return nums.slice(0,indexOfDash).length;

};

let nums = [1,1,1,2,2,3];
// nums = [0,0,1,1,1,1,2,3,3];
// nums = [1];
nums = [0,0,0,0,0];
nums = [1,1,1,2,2,2,3,3];
console.log(removeDuplicates(nums))
console.log(nums)