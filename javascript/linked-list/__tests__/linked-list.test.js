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

  it(' Add a node to the end ',()=>{
    const ll = new LinkedList();

    ll.append('one');
    ll.append('two');

    expect(ll.head.next.value).toBe('two');
  });

  it('Add multiple nodes ',()=>{
    const ll = new LinkedList();

    ll.append('one');
    ll.append('two');
    ll.append('three');
    ll.append('four');

    expect(ll.head.next.next.next.value).toBe('four');
  });
  it('Insert in the middle',()=>{
    const ll = new LinkedList();

    ll.append('one');
    ll.append('two');
    ll.append('three');
    ll.append('four');
    ll.insertBefore('yazan','three');

    expect(ll.head.next.next.value).toBe('yazan');
  })
  it('Insert before first',()=>{
    const ll = new LinkedList();

    ll.append('one');
    ll.append('two');
    ll.append('three');
    ll.append('fourth');
    ll.insertBefore('yazan','one');

    expect(ll.head.value).toBe('yazan');
  })
  it('Insert after a value',()=>{
    const ll = new LinkedList();

    ll.append('one');
    ll.append('two');
    ll.append('three');
    ll.append('four');
    ll.insertAfter('yazan','three');

    expect(ll.head.next.next.next.value).toBe('yazan');
  })
  it('Insert after last',()=>{
    const ll = new LinkedList();

    ll.append('one');
    ll.append('two');
    ll.append('three');
    ll.append('four');
    ll.insertAfter('yazan','four');

    expect(ll.head.next.next.next.next.value).toBe('yazan');
  })

  describe('Kth from end', () => {

    it('k is greater than the length of the linked list',()=>{
      const ll = new LinkedList();
  
      ll.append('one');
      ll.append('two');
      ll.append('three');
      ll.append('four');
      ll.insertAfter('yazan','four');
  
      expect(ll.kthFromEnd(9)).toBe('Exception');
    })

    it('k and the length are the same',()=>{
      const ll = new LinkedList();
  
      ll.append('one');
      ll.append('two');
      ll.append('three');
      ll.append('four');
      ll.insertAfter('yazan','four');
  
      expect(ll.kthFromEnd(5)).toBe('Exception');
    })

    it('K is not a positive integer',()=>{
      const ll = new LinkedList();
  
      ll.append('one');
      ll.append('two');
      ll.append('three');
      ll.append('four');
      ll.insertAfter('yazan','four');
  
      expect(ll.kthFromEnd(-5)).toBe('Exception');
    })

    it('Linked list of size 1',()=>{
      const ll = new LinkedList();
  
      ll.insert('one');
  
      expect(ll.kthFromEnd(1)).toBe('Exception');
      expect(ll.kthFromEnd(0)).toBe('one');
      expect(ll.kthFromEnd(-1)).toBe('Exception');
    })

    it('Happy Path',()=>{
      const ll = new LinkedList();
  
      ll.append('one');
      ll.append('two');
      ll.append('three');
      ll.append('four');
      ll.insertAfter('yazan','four');
  
      expect(ll.kthFromEnd(2)).toBe('three');
   
    })

  });

});
