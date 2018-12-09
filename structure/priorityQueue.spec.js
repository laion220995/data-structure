const createPriorityQueue = require('./priorityQueue');

describe('priorityQueue', () => {
    it('peek', () => {
        const q = createPriorityQueue();

        q.enqueue('test_1_p', true);
        q.enqueue('test_1_l', false);
        q.enqueue('test_2_p', true);

        expect(q.peek()).toBe('test_1_p');

        q.dequeue();
        expect(q.peek()).toBe('test_2_p');

        q.dequeue();
        expect(q.peek()).toBe('test_1_l');
    });

    it('length', () => {
        const q = createPriorityQueue();

        q.enqueue('test_1_p', true);
        q.enqueue('test_1_l', false);
        q.enqueue('test_2_p', true);

        expect(q.length()).toBe(3);
    });

    it('enqueue', () => {
        const q = createPriorityQueue();

        q.enqueue('test_1_p', true);
        expect(q.peek()).toBe('test_1_p');
        q.enqueue('test_1_l', false);
        expect(q.peek()).toBe('test_1_p');
        q.enqueue('test_2_p', true);
        expect(q.peek()).toBe('test_1_p');
    });

    it('dequeue', () => {
        const q = createPriorityQueue();

        q.enqueue('test_1_p', true);
        q.enqueue('test_1_l', false);
        q.enqueue('test_2_p', true);

        expect(q.dequeue()).toBe('test_1_p');
        expect(q.dequeue()).toBe('test_2_p');
        expect(q.dequeue()).toBe('test_1_l');
    });

    it('isEmpty', () => {
        const q = createPriorityQueue();

        q.enqueue('test_1_p', true);
        q.enqueue('test_1_l', false);
        q.enqueue('test_2_p', true);

        expect(q.isEmpty()).toBeFalsy();

        q.dequeue();
        q.dequeue();
        q.dequeue();
        expect(q.isEmpty()).toBeTruthy();
    });
});
