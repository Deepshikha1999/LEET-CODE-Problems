/**
 * @param {number[]} nums
 * @param {number} target
 * @return {boolean}
 */
var search = function(nums, target) {
    
    let i = 1;
    let k = 0;
    while(i<nums.length && nums[k]<=nums[i]){
        i++;
        k++;
    }
    console.log(i,k)

    let leftArr = nums.slice(0,(k+1));
    console.log(leftArr)
    if(checkNumberInArr(leftArr,target)) return true;

    let rightArr = nums.slice((k+1),nums.length).sort((a,b)=>a-b);
    console.log(rightArr)
    if(checkNumberInArr(rightArr,target)) return true;

    return false;
    
};

let checkNumberInArr = (arr,target)=>{
    if(arr.length==0) return false;
    if(arr.length == 1) return target==arr[0];

    let mid = Math.floor(arr.length/2==0);
    if(arr[mid]==target) return target==arr[mid];

    else if(arr[mid]<target){
        return checkNumberInArr(arr.slice((mid+1),arr.length),target);
    }

    else if(arr[mid]>target){
        return checkNumberInArr(arr.slice(0,mid),target);
    }
}

nums = [2,5,6,0,0,1,2], target = 0;
// nums = [0,0,1,2,2,5,6], target = 0;
// nums = [0,1,2,2,5,6,0], target = 0;
nums = [6,5,2,2,1,0,0], target = 0;
// nums = [2,5,6,0,0,1,2], target = 3;
// nums = [1,0,1,1,1], target = 0;

console.log(search(nums,target))
