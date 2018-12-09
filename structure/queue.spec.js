const createQueue = require('./queue');

describe('queue', () => {
    it('peek', () => {
        const q = createQueue();

        expect(q.peek()).toBe(undefined);

        q.enqueue('test_1');
        expect(q.peek()).toBe('test_1');

        q.enqueue('test_2');
        expect(q.peek()).toBe('test_1');
    });

    it('length', () => {
        const q = createQueue();

        q.enqueue('test_1');
        q.enqueue('test_2');
        q.enqueue('test_3');

        expect(q.length).toBe(3);
    });

    it('enqueue', () => {
        const q = createQueue();

        q.enqueue('test_1');
        expect(q.peek()).toBe('test_1');

        q.enqueue(1);
        expect(q.peek()).toBe('test_1');
    });

    it('dequeue', () => {
        const q = createQueue();

        q.enqueue('test_1');
        q.enqueue('test_2');
        q.enqueue('test_3');

        expect(q.dequeue()).toBe('test_1');
        expect(q.dequeue()).toBe('test_2');
        expect(q.dequeue()).toBe('test_3');
        expect(q.dequeue()).toBe(undefined);
    });

    it('isEmpty', () => {
        const q = createQueue();

        expect(q.isEmpty()).toBeTruthy();

        q.enqueue('test_3');
        expect(q.isEmpty()).toBeFalsy();
    });
});
