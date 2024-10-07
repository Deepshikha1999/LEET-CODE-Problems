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
 * @return {number[][]}
 */
var levelOrder = function(root) {
    let levelArr = {
    }

    let listLevelWise = (root,level)=>{
        if(root==null) return;

        if(!levelArr[level]) levelArr[level] = [];
        levelArr[level].push(root.val);
        listLevelWise(root.left,(level+1));
        listLevelWise(root.right,(level+1));
        return;
    }

    listLevelWise(root,0);
    let arr = [];
    for(value of Object.values(levelArr))
    arr.push(value)

    return arr;
};

let arr = [3,9,20,null,null,15,7];
arr = [1];
let root = new TreeNode(arr[0]);
// root.left = new TreeNode(arr[1]);
// root.right = new TreeNode(arr[2]);
// // root.left.left = new TreeNode(arr[3]);
// // root.left.right = new TreeNode(arr[4]);
// root.right.left = new TreeNode(arr[5]);
// root.right.right = new TreeNode(arr[6]);

console.log(JSON.stringify(root,null,3))
console.log(levelOrder(root))