const Node = require('../k-aryTree.js').Node;
const KaryTree = require('../k-aryTree.js').KaryTree;
const fizzBuzz = require('../k-aryTree.js').fizzBuzz;

describe('K-ary Tree Tests', () => {
    let node1 = new Node(3, 4);
    let node2 = new Node(5, 2);
    let node3 = new Node(3, 3);
    let node4 = new Node(10, 4);
    let node5 = new Node(5, 1);
    let node6 = new Node(15, 3);
    let node7 = new Node(7, 2);
    let node8 = new Node(8, 2);
    let kTree = new KaryTree();

    kTree.add(node1);
    kTree.add(node2);
    kTree.add(node3);
    kTree.add(node4);
    kTree.add(node5);
    kTree.add(node6);
    kTree.add(node7);
    kTree.add(node8);

    test('Instantiate and empty k-ary tree', () => {
        let kT = new KaryTree();
        expect(kT instanceof KaryTree).toBe(true);
    })
    test('Can add to the K-ary tree', () => {
        expect(kTree.root.value).toBe(3);
    })
    test('Happy Path for FizzBuzz Function',()=>{
        expect((fizzBuzz(kTree))).toEqual({"value":"Fizz","NoOfChildren":4,"child1":{"value":"Buzz","NoOfChildren":2,"child1":{"value":"FizzBuzz","NoOfChildren":3,"child1":{"value":null,"NoOfChildren":null},"child2":{"value":null,"NoOfChildren":null},"child3":{"value":null,"NoOfChildren":null}},"child2":{"value":"7","NoOfChildren":2,"child1":{"value":null,"NoOfChildren":null},"child2":{"value":null,"NoOfChildren":null}}},"child2":{"value":"Fizz","NoOfChildren":3,"child1":{"value":"8","NoOfChildren":2,"child1":{"value":null,"NoOfChildren":null},"child2":{"value":null,"NoOfChildren":null}},"child2":{"value":null,"NoOfChildren":null},"child3":{"value":null,"NoOfChildren":null}},"child3":{"value":"Buzz","NoOfChildren":4,"child1":{"value":null,"NoOfChildren":null},"child2":{"value":null,"NoOfChildren":null},"child3":{"value":null,"NoOfChildren":null},"child4":{"value":null,"NoOfChildren":null}},"child4":{"value":"Buzz","NoOfChildren":1,"child1":{"value":null,"NoOfChildren":null}}})
    })
    test('Expected to Fail',()=>{
        let kT = new KaryTree();
        expect(fizzBuzz(kT)).toEqual('Empty Tree');
    })
})