class Node {
    constructor(data, prev, next) {
        this.data = data;
        this.prev = prev;
        this.next = next;
    }
}

class Queue {
    constructor() {
        this.first = null;
        this.last = null;
    }
    enqueue(data) {
        const node = new Node(data, null);
        if (this.first === null) {
            this.first = node;
        }
        if (this.last) {
            this.last.next = node;
        }
        this.last = node;
    }
    dequeue() {
        if (this.first === null) {
            return;
        }
        const node = this.first;
        this.first = this.first.next;
        if (node === this.last) {
            this.last = null;
        }
        return node.value;
    }
}

class DoubleLinkedQueue {
    constructor() {
        this.first = null;
        this.last = null;
    }
    enqueue(data) {
        // O , O , O
        const node = new Node(data);
        if (this.first === null) {
            this.first = node;
        }
        // if (this.last) {
        //     this.last = node;
        // }
        this.last = node;
    }
}



function display(q) {
    console.log(q);
    let currNode = q.first;
    if(q.first === null) return null;
    while (currNode) {
        console.log(currNode.data);
        currNode = currNode.last;
    }
    return;
}

function peek(q) {
    if (q.first === null) return null;
    return q.first.data;
}

function isEmpty(q) {
    //console.log(q);
    if (!q.first) {
        return true;
    } else return false;
}

function main() {
    let starTrekQ = new Queue();
    starTrekQ.enqueue('Kirk');
    starTrekQ.enqueue('Spock');
    starTrekQ.enqueue('Ohura');
    starTrekQ.enqueue('Sulu');
    starTrekQ.enqueue('Checkov');
    starTrekQ.dequeue();
    display(starTrekQ);
    return 'Finished Main Function';
}

console.log(main());