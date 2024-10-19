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
 * @return {ListNode}
var insertionSortList = function (head) {
    if(!head) return head;
    let arr = [];
    let h = head;
    while(h!=null){
        arr.push(h.val);
        h = h.next;
    }
    for(let i=0;i<arr.length-1;i++){
        let val = arr[i+1];
        let j = 0;
        while(j<(i+1)){
            if(val<arr[j]){
               [arr[j],val] = [val,arr[j]];
            }
            j++;
        }
        arr[i+1] = val;
    }
    let sortedList = new ListNode(arr[0],null);
    let temp = sortedList;
    for(let i=1;i<arr.length;i++){
        temp.next = new ListNode(arr[i],null);
        temp = temp.next;
    }
    return sortedList;
};
*/

var insertionSortList = function (head) {
    if(!head) return head;
    let h = head;
    while(h.next){
        let node = h.next;
        let t = head;
        while(t!=node){
            if(t.val>node.val){
                [t.val,node.val] = [node.val,t.val];
            }
            t=t.next;
        }
        t.val = node.val;
        h = h.next;
    }
    return head;
};


let arr = [4, 2, 1, 3];
let head = new ListNode(arr[0],null);
let temp = head;
for(let i=1;i<arr.length;i++){
    head.next = new ListNode(arr[i],null);
    head = head.next;
}
head = temp;
console.log(JSON.stringify(head))
console.log(JSON.stringify(insertionSortList(head)))

