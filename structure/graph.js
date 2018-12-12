function createGraph(isDirected = false) {
    const nodes = [];
    const edges = [];

    function createNode(key) {
        const neighbors = [];

        return {
            key,
            neighbors,
            addNeighbor(node) {
                neighbors.push(node);
            },
        };
    }

    return {
        isDirected,
        nodes,
        edges,

        addNode(key) {
            if (key) nodes.push(createNode(key));
        },

        getNode(key) {
            return nodes.find(node => key === node.key);
        },

        addEdge(firstKey, secondKey) {
            const firstNode = this.getNode(firstKey);
            const secondNode = this.getNode(secondKey);

            firstNode.addNeighbor(secondNode);

            if (!isDirected) {
                secondNode.addNeighbor(firstNode);
            }

            edges.push(`${firstKey}-${secondKey}`);
        },

        print() {
            return nodes
                .map(({ neighbors, key }) => {
                    let result = `${key}`;

                    if (neighbors.length) {
                        result += ` => ${neighbors
                            .map(node => node.key)
                            .join(' ')}`;
                    }

                    return result;
                })
                .join('\n');
        },
    };
}

module.exports = createGraph;
