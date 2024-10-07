var search = function(nums,target){
    if(!nums.includes(target)) return -1;

    //find the pivot
    let pivot = 0;
    for(let  i =1;i<nums.length;i++){
        if(nums[i]< nums[pivot]){
            pivot = i;
            break;
        }
    }
    // console.log(pivot)
    return BinarySearch(nums,target,pivot,0,nums.length-1,true)
}

let BinarySearch = (nums, target, pivot, start, end,onlyonce) => {
    // console.log(pivot, start, end)
    if (pivot <= -1 || end <= -1 || start <= -1) return -1;
    if (nums[pivot] == target) return pivot;
    else if (nums[start] == target) return start;
    else if (nums[end] == target) return end;

    if(start == 0 && end == nums.length-1 && onlyonce){
    // console.log("1",pivot, start, end)

        if (nums[end] < target) {
            end = pivot;
        }
        else{
            start = pivot;
        }
        // console.log("1A",pivot, start, end)
    }
    
    else{
    // console.log("2",pivot, start, end)

        if(nums[pivot]<target){
            start = pivot;
        }
        else{
            end = pivot;
        }
    }
    if((start+end) %2==0){
        pivot = (start+end)/2;
    }
    else{
        pivot = (start+end+1)/2;
    }

    return BinarySearch(nums, target, pivot, start, end,false);
}


let nums = [3,4,5,6,7,1,2];
let target = 4;

// nums = [1,2,3,4,5,6], target = 4;
nums = [1,2,3,4,5,6,7,8], target = 4;


console.log(search(nums,target))