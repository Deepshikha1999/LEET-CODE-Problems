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
var isSymmetric = function(root) {
    let left = root.left;
    let right  = root.right;
    let isSymmetricCheck = (left,right)=>{
        if((left==null && right!=null) || (left!=null && right==null)) return false;
        else if(left == right) return true;

        return (left.val == right.val) && isSymmetricCheck(right.left,left.right) && isSymmetricCheck(right.right,left.left); 
    }

    return isSymmetricCheck(left,right);
};

let arr = [1,2,2,3,4,4,3];
// arr = [1,2,2,null,3,null,3];

let root = new TreeNode(arr[0]);
root.left = new TreeNode(arr[1]);
root.right = new TreeNode(arr[2]);
root.left.left = new TreeNode(arr[3]);
root.left.right = new TreeNode(arr[4]);
root.right.left = new TreeNode(arr[5]);
root.right.right = new TreeNode(arr[6]);

console.log(JSON.stringify(root,null,3))
console.log(isSymmetric(root))