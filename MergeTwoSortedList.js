/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}
let insertValue = (head, value) => {
    if (head.val == null) {
        head.val = value;
    }
    else {
        let nextNode = new ListNode(value, null);
        let current = head;
        while (current.next != null) {
            current = current.next;
        }
        current.next = nextNode;
    }
}
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
// var mergeTwoLists = function (list1, list2) {
//     if(list1==null) return list2;
//     if(list2==null) return list1;
//     let list = list1;
//     let l = list2;
//     if(list.val>l.val) {
//         let t = new ListNode(l.val, list1);
//         console.log(t)
//         list=t;
//         console.log(list1)
//         list = list.next;
//         console.log(list)
//     }
//     while (list != null && l != null) {
//         if (list.val <= l.val) {
//             let t = new ListNode(l.val, list.next);
//             list.next = t;
//             list = list.next;
//         }
//         list = list.next;
//         l = l.next;
//     }
//     return list1;
// };

var mergeTwoLists = function (list1, list2) {
    if(list1==null) return list2;
    if(list2==null) return list1;

    let list = new ListNode();
    let node = list;

    while(list1!=null || list2!=null){
        if(list1!=null && list2==null){
            node.next = new ListNode(list1.val);
            list1 = list1.next;
        }
        if(list2!=null && list1==null){
            node.next = new ListNode(list2.val);
            list2 = list2.next;
        }
        if(list1!=null && list2!=null){
            if(list1.val<=list2.val){
                node.next = new ListNode(list1.val);
                list1 = list1.next;
            }
            else{
                node.next = new ListNode(list2.val);
                list2 = list2.next;
            }
        }
        node = node.next;
    }

    return list.next;
};
let list1s = [1, 2, 4], list2s = [1, 3, 4];
// list1s = [], list2s = [];
// list1s = [], list2s = [1];
list1s = [2,3], list2s = [1,5];

let list1, list2;
if (list1s.length > 0) {
    list1 = new ListNode(list1s[0]);
    for (let i = 1; i < list1s.length; i++)
        insertValue(list1, list1s[i]);
}

if (list2s.length > 0) {
    list2 = new ListNode(list2s[0]);
    for (let i = 1; i < list2s.length; i++)
        insertValue(list2, list2s[i]);
}


// console.log(list1)
// console.log(list2)
console.log(JSON.stringify(mergeTwoLists(list1, list2), null, 2))