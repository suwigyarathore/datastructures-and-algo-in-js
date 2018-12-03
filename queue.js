function createQueue() {
  const queue = [];

  return {
    enqueue(item) {
      queue.unshift(item);
    },

    dequeue() {
      return queue.pop();
    },

    peek() {
      return queue[queue.length - 1];
    },

    length() {
      return queue.length;
    },

    isEmpty() {
      return queue.length === 0;
    }
  };
}

module.exports = createQueue;
