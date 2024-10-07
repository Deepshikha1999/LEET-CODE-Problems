/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}

/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isValidBST = function(root) {

    var validate = function(node, min, max) {
        if (node === null) {
            return true;
        }
        if ((min !== null && node.val <= min) || (max !== null && node.val >= max)) {
            return false;
        }
        return validate(node.left, min, node.val) && validate(node.right, node.val, max);
    };

    return validate(root,null,null);
};

let arr = [2,1,3];
// arr = [2,2,2];
let root = new TreeNode(arr[0]);
root.left = new TreeNode(arr[1]);
root.right = new TreeNode(arr[2]);

// arr = [5,1,4,null,null,3,6];
// arr = [5,4,6,null,null,3,7];
// root = new TreeNode(arr[0]);
// root.left = new TreeNode(arr[1]);
// root.right = new TreeNode(arr[2]);
// root.left.left = new TreeNode(arr[3]);
// root.right.right = new TreeNode(arr[4]);
// root.right.left = new TreeNode(arr[5]);
// root.right.right = new TreeNode(arr[6]);

console.log(JSON.stringify(root,null,5))
console.log(isValidBST(root))
