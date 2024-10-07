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
var sumNumbers = function(root) {
    let traverseNum = (root)=>{
        if(!root) return null;
        let temp = [];
        let left = traverseNum(root.left);
        if(left) {
            let values_possiblity= left.map(item=>(root.val+""+item))
            temp.push(...values_possiblity)
        }

        let right = traverseNum(root.right);
        if(right) {
            let values_possiblity= right.map(item=>(root.val+""+item))
            temp.push(...values_possiblity)
        }

        if(!left && !right) return [root.val];
        return temp;
    }
    return traverseNum(root).reduce((a,b)=>parseInt(a)+parseInt(b),0)
};

let root = [1,2,3];
root = [4,9,0,5,1];
root = [5,3,2,7,0,6,null,null,null,0];
let r = new TreeNode(root[0]);
r.left = new TreeNode(root[1]);
r.right = new TreeNode(root[2]);
r.left.left = new TreeNode(root[3]);
r.left.right = new TreeNode(root[4]);
r.right.left = new TreeNode(root[5]);
r.left.right.left = new TreeNode(root[9]);


console.log(sumNumbers(r))
