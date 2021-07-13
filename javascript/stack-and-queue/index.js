'use strict';

class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

class Stack {
  constructor() {
    this.top = null;
  }

  peek() {
    if (!this.top) {
      return 'Empty Stack';
    }
    return this.top.value;
  }

  push(value) {
    try {
      let node = new Node(value);
      if (!this.top) {
        this.top = node;
      } else {
        node.next = this.top;
        this.top = node;
      }
    } catch {
      console.log('Please enter a valid input');
    }
  }

  pop() {
    if (!this.top) {
      return 'Empty Stack';
    }
    let holder = this.top;

    this.top = holder.next;
    holder.next = null;
    return holder.value;

  }

  isEmpty() {
    if (!this.top) {
      return true;
    } else {
      return false;
    }
  }
}

class Queue {
  constructor() {
    this.front = null;
    this.rear = null;
  }

  enqueue(value) {
    try {
      let node = new Node(value);
      if (!this.front) {
        this.front = node;
        this.rear = node;
      } else {
        this.rear.next = node;
        this.rear = node;
        }
    } catch {
      console.log('Please enter a valid input');
    }
  }

  dequeue() {
    if (!this.front) {
      return 'Empty Queue';
    }
    let holder = this.front;

    this.front = holder.next;
    holder.next = null;
    return holder.value;
  }

  peek() {
    if (!this.front) {
      return 'Empty Queue';
    }
    return this.front.value;
  }

  isEmpty() {
    if (!this.front) {
      return true;
    } else {
      return false;
    }
  }

  
}

class PseudoQueue {

  constructor() {
    this.s1 = new Stack();
    this.s2 = new Stack();
  }

  enqueue(value) {

    while (this.s1.top) {
      this.s2.push(this.s1.pop());
    }
    this.s1.push(value);

    while (this.s2.top) {
      this.s1.push(this.s2.pop());
    }
  }


  dequeue() {

    if (!this.s1.top) {
      return "Pseudo Queue is Empty";
    }
    return this.s1.pop();
  }
}

class AnimalShelter {
  constructor() {
    this.front = null;
    this.rear = null;
  }

  enqueue(value) {

    if (value != "dog" && value != "cat") {
      return "can only accept cat or dog";
    }
    try {

      let node = new Node(value);
      if (!this.front) {
        this.front = node;
        this.rear = node;
      } else {
        this.rear.next = node;
        this.rear = node;
      }
    } catch {
      console.log('Please enter a valid input');
    }
  }

  dequeue() {
    if (!this.front) {
      return 'Animal Shelter is Empty';
    }
    let holder = this.front;

    this.front = holder.next;
    holder.next = null;
    return holder.value;
  }
}

function validateBrackets(string) {

  let bracketTypes = "[]{}()";
  let stack = new Stack();

  for (let i = 0; i < string.length; i++) {
    let bracketIdx = bracketTypes.indexOf(string[i]);

    if (bracketIdx === -1) {
      continue;
    }
    if (bracketIdx % 2 === 0) {
      stack.push(bracketIdx + 1);
    } else if (stack.pop() !== bracketIdx) {
      return false;
    }
  }
  return stack.isEmpty();
}

module.exports = { Stack, Queue, PseudoQueue, AnimalShelter, validateBrackets };