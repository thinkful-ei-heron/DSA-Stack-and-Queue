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

// {()(())()}
// () {} []
// stack.push({);
// stack.push((); 
// ( , {
// ) 
// stack.pop()
// {
// stack.push(()
// stack.push(()
// ( ( {
// stack


function matchingChar(str) {
    let stack = new Stack();
    let openChar = '([{';
    let closeChar = ')]}';
    let index = 0;
    for(let i = 0; i < str.length; i++) {
        if (openChar === str[i]) {
            index = i
            stack.push('(');
        }
        else if (str[i] === closeChar) {
            if(!peek(stack)){
                //console.log(i)
                return false;
            }
            stack.pop();
        }
        // else if (closeChar.includes(str[i]) && peek(stack) === null) {
        //     return false;
        // }
   }
    if(isEmpty(stack)){
        return true;
    } else {
        console.log(index);
        return false;
    }
   // console.log('final')
    // if(isEmpty(stack)) {
    //     console.log
    //     return true;
    // } else if (!isEmpty(stack)) return false;
}
// ())
  
let string01 = 'this()has the same(((num)) of (parens)';
let breakmaybe = '())'
let string = 'x) (hello)';
console.log(matchingChar(breakmaybe));

// outside matched = true;
// position = 0;
// ( < ) <-- true
// ((((()))))
// (()()())

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

// function matchingChar(str) {
//     let stack = new Stack();
//     let openChar = '(';
//     let closeChar = ')';
//     for(let i = 0; i < str.length; i++) {
//         if (openChar.includes(str[i])) {
//             stack.push(str[i]);
//         }
//         else if (openChar.indexOf(peek(stack)) === closeChar.indexOf(str[i])) { // <-- finding the pairs not 100%
//             stack.pop();
//         }
//         else if (closeChar.includes(str[i]) && peek(stack) === null) {
//             return false;
//         }
//     }
//     console.log(stack);
//     display(stack);
//     return;
//    // console.log('final')
//     // if(isEmpty(stack)) {
//     //     console.log
//     //     return true;
//     // } else if (!isEmpty(stack)) return false;
// }