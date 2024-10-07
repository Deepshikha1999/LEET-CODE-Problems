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
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function(root,level=0) {
    if(root==null) return level;
    return Math.max(maxDepth(root.left,(level+1)),maxDepth(root.right,(level+1)));
};

let arr = [3, 9, 20, null, null, 15, 7];
arr = [1];
// arr = [1,null,2];
let root = new TreeNode(arr[0]);
// root.left = new TreeNode(arr[1]);
// root.right = new TreeNode(arr[2]);
// // root.left.left = new TreeNode(arr[3]);
// // root.left.right = new TreeNode(arr[4]);
// root.right.left = new TreeNode(arr[5]);
// root.right.right = new TreeNode(arr[6]);

console.log(JSON.stringify(root, null, 3))
console.log(maxDepth(root))