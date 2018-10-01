// --- Directions
// 1) Create a node class.  The constructor
// should accept an argument that gets assigned
// to the data property and initialize an
// empty array for storing children. The node
// class should have methods 'add' and 'remove'.
// 2) Create a tree class. The tree constructor
// should initialize a 'root' property to null.
// 3) Implement 'traverseBF' and 'traverseDF'
// on the tree class.  Each method should accept a
// function that gets called with each element in the tree

class Node {
    constructor(data = null) {
        this.data = data;
        this.children = [];
    }

    add(data) {
        this.children.push(new Node(data));
    }

    remove(data) {
        this.children = this.children.filter(child => child.data !== data);
    }
}

class Tree {
    constructor() {
        this.root = null;
    }

    traverseBF(fn) {
        let node = this.root;
        let array = [];
        array.push(node);
        while (array.length > 0) {
            // const selectedNode = array.splice(0, 1)[0];
            const selectedNode = array.shift();
            array.push(...selectedNode.children);
            fn(selectedNode);
        }
    }

    traverseDF(fn) {
        let node = this.root;
        let array = [];
        array.push(node);
        while (array.length > 0) {
            // const selectedNode = array.splice(0, 1)[0];
            const selectedNode = array.shift();
            array.unshift(...selectedNode.children);
            fn(selectedNode);
        }
    }
}

module.exports = { Tree, Node };
