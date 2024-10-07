function Node(value = null, next = null) {
    this.value = value;
    this.next = next;
}

let insertValue = (head, value) => {
    // console.log("prev",JSON.stringify(head, null, 2));
    if (head.value == null) {
        head.value = value;
    }
    else {
        let nextNode = new Node(value, null);
        let current = head;
        while (current.next != null) {
            current = current.next;
        }
        current.next = nextNode;
    }
    // console.log("after",JSON.stringify(head, null, 2))
}

let deleteValue = (head, value) => {

    if (head == null) {
        return "Nothing to delete";
    }

    if (head.value === value) {
        head.value = head.next ? head.next.value : null;
        head.next = head.next ? head.next.next : null;
        return;
    }

    else {
        let current = head;
        let prev = null;
        while (current != null && current.value != value) {
            prev = current;
            current = current.next;
        }

        if (current == null) {
            return "Number not found";
        }
        prev.next = current.next;

        delete current;
    }
}

// let removeNthFromEnd = function (head, n) {
//     if (head == null) {
//         return head;
//     }
//     else {
//         let stack = [];
//         let current = head;
//         while (current != null && current.next != null) {
//             stack.push(current);
//             current = current.next;
//         }
//         let node = current;
//         console.log(stack)
//         // while (n > 0 && stack.length > 0) {
//         //     node = stack.pop();
//         //     current = node.next;
//         //     n--;
//         // }
//         // console.log(node)
//         // console.log(current)
//         // if (node != null) {
//         //     node.next = current.next;
//         // }
//         // else {
//         //     node = head.next;
//         // }
//         return node;
//     }
// }

// let removeNthFromEnd = function (head, n) {
//     let dummy = new Node(0, head);
//     let fast = dummy;
//     let slow = dummy;

//     for (let i = 0; i <= n; i++) {
//         if (fast == null) return head;  // If n is larger than the list length
//         fast = fast.next;
//     }

//     while (fast != null) {
//         fast = fast.next;
//         slow = slow.next;
//     }

//     slow.next = slow.next.next;

//     return dummy.next;
// }

let removeNthFromEnd = function (head, n) {

    if (head == null) return head;
    let i = 0;
    let ptrR = head;
    while (ptrR != null) {
        ptrR = ptrR.next;
        i++;
    }
    let pos = i - n - 1;
    ptrR = head;
    if (pos < 0) {
        head = ptrR.next;
    }
    else {
        while (pos > 0 && ptrR != null) {
            ptrR = ptrR.next;
            pos--;
        }
        ptrR.next = ptrR.next.next;
    }
    return head;
}


let head = new Node();
insertValue(head, 5);
insertValue(head, 6);
// insertValue(head, 7);
// insertValue(head, 8);
// insertValue(head, 9);
// console.log(JSON.stringify(head, null, 2))
// deleteValue(head,6)
// console.log(JSON.stringify(head, null, 2))

console.log(JSON.stringify(removeNthFromEnd(head, 2)));
// console.log(JSON.stringify(head, null, 2))