'use strict';

class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
      this.head = null;
  }

  insert(value) {
    let node = new Node(value);
    if (!this.head) {
      this.head = node;
    } else {
      node.next = this.head;
      this.head = node;
    }
  }

  includes(value) {
    let pointer = this.head;
    if (!this.head) {
      return false;
    } else {

      while (pointer.next) {
        if (pointer.value == value) {
          return true;
        }
        pointer = pointer.next;

        if (pointer.next == null && value == pointer.value) {
          return true;
        }
      }
      return false;
    }
  }

  toString() {
    let string = '';
    let pointer = this.head;

    while (pointer.next) {
      if(pointer.value == null || pointer.value == undefined){
        string = string + `NULL -> `;
      }else{

        string = string + `{${pointer.value}} -> `
      }
      pointer = pointer.next;
      if(pointer.next == null){
        string = string + `{${pointer.value}}`
      }
    }

    return string;

  }
}

module.exports = LinkedList;
