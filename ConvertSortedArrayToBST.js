/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}

/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function(nums,root=null) {
    if(nums.length==0){
        return root;
    }
    let pivot = Math.floor(nums.length/2)
    root = new TreeNode(nums[pivot]);
    root.left = sortedArrayToBST(nums.slice(0,pivot),root.left);
    root.right = sortedArrayToBST(nums.slice((pivot+1),nums.length),root.right);
    return root;
};

let nums = [-10,-3,0,5,9];
nums = [1,3];
console.log(JSON.stringify(sortedArrayToBST(nums),null,3))
