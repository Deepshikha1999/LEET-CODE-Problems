/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
// var removeElement = function(nums, val) {
//     if(nums.length==0) return 0;
//     nums.sort((a,b)=>a-b)

//     let i=nums.indexOf(val);
//     if(i==-1) return nums.length;
//     let lastindex = nums.lastIndexOf(val);
//     // console.log(i,lastindex)

//     nums.splice(i,(lastindex-i+1))
//     let count = lastindex-i+1;
//     while(count>0){
//         nums.push(val);
//         count--;
//     }
//     return nums.indexOf(val);
// };
var removeElement = function(nums, val) {
    if(nums.length==0) return 0;

    let k=0;
    for(let i = 0;i<nums.length;i++){
        if(nums[i]==val){
            nums[i]=Infinity;
            k++;
        }
    }
    nums.sort((a,b)=>a-b)
    return nums.length-k;
};

let nums = [0,1,2,2,3,0,4,2], val = 2;
// let nums = [2], val = 3;
console.log(removeElement(nums,val));
console.log(nums);