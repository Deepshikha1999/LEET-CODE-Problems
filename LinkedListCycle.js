/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

function ListNode(val) {
    this.val = val;
    this.next = null;
}

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function (head) {
    try {
        console.log(JSON.stringify(head));
        return false;
    }
    catch (err) {
        return true;
    }
};

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle = function (head) {
    let tail = head;
    let index = 0;
    while (head) {
        let t = head.val+"";
        if (t.indexOf("|") >= 0) {
            while(tail.val != head.val){
                tail.val = parseInt(tail.val.split("|")[0]);
                tail = tail.next;
            }
            while(head.val.indexOf("|")<0){
                head.val = parseInt(head.val.split("|")[0]);
                head = head.next;
            }
            return tail;
        }
        else {
            head.val = head.val + "|" + index;
            head = head.next;
            index++;
        }
    }
    return null;
};

let createList = (head, pos) => {
    let heads = new ListNode(head[0]);
    let revNode = heads;
    let results = heads;

    for (let i = 1; i < head.length; i++) {
        heads.next = new ListNode(head[i]);
        heads = heads.next;
    }

    if (pos != -1 && pos < head.length) {
        let i = 0;
        while (pos != i) {
            revNode = revNode.next;
            i++;
        }
        heads.next = revNode;
    }

    return results;
}
let head = [3, 2, 0, -4], pos = 1;
// let head = [1,2], pos = 0;
let heads = createList(head, pos);
// console.log(heads)
// console.log(JSON.stringify(createList(head,pos)))

// console.log(revNode)
// console.log(hasCycle(heads))
console.log(detectCycle(heads))
