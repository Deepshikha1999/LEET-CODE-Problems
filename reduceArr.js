/**
 * @param {number[]} nums
 * @param {Function} fn
 * @param {number} init
 * @return {number}
 */
let nums = [1,2,3,4]
let fn = function sum(accum, curr) { return accum + curr; }
var reduce = function(nums, fn, init) {
    if(nums.length==0) return init;
    else
    {
        nums.forEach(element => {
            init = fn(init,element)
        });
        return init;
    }
};

console.log(reduce(nums,fn,0));