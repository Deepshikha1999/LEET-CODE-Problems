/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
    let sets = [[]];
    subsetCollections(nums,[],sets);
    return sets;
};

let subsetCollections = (nums,temparr,sets)=>{
    if(nums.length<=0) return;
    for(let i=0;i<nums.length;i++){
        let tarr = [...temparr];
        tarr.push(nums[i]);
        sets.push(tarr);
        subsetCollections(nums.slice(i+1,nums.length),tarr,sets);
    }
    return;
}

let nums = [1,2,3];
console.log(subsets(nums))
