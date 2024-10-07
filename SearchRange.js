/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
    let start = 0;
    let end = nums.length-1;
    let indices = [];
    while(start<=end){
        if((start+1 == end || start == end) && (nums[start]!=target && nums[end]!=target)){
            return [-1,-1];
        }
        let pivot;
        if((start+end)%2==0){
            pivot = (start+end)/2;
        }
        else{
            pivot = (start+end-1)/2
        }
        // console.log(pivot,start,end)
        if(nums[pivot]==target){
            let startId = pivot;
            let endId = pivot;

            while(nums[startId]==target){
                if(nums[startId-1]!=target) break;
                startId--;
            }

            while(nums[endId]==target){
                if(nums[endId+1]!=target) break;
                endId++;
            }

            indices.push(startId)
            indices.push(endId)
            break;
        }
        if(nums[start]==target){
            let startId = start;
            let endId = start;
            while(nums[endId]==target){
                if(nums[endId+1]!=target)break;
                endId++;
            }
            indices.push(startId)
            indices.push(endId)
            break;
        }
        if(nums[end]==target){
            let startId = end;
            let endId = end;
            while(nums[startId]==target){
                if(nums[startId-1]!=target)break;
                startId--;
            }
            indices.push(startId)
            indices.push(endId)
            break;
        }
        else{
            if(nums[pivot]<target)
            start = pivot;

            else
            end = pivot;
        }
    }
    if(indices.length==0){
        return [-1,-1];
    }
    return indices;
};

let nums = [5,7,7,8,8,10], target = 5;
nums = [1], target = 0;
console.log(searchRange(nums,target))