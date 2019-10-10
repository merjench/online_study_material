Reverse a singly linked list.
Example:
Input: 1->2->3->4->5->NULL
Output: 5->4->3->2->1->NULL
Follow up:
A linked list can be reversed either iteratively or recursively. Could you implement both?
// Time Complexity: O(n), Linear - traverse linked list only once
 // Space Complexity: O(1), Constant - we will only have 2 pointers regardless of size of input; prev and temp

 var reverseList = function(head) {
   // End of the reversed linked list set to null
   let prev = null;          // Traverse through the given linked list
   while (head) {
     const temp = head.next;     // References the next Node of given linked list
     head.next = prev;       // head.next point to previous Node, instead of the next Node of the given linked list
     prev = head;             // Move the prev Node pointer up to head
     head = temp;          // Move the head up to next Node of the given linked list
   }
   // Prev is the reversed linked list   
   return prev;
