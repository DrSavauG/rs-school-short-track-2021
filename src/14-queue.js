const ListNode = require('../extensions/list-node');
/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 *
 */

class Queue {
  constructor() {
    this.length = 0;
    this.head = undefined;
    this.tail = undefined;
  }

  get size() {
    return this.length;
  }

  enqueue(element) {
    const node = new ListNode(element);
    this.length++;
    if (this.head === undefined) {
      this.head = node;
    } else {
      this.tail.next = node;
    }
    this.tail = node;
  }

  dequeue() {
    const temp = this.head;
    this.head = temp.next;
    return temp.value;
  }
}
// const queue = new Queue();
// queue.enqueue(5);
// queue.enqueue(4);
// queue.enqueue(3);
// queue.dequeue();
// console.log(queue)

module.exports = Queue;
