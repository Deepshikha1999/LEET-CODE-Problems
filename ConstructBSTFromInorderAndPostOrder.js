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
var buildTree = function (inorder,postorder, root = null) {
    if (inorder.length == 0 && postorder.length == 0) {
        return root;
    }
    let rootNodeVal = postorder[postorder.length-1];
    let leftinorder = inorder.slice(0, (inorder.indexOf(rootNodeVal)));
    let rightinorder = inorder.slice((inorder.indexOf(rootNodeVal) + 1), inorder.length);
    let leftpostorder = leftinorder.length == 0 ? [] : postorder.slice(0, (leftinorder.length));
    let rightpostorder = rightinorder.length == 0 ? [] : postorder.slice((postorder.length-1 - rightinorder.length), (postorder.length-1));

    root = new TreeNode(rootNodeVal);
    root.left = buildTree(leftinorder,leftpostorder, root.left);
    root.right = buildTree(rightinorder,rightpostorder, root.right);

    return root;
};

let postorder = [9, 15, 7, 20, 3], inorder = [9, 3, 15, 20, 7];
console.log(buildTree(inorder,postorder))