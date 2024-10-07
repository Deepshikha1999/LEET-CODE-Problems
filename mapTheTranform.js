/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */

fn = function plusone(n) { 
    return n + 1; }
arr = [1,2,3]
var map = function(arr, fn) {
    return arr.map(item=>fn(item,arr.indexOf(item)))
};

console.log(map(arr,fn));