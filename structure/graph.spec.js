const createGraph = require('./graph');

describe('graph', () => {
    it('addNode', () => {
        const g = createGraph();

        expect(g.nodes).toEqual([]);

        g.addNode('key_1');

        expect(g.print()).toBe('key_1');

        g.addNode();

        expect(g.print()).toBe('key_1');
    });

    it('print', () => {
        const g = createGraph();

        expect(g.nodes).toEqual([]);

        g.addNode('key_1');

        expect(g.print()).toBe('key_1');

        g.addNode('key_2');

        expect(g.print()).toBe('key_1\nkey_2');

        g.addEdge('key_1', 'key_2');

        expect(g.print()).toBe('key_1 => key_2\nkey_2 => key_1');
    });

    it('addEdge', () => {
        const g = createGraph();
        g.addNode('key_1');
        g.addNode('key_2');

        g.addEdge('key_1', 'key_2');
        expect(g.print()).toBe('key_1 => key_2\nkey_2 => key_1');

        const g1 = createGraph(true);
        g1.addNode('key_1');
        g1.addNode('key_2');

        g1.addEdge('key_1', 'key_2');
        expect(g1.print()).toBe('key_1 => key_2\nkey_2');
    });
});
