const createQueue = require("./queue");

function createPriorityQueue() {
  const lowPQueue = createQueue();
  const highPQueue = createQueue();

  return {
    enqueue(item, isHighP = false) {
      isHighP ? highPQueue.enqueue(item) : lowPQueue.enqueue(item);
    },

    dequeue() {
      return highPQueue.isEmpty() ? lowPQueue.dequeue() : highPQueue.dequeue();
    },

    peek() {
      return highPQueue.isEmpty() ? lowPQueue.peek() : highPQueue.peek();
    },

    length() {
      return highPQueue.length() + lowPQueue.length();
    },

    isEmpty() {
      return highPQueue.isEmpty() && lowPQueue.isEmpty();
    }
  };
}

module.exports = createPriorityQueue