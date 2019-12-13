class Node {
    constructor(data, next) {
        this.data = data;
        this.next = next;
    }
}


class Stack {
    constructor() {
        this.top = null;
    }
    push(item) {
        if (this.top === null) {
            let node = new Node(item, null);
            this.top = node;
        } else {
            let node = new Node(item, this.top);
            this.top = node;
        }
    }
    pop() {
        const node = this.top;
        this.top = node.next;
        return node.data;
    }
}
// const node = this.top;
// if(node === null) {
//     this.top = null;
//     //console.log('This is empty');
//     return;
// } else {
//     this.top = node.next;
//     return node.data;
// }

// pop() {
//     const node = this.top;
//     this.top = node.next;
//     return node.data;
// }

function display(stk) {
    let currNode = stk.top;
    if (stk.top === null) return null;
    while (currNode.next !== null) {
        console.log(currNode.data);
        currNode = currNode.next;
    }
    return;
}

function isEmpty(stack) {
    console.log(stack)
    if (stack.top === null) {
        return true;
    } else return false;
}

function peek(stack) {
    if (stack.top === null) {
        return null;
    } else return stack.top.data;
}

function is_palindrome(s) {
    s = s.toLowerCase().replace(/[^a-zA-Z0-9]/g, '');
    let stack = new Stack();
    let compare = '';
    for (let i = 0; i < s.length; i++) {
        stack.push(s[i]);
    }
    for (let i = 0; i < s.length; i++) {
        compare += stack.pop();
    }
    return s === compare ? true : false;
}
// console.log(is_palindrome('dad'));
// console.log(is_palindrome('A man, a plan, a canal: Panama'));
// console.log(is_palindrome('1001'));
// console.log(is_palindrome('Tauhida'));

let string01 = 'this()has the same(((num)) of (parens)';
function matchingChar(str) {
    let stack = new Stack();
    let openChar = '(';
    let closeChar = ')';
    let index = 0;
    for (let i = 0; i < str.length; i++) {
        if (openChar === str[i]) {
            index = i;
            stack.push(')');
        }
        else if (str[i] === closeChar) {
            if (!peek(stack)) {
                console.log(i);
                return false;
            }
            stack.pop();
        }
    }
    if (isEmpty(stack)) {
        return true;
    } else {
        console.log(index);
        return false;
    }
}

// "([)]"

let breakMaybe = '[{(}this is a test)]';
let string = 'x (hello)';
//console.log(matchingChar(breakMaybe));


function main() {
    let starTrek = new Stack();
    starTrek.push('Kirk');
    starTrek.push('Spock');
    starTrek.push('McCoy');
    starTrek.push('Scotty');
    starTrek.pop();
    //display(starTrek);
    // isEmpty(starTrek);
}


main();

function matchingChar2(str) {
    let stack = new Stack();
    let openChar = '([{';
    let closeChar = ')]}';
    let index = 0;
    let returnedChar = null;
    for (let i = 0; i < str.length; i++) {
        if (openChar.includes(str[i])) {
            index = i;
            stack.push(str[i]);
        }
        if (closeChar.includes(str[i])) {
            let top = peek(stack);
            if (!top) {
                return false;
            }
            if (openChar.indexOf(top) === closeChar.indexOf(str[i])) {
                stack.pop();
                return;
            }
            if (openChar.indexOf(top) !== closeChar.indexOf(str[i])) {
                console.log(`Expecting a ${closeChar[openChar.indexOf(top)]} but found a ${str[i]}`);
                return false;
            }
        }
    }
    if (isEmpty(stack)) {
        return true;
    } else {
        console.log(index);
        return false;
    }
}
// console.log(matchingChar2(breakMaybe));

function sort(list) {

    let sortStack = new Stack();
    while(!isEmpty(list)) {
        let x = list.pop();
        while(!isEmpty(sortStack) && x > peek(sortStack)) {
            list.push(sortStack.pop());
        }
        sortStack.push(x);
    }
    return display(sortStack);
}



