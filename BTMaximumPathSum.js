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
var traverse = function (root) {
    let head = root;
    let arr = [];
    let stack = [];
    while (head || stack.length != 0) {
        console.log(head ? head.val : null)
        while (head) {
            console.log(head ? head.val : null)
            stack.push(head);
            head = head.left;
        }
        console.log(head ? head.val : null)
        head = stack.pop();
        arr.push(head.val);
        head = head.right;
        console.log("__________________________________");
    }
    return arr;
};

// var maxPathSum = function (root) {
//     if (root == null) return -1 * Infinity;
//     let leftSum = maxPathSum(root.left);
//     let rightSum = maxPathSum(root.right);
//     let nodeSum = root.val;
//     let leftNodeSum = -1 * Infinity;
//     let rightNodeSum = -1 * Infinity;
//     if(rightSum!=-1*Infinity)
//     {
//         nodeSum += rightSum;
//         rightNodeSum = rightSum + root.val;
//     }

//     if(leftSum!=-1*Infinity)
//     {
//         nodeSum += leftSum;
//         leftNodeSum = leftSum + root.val;
//     }
//     return Math.max(leftSum, rightSum,leftNodeSum,rightNodeSum, nodeSum, root.val);
// }

var maxPathSum = function (root) {
    let maxSum = -Infinity;

    function maxGain(node) {
        if (node === null) {
            return 0;
        }
        let leftGain = Math.max(maxGain(node.left), 0);
        let rightGain = Math.max(maxGain(node.right), 0);
        let currentPathSum = node.val + leftGain + rightGain;
        maxSum = Math.max(maxSum, currentPathSum);
        return node.val + Math.max(leftGain, rightGain);
    }

    maxGain(root);

    return maxSum;
};

let arr = [-10, 9, 20, null, null, 15, 7];
// arr = [1,2,3];
arr = [-3];
arr = [-2,-1];
arr = [1,-2,3];
let root = new TreeNode(arr[0]);
root.left = new TreeNode(arr[1]);
root.right = new TreeNode(arr[2]);
// // root.left.left = new TreeNode(arr[3]);
// // root.left.right = new TreeNode(arr[4]);
// root.right.left = new TreeNode(arr[5]);
// root.right.right = new TreeNode(arr[6]);

console.log(maxPathSum(root))

