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
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function(p, q) {
    if((p==null && q!=null) || (p!=null && q==null)) return false;

    else if(p==null && q==null) return true;

    return (p.val==q.val) && isSameTree(p.left,q.left) && isSameTree(p.right,q.right);
};

let p = [1,2,3], q = [1,2,3];

let root1 = new TreeNode(p[0]);
root1.left = new TreeNode(p[1]);
root1.right = new TreeNode(p[2]);

let root2 = new TreeNode(q[0]);
root2.left = new TreeNode(q[1]);
root2.right = new TreeNode(q[2]);

console.log(isSameTree(root1,root2));