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
 * @param {number} targetSum
 * @return {number[][]}
 */
var pathSum = function(root, targetSum) {
    let result = [];

    const findPaths = (node, sum, path) => {
        if (node === null) {
            return;
        }

        path.push(node.val);

        if (node.left === null && node.right === null && sum === node.val) {
            result.push([...path]);
        } else {
            findPaths(node.left, sum - node.val, path);
            findPaths(node.right, sum - node.val, path);
        }
        path.pop();
    };
    findPaths(root, targetSum, []);
    return result;
};

let arr = [5, 4, 8, 11, null, 13, 4, 7, 2, null, null, 5, 1], targetSum = 22;
arr = [1,2,3],targetSum = 5;
arr = [1,2],targetSum = 1;
arr = [-2,null,-3],targetSum = -5;

let root = new TreeNode(arr[0]);
// root.left = new TreeNode(arr[1]);
root.right = new TreeNode(arr[2]);
// root.left.left = new TreeNode(arr[3]);
// // root.left.right = new TreeNode(arr[4]);
// root.right.left = new TreeNode(arr[5]);
// root.right.right = new TreeNode(arr[6]);
// root.left.left.left = new TreeNode(arr[7]);
// root.left.left.right = new TreeNode(arr[8]);
// // root.right.left.left = new TreeNode(arr[9]);
// // root.right.left.right = new TreeNode(arr[10]);
// root.right.right.left = new TreeNode(arr[11]);
// root.right.right.right = new TreeNode(arr[12]);

// console.log(JSON.stringify(root, null, 3))
console.log(pathSum(root, targetSum))
// console.log(hasPathSum(null, 0))