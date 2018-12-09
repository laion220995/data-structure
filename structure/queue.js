function createQueue() {
    const queue = [];

    return {
        enqueue(element) {
            queue.unshift(element);
        },
        dequeue() {
            return queue.pop();
        },
        get length() {
            return queue.length;
        },
        peek() {
            return queue[queue.length - 1];
        },
        isEmpty() {
            return queue.length === 0;
        },
    };
}

module.exports = createQueue;
