const HashTable = require('../index').Hashtable;
const Node = require('../index').Node;
const LinkedList = require('../index').LinkedList;


describe ('Hashtable Tests', () => {
  const hashmap = new HashTable(4000);

  test('add', () => {

    hashmap.add('name', 'Yazan');
    hashmap.add('one', 'test');
    hashmap.add('neo', 'test1');

    expect(hashmap.contains('hello')).toEqual(false);
    expect(hashmap.contains('one')).toEqual(true);

  })

  test('Retrieving based on a key returns the value stored', () => {
    expect(hashmap.get('name')).toEqual(['Yazan'])

  })

  test('Successfully returns null for a key that does not exist in the hashtable', () => {
    expect(hashmap.get('hello')).toBe(null)

  })

  test('Successfully handle a collision within the hashtable', () => {
    
    expect(hashmap.add('name', 'Moe')).toBe("Moe")

  })

  test('Successfully retrieve a value from a bucket within the hashtable that has a collision', () => {
    
    hashmap.add('mane', 'Moe')
    expect(hashmap.get('mane')).toEqual(["Moe"])

  })

  test('Successfully hash a key to an in-range value', () => {
    
    expect(hashmap.hash('food')).toBe(56)

  })

})