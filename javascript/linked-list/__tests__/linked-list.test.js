'use strict';

// Require our linked list implementation
const LinkedList = require('../index');

describe('Linked List', () => {

  it('Test Instantiation', () => {
    const ll = new LinkedList();

    expect(ll).toBeDefined();
    expect(ll.head).toBeNull();
  });


  it('Test Insertion', () => {
    const ll = new LinkedList();

    ll.insert('a');

    expect(ll.head.value).toEqual('a');
    expect(ll.head.next).toBeNull();
  });

  it('Test Head Property', () => {
    const ll = new LinkedList();

    ll.insert('a');
    ll.insert('b');

    expect(ll.head.value).toEqual('b');
    expect(ll.head.next.value).toEqual('a');
  });

  it('Test Multiple Insertions', () => {
    const ll = new LinkedList();

    ll.insert('a');
    ll.insert('b');
    ll.insert('c');

    expect(ll.head.value).toEqual('c');
    expect(ll.head.next.value).toEqual('b');
    expect(ll.head.next.next.value).toEqual('a');
  });

  it('Test Includes', () => {
    const ll = new LinkedList();

    ll.insert('a');
    ll.insert('b');
    ll.insert('c');

    expect(ll.includes('c')).toBe(true);
    expect(ll.includes('a')).toBe(true);
    expect(ll.includes('h')).toBe(false);
  });

  it('Test Reading All Node Values',()=>{
    let ll = new LinkedList();

    ll.insert('a');
    ll.insert(false);
    ll.insert(null);
    ll.insert('c');
    ll.insert('d');

    expect(ll.toString()).toBe('{d} -> {c} -> NULL -> {false} -> {a}');
  });




});
