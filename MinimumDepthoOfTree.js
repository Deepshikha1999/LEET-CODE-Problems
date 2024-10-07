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
var minDepth = function (root, level = 0) {
    if (root == null) return level;
    level = level + 1
    let left = minDepth(root.left, 0);
    let right = minDepth(root.right, 0);
    console.log(level, left, right)
    if (left == 0 && right != 0) return right + level;
    if (left != 0 && right == 0) return left + level;
    else return Math.min(left, right) + 1;

};

let arr = [3, 9, 20, null, null, 15, 7];
// arr = [2,null,3,null,4,null,5,null,6];
// arr = [1];
// arr = [1,null,2];
let root = new TreeNode(arr[0]);
root.left = new TreeNode(arr[1]);
root.right = new TreeNode(arr[2]);
// root.left.left = new TreeNode(arr[3]);
// root.left.right = new TreeNode(arr[4]);
root.right.left = new TreeNode(arr[5]);
root.right.right = new TreeNode(arr[6]);
// root.left.left.left = new TreeNode(arr[7]);
// root.left.left.right = new TreeNode(arr[8]);
// root.left.right.left = new TreeNode(arr[9]);
// root.right.right.right = new TreeNode(arr[10]);

// root.right = new TreeNode(arr[2]);
// root.right.right = new TreeNode(arr[4]);
// root.right.right.right = new TreeNode(arr[6]);
// root.right.right.right.right = new TreeNode(arr[8]);

console.log(JSON.stringify(root, null, 3))
console.log(minDepth(root))