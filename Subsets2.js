/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function(nums) {
    let arr = [[]];
    let map = {};
    let n = nums.length;
    subsets(nums,arr,[],n,map);
    return arr;
};

let subsets = (nums,arr,temp,n,map)=>{
    if(nums.length<=0) return;

    if(temp.length>=n) return;

    for(let i=0;i<nums.length;i++){
        if(i!=0 && nums[i]===nums[i-1]) continue;
        let t = [...temp];
        t.push(nums[i]);
        if(map.hasOwnProperty(t.sort().join(""))) continue;
        map[t.sort().join("")] = true;
        arr.push(t);
        subsets(nums.slice(i+1,nums.length),arr,t,n,map);
    }
    return;
}

let nums = [1,2,2];
nums = [0];
nums = [4,4,4,1,4];
console.log(subsetsWithDup(nums))