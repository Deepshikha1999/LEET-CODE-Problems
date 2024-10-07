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
 * @param {number} n
 * @return {TreeNode[]}
 */
// var generateTrees = function (n) {
//     let arr = [];
//     let combinations = [];
//     let lists = [];
//     for (let i = 1; i <= n; i++) {
//         arr.push(i)
//     }

//     let possibleCombination = (arr, temp, n) => {
//         if (temp.length == n) {
//             let root = null;
//             for (let val of temp) {
//                 root = buildTree(root, val);
//             }
//             let stack = [];
//             listInStack(stack, root)
//             if (!lists.includes(stack.join("|"))) {
//                 combinations.push(root);
//                 lists.push(stack.join("|"));
//             }
//         }
//         else {
//             for (let val of arr) {
//                 let t = [...temp];
//                 t.push(val);
//                 possibleCombination(
//                     arr.filter(item => item != val),
//                     t,
//                     n);
//             }
//         }
//         return;
//     }
//     possibleCombination(arr, [], n);

//     return combinations;
// };

// let buildTree = (root, val) => {
//     if (root == null) {
//         return new TreeNode(val);
//     }

//     if (val > root.val) {
//         root.right = buildTree(root.right, val);
//     }
//     else {
//         root.left = buildTree(root.left, val);
//     }

//     return root;
// }

// let listInStack = (stack, root) => {
//     if (root == null) {
//         //do nothing
//     }
//     else {
//         stack.push(listInStack(stack, root.left));
//         stack.push(root.val);
//         stack.push(listInStack(stack, root.right));
//     }
//     return;
// }

var generateTrees = function (n) {
    if (n === 0) {
        return [];
    }

    let possibleCombination = (start, end) => {
        let combinations = [];
        if (start > end) {
            combinations.push(null);
            return combinations;
        }
        else {
            for (let i = start; i <= end; i++) {
                const leftTrees = possibleCombination(start, i - 1);
                const RightTrees = possibleCombination(i + 1, end);

                console.log(leftTrees.length)
                for (let left of leftTrees) {
                    for (let right of RightTrees) {
                        const root = new TreeNode(i);
                        root.left = left;
                        root.right = right;
                        combinations.push(root);
                    }
                }
            }
        }
        return combinations;
    }

        
        return possibleCombination(1, n).length;
};

    // var numTrees = function (n) {
    //     if (n === 0) {
    //         return 0;
    //     }

    //     let possibleCombination = (start,end) => {
    //         let combinations = [];
    //        if(start>end){
    //         combinations.push(null);
    //         return combinations;
    //        }
    //        else{
    //         for(let i=start;i<=end;i++){
    //             const leftTrees = possibleCombination(start,i-1);
    //             const RightTrees = possibleCombination(i+1,end);

    //             for(let left of leftTrees){
    //                 for(let right of RightTrees){
    //                     const root = new TreeNode(i);
    //                     root.left = left;
    //                     root.right = right;
    //                     combinations.push(root);
    //                 }
    //             }
    //         }
    //        }
    //        return combinations;
    //     }
    //     return possibleCombination(1,n).length;
    // };


    let n = 3;
    console.log(JSON.stringify(generateTrees(n), null, 2))