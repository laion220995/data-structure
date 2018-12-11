const createList = require('./list');

describe('list', () => {
    it('get', () => {
        const l = createList();

        expect(l.get(1)).toBe(null);
        expect(l.get(0)).toBe(null);
        expect(l.get(-1)).toBe(null);
        expect(l.get(-2)).toBe(null);

        l.push('test_1');

        expect(l.get(0)).toEqual({ value: 'test_1', next: null });
        expect(l.get(2)).toBe(null);
    });

    it('push', () => {
        const l = createList();

        l.push('test_1');
        expect(l.get(0)).toEqual({ value: 'test_1', next: null });

        l.push('test_2');
        expect(l.get(1)).toEqual({ value: 'test_2', next: null });

        l.push('test_3');
        expect(l.get(2)).toEqual({ value: 'test_3', next: null });

        expect(l.print()).toBe('test_1 => test_2 => test_3');
    });

    it('pop', () => {
        const l = createList();

        l.push('test_1');
        l.push('test_2');
        l.push('test_3');

        expect(l.print()).toBe('test_1 => test_2 => test_3');

        expect(l.pop()).toEqual({ value: 'test_3', next: null });
        expect(l.pop()).toEqual({ value: 'test_2', next: null });
        expect(l.pop()).toEqual({ value: 'test_1', next: null });

        expect(l.print()).toBe('');
    });

    it('delete', () => {
        const l = createList();

        l.push('test_1');
        l.push('test_2');
        l.push('test_3');
        l.delete(1);

        expect(l.print()).toBe('test_1 => test_3');

        expect(l.delete(-1)).toBe(null);
        expect(l.delete(3)).toBe(null);
    });

    it('isEmpty', () => {
        const l = createList();

        l.push('test_1');
        l.push('test_2');
        l.push('test_3');

        expect(l.isEmpty()).toBe(false);

        l.pop();
        l.pop();
        l.pop();

        expect(l.isEmpty()).toBe(true);
    });
});
