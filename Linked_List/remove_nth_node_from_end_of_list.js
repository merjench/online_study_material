Given a linked list, remove the n-th node from the end of list and return its head.

Example:
Given linked list: 1->2->3->4->5, and n = 2.
After removing the second node from the end, the linked list becomes 1->2->3->5.

Note:
Given n will always be valid.

Follow up:
Could you do this in one pass

//----------------Solution---------------------//

var removeNthFromEnd = function(head, n) {
  let slow = head;
  let fast = head;
  while(--n && fast) {
    fast = fast.next;    
  }
  if(n>0)
  {
    return null;
  }
  let prev = null;
  while(fast&&fast.next) {
    prev = slow;
    slow = slow.next;
    fast = fast.next;
  }
  // remove target
  if(!prev) {
    head = slow.next;
  }else {
    prev.next = slow.next;
  }
  return head;
};
