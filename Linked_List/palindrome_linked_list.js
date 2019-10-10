Given a singly linked list, determine if it is a palindrome.
Examples:
Input: 1->2
 Output: false

Input: 1->2->2->1
Output: true
Follow up:
Could you do it in O(n) time and O(1) space? yes

function isPalindrome(head) {
  if (!head|| !head.next) return true;

  let length = getLength(head);
  let firstNode = head, midNode = head;
  let mid = Math.floor(length / 2);
  let midNodeIdx = length % 2 === 0 ? mid - 1 : mid;

  for (let i = 0; i < midNodeIdx; i++) {
    midNode = midNode.next;
  }

  reverse(midNode);
  firstNode = head;
  midNode = midNode.next;

  while (midNode !== null) {
    if (firstNode.val !== midNode.val) return false;
    firstNode = firstNode.next, midNode = midNode.next;
  }

  return true;
}

function getLength(node) {
  let length = 0;
  while (node) {
    node = node.next;
    length++;
  }
  return length;
}

function reverse(head) {
  let node = head.next;
  while (node.next !== null) {
    let temp = head.next;
    head.next = node.next;
    node.next = head.next.next;
    head.next.next = temp;
  }
}
