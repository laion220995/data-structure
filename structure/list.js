function createNode(value) {
    return {
        value,
        next: null,
    };
}

function createList() {
    return {
        head: null,
        tail: null,
        length: 0,
        push(value) {
            const node = createNode(value);

            if (!this.head) {
                this.head = node;
            } else {
                this.tail.next = node;
            }

            this.tail = node;
            this.length += 1;

            return node;
        },
        pop() {
            if (this.isEmpty()) {
                return null;
            }

            const node = this.tail;

            if (this.length === 1) {
                this.tail = null;
                this.head = null;
                this.length = 0;
                return node;
            }

            let current = this.head;
            let penultimate;

            while (current) {
                if (current.next === this.tail) {
                    penultimate = current;
                    break;
                }

                current = current.next;
            }

            penultimate.next = null;
            this.tail = penultimate;
            this.length -= 1;

            return node;
        },
        get(index) {
            if (index < 0 || index > this.length) {
                return null;
            }

            if (index === 0) {
                return this.head;
            }

            let current = this.head;
            let i = 0;

            while (i < index) {
                i += 1;
                current = current.next;
            }

            return current;
        },
        delete(index) {
            if (index < 0 || index > this.length) {
                return null;
            }

            if (index === 0) {
                const deleted = this.head;
                this.head = this.head.next;
                this.length -= 1;

                return deleted;
            }

            let current = this.head;
            let previous;
            let i = 0;

            while (i < index) {
                i += 1;
                previous = current;
                current = current.next;
            }

            const deleted = current;
            previous.next = current.next;
            this.length -= 1;

            return deleted;
        },
        isEmpty() {
            return this.length === 0;
        },
        print() {
            const values = [];
            let current = this.head;

            while (current) {
                values.push(current.value);
                current = current.next;
            }

            return values.join(' => ');
        },
    };
}

module.exports = createList;
