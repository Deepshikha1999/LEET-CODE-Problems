/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function (nums, target) {
    nums = nums.sort((a, b) => a - b)
    console.log(nums)
    let finalarr = [];
    fourPtrSum(nums, finalarr, [], target, 4);
    return finalarr;
};

let fourPtrSum = (nums, finalarr, temp, target, count) => {
    if (count < 2 || nums.length < count) return;
    if (count == 2) {
        let i = 0;
        let j = nums.length - 1;
        let sum = 0;
        temp.forEach(item => sum += item)
        
        while (i < j) {
            let temparr = temp;
            console.log("second",i,j)
            console.log("temp",temp)
            if (sum + nums[i] + nums[j] == target) {
                // if(temparr.length>2) continue;
                temparr = temparr.concat([nums[i], nums[j]])
                let checkSolutionExists = finalarr.some(item=> item[0]==temp[0] && item[1]==temp[1] && item[2]==nums[i] && item[3]==nums[j])
                if(!checkSolutionExists && temparr.length==4)
                finalarr.push(temparr)
                i++;
                j--;
            }
            else if (sum + nums[i] + nums[j] > target) {
                j--;
            }
            else {
                i++;
            }
        }
    }
    else {
        for (let i = 0; i < nums.length - 3; i++) {
            if (i > 0 && nums[i] == nums[i - 1]) continue;
            let j = i + 1;
            while (j < nums.length - 2) {
                let temparr = [nums[i], nums[j]];
                console.log("temparr",temparr)
                console.log("start",i,j)
                fourPtrSum(nums.slice(j + 1), finalarr, temparr, target, 2);
                j++;
            }
        }
    }
}

let nums = [-3,-2,-1,0,0,1,2,3], target =0;
console.log(fourSum(nums, target))

// let nums = [1, 0, -1, 0, -2, 2], target = 0;
// console.log(fourSum(nums, target))


let twoPtrSum = (nums,target) => {
    nums = nums.sort((a, b) => a - b)
    let i = 0;
    let j = nums.length - 1;
    let finalArr = []
    while (i < j) {
        if (nums[i] + nums[j] == target) {
            finalArr.push([nums[i], nums[j]])
            i++;
            j--;
        }
        else if (nums[i] + nums[j] > target) {
            j--;
        }
        else {
            i++;
        }
    }
    console.log(finalArr)
}