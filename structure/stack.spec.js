const createStack = require('./stack');

describe('stack', () => {
    it('isEmpty', () => {
        const s = createStack();
        s.push(1);
        s.push(2);
        expect(s.isEmpty()).toBeFalsy();

        s.pop();
        s.pop();
        expect(s.isEmpty()).toBeTruthy();
    });

    it('push', () => {
        const s = createStack();

        s.push(1);
        expect(s.peek()).toBe(1);

        s.push(2);
        expect(s.peek()).toBe(2);
    });

    it('pop', () => {
        const s = createStack();

        s.push(1);
        s.push(2);

        expect(s.pop()).toBe(2);
        expect(s.pop()).toBe(1);
        expect(s.pop()).toBe(undefined);
    });

    it('length', () => {
        const s = createStack();

        s.push(1);
        s.push(2);

        expect(s.length).toBe(2);

        s.pop();
        s.pop();

        expect(s.length).toBe(0);
    });

    it('peek', () => {
        const s = createStack();
        expect(s.peek()).toBe(undefined);

        s.push(1);
        expect(s.peek()).toBe(1);

        s.push(2);
        expect(s.peek()).toBe(2);
    });
});
