function createStack() {
    const stack = [];

    return {
        push(element) {
            stack.push(element);
        },
        pop() {
            return stack.pop();
        },
        get length() {
            return stack.length;
        },
        peek() {
            return stack[stack.length - 1];
        },
        isEmpty() {
            return stack.length === 0;
        },
    };
}

module.exports = createStack;
