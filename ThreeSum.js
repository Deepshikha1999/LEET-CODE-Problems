var threeSum = function(nums) {
    nums = nums.sort((a, b) => a - b)
    // console.log(nums)
    let soltuionList = []
    for(let i=0;i<nums.length-2;i++){
        let j= i+1;
        let k= nums.length-1;
        while (j < k) {
            let sum = nums[i]+nums[j]+nums[k];
            if (sum == 0) {
                // console.log(i,j,k)
                // console.log(nums[i],nums[j],nums[k])
                let checkSolutionExists = soltuionList.some(item=> item[0]==nums[i] && item[1]==nums[j] && item[2]==nums[k])
                if(!checkSolutionExists)
                soltuionList.push([nums[i], nums[j], nums[k]]);
                k--;
                j++;
            }
            else{
               if(Math.abs(nums[j]+nums[i])<Math.abs(nums[k])){
                    k--;
               }
                else{
                    j++;
                }
            }
        }
    }
   return soltuionList;
};

let nums = [-1,0,1,2,-1,-4];
// threeSum(nums);

// nums = [0,1,1];
// threeSum(nums);

// nums=[0,0,0,0];
// threeSum(nums);

// nums=[-1,0,1,2,-1,-4,-2,-3,3,0,4];
nums = [-4,-2,1,-5,-4,-4,4,-2,0,4,0,-2,3,1,-5,0];
console.log(threeSum(nums))


//[ -5, -5, -4, -4, -4, -2, -2, -2,  0,  0,  0,  1, 1,  3,  4,  4 ]