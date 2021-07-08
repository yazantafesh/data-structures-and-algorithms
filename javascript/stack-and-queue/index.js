'use strict';

class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

class Stack {
  constructor(linkedList) {
    this.storage = linkedList;
  }

  peek() {
    if (!this.storage.head) {
      return 'Empty Stack';
    }
    return this.storage.head.value;
  }

  push(value) {
    try {
      let node = new Node(value);
      if (!this.storage.head) {
        this.storage.head = node;
      } else {
        node.next = this.storage.head;
        this.storage.head = node;
      }
    } catch {
      console.log('Please enter a valid input');
    }
  }

  pop() {
    if (!this.storage.head) {
      return 'Empty Stack';
    }
    let holder = this.storage.head;

    this.storage.head = holder.next;
    holder.next = null;
    return holder.value;

  }

  isEmpty() {
    if (!this.storage.head) {
      return true;
    } else {
      return false;
    }
  }
}

class Queue {
  constructor(linkedList) {
    this.storage = linkedList;
  }

  enqueue(value) {
    try {
      let node = new Node(value);
      if (!this.storage.head) {
        this.storage.head = node;
        this.storage.last = node;
      } else {
        this.storage.last.next = node;
        this.storage.last = node;
        }
    } catch {
      console.log('Please enter a valid input');
    }
  }

  dequeue() {
    if (!this.storage.head) {
      return 'Empty Queue';
    }
    let holder = this.storage.head;

    this.storage.head = holder.next;
    holder.next = null;
    return holder.value;
  }

  peek() {
    if (!this.storage.head) {
      return 'Empty Queue';
    }
    return this.storage.head.value;
  }

  isEmpty() {
    if (!this.storage.head) {
      return true;
    } else {
      return false;
    }
  }
}

module.exports = { Stack, Queue };