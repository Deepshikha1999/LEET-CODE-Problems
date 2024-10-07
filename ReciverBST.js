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
 * @return {void} Do not return anything, modify root in-place instead.
 */
var recoverTree = function(root) {
    let arrayList = [];
    var collect = function(node) {
        if (node === null) {
            return;
        }
        else{
            arrayList.push(node.val);

            if(node.left)
            collect(node.left);

            if(node.right)
            collect(node.right);
        }
    };
    collect(root)
    console.log(arrayList)
    let i=1;
    while(i<arrayList.length){
        if(arrayList[i-1]>arrayList[i]){
            [arrayList[i-1],arrayList[i]] = [arrayList[i],arrayList[i-1]];
        }
        i++;
    }
    console.log(arrayList)

};

let root = [1,3,null,null,2];
// root = [3,1,4,null,null,2];
let roots = new TreeNode(root[0]);
roots.left = new TreeNode(root[1]);
// roots.right = new TreeNode(root[2]);
// roots.left.left = new TreeNode(root[3]);
roots.left.right = new TreeNode(root[4]);
// roots.left.left = new TreeNode(root[5]);
// roots.left.right = new TreeNode(root[6]);

console.log(JSON.stringify(roots,null,3))
recoverTree(roots);
// console.log(JSON.stringify(roots,null,3))

