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
 * @return {boolean}
 */
var isBalanced = function(root) {
    var height = function(node) {
        if (node == null) return 0;
        let leftHeight = height(node.left);
        let rightHeight = height(node.right);
        
        if (leftHeight == -1 || rightHeight == -1 || Math.abs(leftHeight - rightHeight) > 1) {
            return -1;
        }
        return Math.max(leftHeight, rightHeight) + 1;
    };
    
    return height(root) != -1;
};

let arr = [3, 9, 20, null, null, 15, 7];
// arr = [1,2,2,3,3,null,null,4,4];
// arr = [1,2,2,3,null,null,3,4,null,null,4];
console.log(arr.length)
// arr = [1];
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

console.log(JSON.stringify(root, null, 3))
console.log(isBalanced(root))