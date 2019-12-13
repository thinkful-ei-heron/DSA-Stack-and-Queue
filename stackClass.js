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
        }
        let node = new Node(item, this.top);
        this.top = node;
    }
    pop() {
        const node = this.top;
        this.top = node.next;
        return node.data;
    }
}

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
    if (stack.top === null) return true;
    return false;
}
function peek(stack) {
    if (stack.top === null) return null;
    return stack.top.data;
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

// () <-- true
// ((()))} <--- false
// (( ( )(( ))( ) ))
// console.log('(' < ')');
// console.log('[' < ']');
// console.log('{' < '}');
// iterate over the string create a stack from characters that match "(" or ")"
// concate into a string
// 

// function matchingChar(s){
//     let reversed = new Stack();
    
//     let compare = '';
//     let specChars = ['(',')','[',']','{','}'];
//     for(let i = 0; i < s.length; i++) {
//         if(specChars.includes(s[i])){
//            reversed.push(s[i]);
//            compare += s[i];
//         }
//     }
//     if(reversed.top === null) return false;
// console.log(compare);
// for(let i=0; i<compare.length; i++) {
//     if(compare[i] > compare[i+1]) {
//         return i
//     } 
// }
// }
function matchingChar(str) {
    let stack = new Stack();
    if (str.length <= 1) return false;
    let matchingOpeningBracket, currChar;
    let openingBrackets = ['[', '{', '('];
    let closingBrackets = [']', '}', ')'];
    for (let i = 0; i < str.length; i++) {
        currChar = str[i];
   // if(openingBrackets.includes(currChar) || closingBrackets.includes(currChar)) {
      if (closingBrackets.indexOf(currChar) > -1) {
        matchingOpeningBracket = openingBrackets[closingBrackets.indexOf(currChar)];
        if (stack.top === null || (stack.pop() != matchingOpeningBracket)) return {value:false, pos:i};
      } else stack.push(currChar);
        //}
    }
    return !(stack.top === null);
}
  
let string01 = 'this(has) the same(num) of (parens)';
let string = '{}}';
console.log(matchingChar(string01));

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
    //display(starTrek);
   // isEmpty(starTrek);
}


main();