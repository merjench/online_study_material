White a funtion to delete node(except the tail) in a singy linked list, given only access to that node.

Example

Input: head = [4,5,1,9], node = 5
Output: [4,1,9]

Explanation: You are given the second node with value 5, the linked list should become 4 -> 1 -> 9 after calling your function.

Given a linked list -- head = [4,5,1,9], which looks like following:

Note:
•	The linked list will have at least two elements.
•	All of the nodes' values will be unique.
•	The given node will not be the tail and it will always be a valid node of the linked list.
•	Do not return anything from your function.


//-------------------Solution 1----------------------//

var deleteNode = function(node) {
    if (!node.next) return;
    // If we reach here, we have at least 2 nodes
    // We stop on the 2nd to last node
    while (node.next.next) {
        node.val = node.next.val;
        node = node.next;
    }
    // Get value of last node and delete last node
    node.val = node.next.val
    node.next = null;
};
