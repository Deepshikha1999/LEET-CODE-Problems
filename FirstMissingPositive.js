/**
 * @param {number[]} nums
 * @return {number}
 */
// var firstMissingPositive = function(nums) {
//     nums.sort((a,b)=>a-b);
//     // console.log(nums)
//     if(nums[0]>1 || nums[nums.length-1]<=0) return 1;
    
//     let n = nums[0];
//     let i = 0;
//     while(n==nums[i]||nums[i]<0){
//         i++;
//     }
//     if(i!=0)
//     i=i-1;

//     n=nums[i];
//     // console.log(n,i)
//     while(n<=nums[nums.length-1]){
//         if(n==nums[i]){
//             while(n==nums[i]){
//                 i++;
//             }
//         }
//         else if (n!=nums[i] && n>0){
//             return n;
//         }
//         n++;
//     }
//     return n;
// };
var firstMissingPositive = function(nums) {
    nums.sort((a,b)=>a-b);
    // console.log(nums)
    if(nums.indexOf(1)<0) return 1;
    
    let n = nums[nums.indexOf(1)];
    let i = nums.indexOf(1);
    while(n==nums[i]||nums[i]<0){
        i++;
    }
    if(i!=0)
    i=i-1;

    n=nums[i];
    // console.log(n,i)
    while(n<=nums[nums.length-1]){
        if(n==nums[i]){
            while(n==nums[i]){
                i++;
            }
        }
        else if (n!=nums[i] && n>0){
            return n;
        }
        n++;
    }
    return n;
};

let nums = [1,2,0];
nums = [3,4,-1,1];
nums = [7,8,9,11,12];
nums = [0,2,2,1,1];
nums = [1,2,2,1,3,1,0,4,0];
nums = [2147483647,2147483646,2147483645,3,2,1,-1,0,-2147483648];
nums = [-1,-2,-60,40,43];


console.log(firstMissingPositive(nums))