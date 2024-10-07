/**
 * @param {number[]} nums
 * @return {number}
 */
// var removeDuplicates = function(nums) {
//     if(nums.length==0) return 0;

//     let index = 1;
//     let lastNum = nums[nums.length-1];
//     while(index<nums.length){
//         if(nums[index-1]==nums[index] && typeof(nums[index])==='number'){
//             // console.log(index,nums[index],nums[index-1])
//             nums.splice(index,1);
//             // console.log("before",nums);
//             nums.push("_");
//             // console.log("after",nums);
//         }
//         else
//         index++;
//     }
   
//     return (nums.indexOf(lastNum)+1)
// };

var removeDuplicates = function(nums) {
    if(nums.length==0) return 0;

    let index = 1;
   for(let i=1;i<nums.length;i++){
        if(nums[index-1]!==nums[i]){
            nums[index]=nums[i];
            index++;
        }
    }
    return index;
};


let nums = [1,1,2];
// let k =removeDuplicates(nums)
// console.log(k)
// console.log(nums)

nums = [0,0,1,1,1,2,2,3,3,4];
k =removeDuplicates(nums)
console.log(k)
console.log(nums)


   // let stack = nums;
    // nums = [];
    // for(let i=0;i<stack.length;i++){
    //     if(nums.length==0 || (nums.length!=0 && nums[nums.length-1]!=stack[i])) nums.push(stack[i])
    // }
    // return nums.length;
