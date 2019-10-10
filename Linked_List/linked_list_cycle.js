Given a linked list, determine if it has a cycle in it.
To represent a cycle in the given linked list, we use an integer pos which represents the position (0-indexed) in the linked list where tail connects to. If pos is -1, then there is no cycle in the linked list.

Example 1:
Input: head = [3,2,0,-4], pos = 1
Output: true
Explanation: There is a cycle in the linked list, where tail connects to the second node.

//-----------Solution 1-------------------------------////

var hasCycle = function(head) {
    if (!head) return false;
    let walker = head;
    let runner = head;
    while (walker.next && (runner.next && runner.next.next)) {
        if (walker.next == runner.next.next) {
            return true;
        }
        walker = walker.next;
        runner = runner.next.next;
    }
    return false;
};
