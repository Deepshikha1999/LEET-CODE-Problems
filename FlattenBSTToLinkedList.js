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
 * @return {void} Do not return anything, modify root in-place instead.
 */
var flatten = function (root) {
    // if (root != null && (root.left != null || root.right != null)) {
    //     let temp = flatten(root.left);
    //     let temp2 = flatten(root.right);
    //     // console.log(root, JSON.stringify(temp,null,3), JSON.stringify(temp2,null,3));
    //     // console.log("-------------------------------")
    //     root.right = temp;
    //     if (root.right != null) {
    //         let h = root.right;
    //         while(h.right!=null){
    //             h = h.right;
    //         }
    //         h.right = temp2;
    //         root.left = null;
    //     }
    //     else {
    //         root.right = temp2;
    //         root.left = null;
    //     }
    // }
    // return root;

    if (root == null) { return; }
    flatten(root.left);
    flatten(root.right);
    if (root.left != null) {
        let h = root.left;
        while (h.right != null) {
            h = h.right;
        }
        h.right = root.right;
        root.right = root.left;
        root.left = null;
    }
};
/**
 if (!root) return

    flatten(root.left)
    flatten(root.right)
    /// finding last node of left child that will point right child
    if (root.left) {
        let last = root.left
        while (last.right) {
            last = last.right
        }
        last.right = root.right
        root.right = root.left
        root.left = null
    }
 */

let roots = [1, 2, 5, 3, 4, null, 6];

let root = new TreeNode(roots[0]);
root.left = new TreeNode(roots[1]);
root.right = new TreeNode(roots[2]);
root.left.left = new TreeNode(roots[3]);
root.left.right = new TreeNode(roots[4]);
// root.right.left = new TreeNode(roots[5]);
root.right.right = new TreeNode(roots[6]);

console.log(JSON.stringify(root, null, 3));
flatten(root);
console.log(JSON.stringify(root, null, 3));


