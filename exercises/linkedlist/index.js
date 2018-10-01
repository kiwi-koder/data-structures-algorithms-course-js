// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
    constructor(data, node = null) {
        this.data = data;
        this.next = node;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }

    insertFirst(data) {
        this.head = new Node(data, this.head);
    }

    size() {
        if (this.head === null) return 0;
        let size = 1;
        let node = this.head.next;
        while (node !== null) {
            size++;
            node = node.next;
        }
        return size;
    }

    getFirst() {
        return this.head;
    }

    getLast() {
        let node = this.head;
        while (node !== null && node.next !== null) {
            node = node.next;
        }
        return node;
    }

    clear() {
        this.head = null;
    }

    removeFirst() {
        if (this.head !== null) {
            this.head = this.head.next;
        }
    }

    removeLast() {
        const size = this.size();
        if (size <= 1) {
            this.clear();
            return;
        }
        let node = this.head;
        for (let i = 2; i < this.size(); i++) {
            node = node.next;
        }
        node.next = null;
    }

    insertLast(data) {
        if (this.head === null) {
            this.head = new Node(data);
        } else {
            let node = this.head;
            while (node.next !== null) {
                node = node.next;
            }
            node.next = new Node(data);
        }
    }

    getAt(int) {
        let node = this.head;
        for (let i = 0; i < int; i++) {
            if (node === null) return null;
            node = node.next;
        }
        return node;
    }

    removeAt(int) {
        if (int >= this.size() || int < 0) return;
        if (int === 0) return this.removeFirst();
        let node = this.head;
        for (let i = 1; i < int; i++) {
            node = node.next;
        }
        node.next = node.next.next;
        return;
    }

    insertAt(data, int) {
        if (int < 0) return;
        if (int === 0) {
            this.insertFirst(data);
            return;
        }
        let node = this.head;
        for (let i = 1; i < int; i++) {
            node = node.next;
            if (node.next === null) {
                node.next = new Node(data, null);
                return;
            }
        }
        node.next = new Node(data, node.next);
    }

    forEach(fn) {
        let node = this.head;
        while (node !== null) {
            fn(node);
            node = node.next;
        }
    }

    *[Symbol.iterator]() {
        let node = this.head;

        while (node) {
            yield node;
            node = node.next;
        }
    }
}

module.exports = { Node, LinkedList };
