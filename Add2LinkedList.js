
// Definition for singly-linked list.
function ListNode(val, next) {
this.val = (val===undefined ? 0 : val)
this.next = (next===undefined ? null : next)
}

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    let dummy = new ListNode(0);
    let current = dummy;
    let carry = 0;
    while(l1||l2||carry){
        let sum = carry;
        if(l1){
            sum = sum + parseInt(l1.val);
            l1 = l1.next;
        }
        if(l2){
            sum = sum + parseInt(l2.val);
            l2 = l2.next;
        }
        carry = parseInt(sum/10);
        current.next = new ListNode(parseInt(sum%10));
        current = current.next;
    }
    return dummy.next;
};

// [2,4,3]
// [5,6,4]
let method = ()=>{
    let l1 = new ListNode(2);
    let l2 = new ListNode(5);
    let n1 = l1.next = new ListNode(4);
    n1.next = new ListNode(3);
    
    let n2 = l2.next = new ListNode(6);
    n2.next = new ListNode(4);

    let addlist = addTwoNumbers(l1,l2);
    console.log(addlist)
}

method();