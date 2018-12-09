const createQueue = require('./queue');

function createPriorityQueue() {
    const highPriorityQueue = createQueue();
    const lowPriorityQueue = createQueue();

    return {
        enqueue(element, isHighPriority = false) {
            if (isHighPriority) {
                highPriorityQueue.enqueue(element);
            } else {
                lowPriorityQueue.enqueue(element);
            }
        },
        dequeue() {
            return highPriorityQueue.isEmpty()
                ? lowPriorityQueue.dequeue()
                : highPriorityQueue.dequeue();
        },
        isEmpty() {
            return highPriorityQueue.isEmpty() && lowPriorityQueue.isEmpty();
        },
        length() {
            return highPriorityQueue.length + lowPriorityQueue.length;
        },
        peek() {
            if (!highPriorityQueue.isEmpty()) {
                return highPriorityQueue.peek();
            }

            return lowPriorityQueue.peek();
        },
    };
}

module.exports = createPriorityQueue;
