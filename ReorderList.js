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


/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
var reorderList = function (head) {
    // console.log("--------------------")

    //find middle of linkedlist
    let slow = head, fast=head;
    while(fast && fast.next){
        slow = slow.next;
        fast = fast.next.next;
    }

    // console.log(JSON.stringify(slow))
    // console.log("--------------------")

    //reverse
    let prev = null, curr = slow;
    while(curr){
        let temp = curr.next;
        curr.next = prev;
        prev = curr;
        curr = temp;
    }

    // console.log(JSON.stringify(prev))
    // console.log("--------------------")
    //Merge 2 Halves
    let first = head, second = prev;
    while (second.next) {
        let tmp1 = first.next;
        let tmp2 = second.next;
        
        first.next = second;
        second.next = tmp1;
        
        first = tmp1;
        second = tmp2;
    }
};

let arr = [1, 2, 3, 4];

let head = new ListNode(arr[0]);
start = head;
for (let i = 1; i < arr.length; i++) {
    start.next = new ListNode(arr[i]);
    start = start.next;
}


console.log(JSON.stringify(head))
reorderList(head)
console.log(JSON.stringify(head))