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
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function (preorder, inorder, root = null) {
    if (inorder.length == 0 && preorder.length == 0) {
        return root;
    }
    let rootNodeVal = preorder[0];
    let leftinorder = inorder.slice(0, (inorder.indexOf(rootNodeVal)));
    let rightinorder = inorder.slice((inorder.indexOf(rootNodeVal) + 1), inorder.length);
    let leftpreorder = leftinorder.length == 0 ? [] : preorder.slice(1, (1 + leftinorder.length));
    let rightpreorder = rightinorder.length == 0 ? [] : preorder.slice((preorder.length - rightinorder.length), preorder.length);

    root = new TreeNode(rootNodeVal);
    root.left = buildTree(leftpreorder, leftinorder, root.left);
    root.right = buildTree(rightpreorder, rightinorder, root.right);

    return root;
};

let preorder = [3, 9, 20, 15, 7], inorder = [9, 3, 15, 20, 7];
console.log(buildTree(preorder, inorder))