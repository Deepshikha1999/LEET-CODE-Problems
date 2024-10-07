/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    nums = nums.sort((a,b)=>a-b)
    let arr =[];
    let temp =[];
    permuatation(nums,arr,temp,nums.length)
    return arr;
};

let permuatation = (nums,arr,temp,n)=>{
    if(nums.length==0){
        arr.push(temp);
        return;
    }
    else{
        for(let i=0;i<nums.length;i++){
            let tempf = [...temp];
            let remainingf= [...nums];
            tempf.push(nums[i])
            remainingf.splice(i,1);
            permuatation(remainingf,arr,tempf,n)
        }
        return;
    }
}

let nums = [1,2,3];
nums = [0,1];
nums = [1];
console.log(permute(nums))