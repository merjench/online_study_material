Merge two sorted linked lists and return it as a new list. The new list should be made by splicing together the nodes of the first two lists.
Example:
Input: 1->2->4, 1->3->4
Output: 1->1->2->3->4->4

var mergeTwoLists = function(l1, l2) {
    let head = { next: null };
    let c1 = l1;
    let c2 = l2;
    let p = head;
    while(c1 || c2) {
        if((c1 && !c2) || (c1 && c1.val < c2.val)) {
            p.next = c1;
            c1 = c1.next;
        } else {
            p.next = c2;
            c2 = c2.next;
        }
        p = p.next;
    }
    return head.next;
};
