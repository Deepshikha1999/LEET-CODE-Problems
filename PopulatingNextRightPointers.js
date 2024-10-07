/**
 * // Definition for a _Node.
 * function _Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */

function _Node(val, left, right, next) {
    this.val = val === undefined ? null : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
    this.next = next === undefined ? null : next;
};

/**
 * @param {_Node} root
 * @return {_Node}
 */
var connect = function (root) {
    if (!root) return null;

    let leftmost = root;

    while (leftmost.left) {
        let head = leftmost;

        while (head) {
            head.left.next = head.right;
            if (head.next) {
                head.right.next = head.next.left;
            }

            head = head.next;
        }
        leftmost = leftmost.left;
    }

    return root;
};

let root = [1, 2, 3, 4, 5, 6, 7];

let r = new _Node(root[0]);
r.left = new _Node(root[1]);
r.right = new _Node(root[2]);
r.left.left = new _Node(root[3]);
r.left.right = new _Node(root[4]);
r.right.left = new _Node(root[5]);
r.right.right = new _Node(root[6]);

console.log(JSON.stringify(r, null, 4))
console.log(JSON.stringify(connect(r), null, 4))