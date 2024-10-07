/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
      this.val = (val===undefined ? 0 : val)
      this.left = (left===undefined ? null : left)
      this.right = (right===undefined ? null : right)
    }
 */

function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}

/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var inorderTraversal = function (root) {
    let stack = [];
    let inorderList = (root)=>{
        if(root==null){
            return;
        }
        else{
            inorderList(root.left)
            stack.push(root.val);
            inorderList(root.right);
        }
        return;
    }
    inorderList(root);
    return stack;
};




let roots = [1, null, 2, 3];
let root = new TreeNode(roots[0]);
root.right = new TreeNode(roots[2]);
root.right.left = new TreeNode(roots[3]);


// console.log(JSON.stringify(roots,null,2))
console.log(inorderTraversal(root));
