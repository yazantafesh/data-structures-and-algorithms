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
    try {

      let node = new Node(value);
      if (!this.head) {
        this.head = node;
      } else {
        node.next = this.head;
        this.head = node;
      }
    } catch {
      console.log('Please enter a valid input');
    }
  }

  includes(value) {
    try {

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
    } catch {
      console.log('Please enter a valid input');
    }
  }

  toString() {
    try {

      let string = '';
      let pointer = this.head;

      while (pointer.next) {
        if (pointer.value == null || pointer.value == undefined) {
          string = string + `NULL -> `;
        } else {

          string = string + `{${pointer.value}} -> `
        }
        pointer = pointer.next;
        if (pointer.next == null) {
          string = string + `{${pointer.value}}`
        }
      }

      return string;
    } catch {
      console.log('An error occured');
    }

  }

  append(value) {
    const node = new Node(value);
    if (!this.head) {
      this.head = node;
    } else {
      let pointer = this.head;
      while (pointer.next) {
        pointer = pointer.next;
      }
      pointer.next = node;
    }
  }

  insertBefore(newValue, value) {
    const node = new Node(newValue);
    let pointer = this.head;

    if (value == this.head.value) {
      node.next = this.head;
      this.head = node;
    } else {

      while (pointer) {
        if (pointer.next.value == value) {
          node.next = pointer.next;
          pointer.next = node;
          break;
        }
        pointer = pointer.next;
      }
    }
  }


  insertAfter(newValue, value) {
    let node = new Node(newValue);
    let pointer = this.head;

    while (pointer) {

      if (pointer.value == value) {
        node.next = pointer.next;
        pointer.next = node;
        break;
      }
      pointer = pointer.next;
    }
  }

  kthFromEnd(k){
    
    let pointer=this.head;
    let array = [];

   while(pointer){
     array.push(pointer.value);
     pointer = pointer.next;
   }
  if (array.length <= k || k < 0){
    return 'Exception';
  } else {
    return array[array.length-1-k]
  }
  }
}

module.exports = LinkedList;
