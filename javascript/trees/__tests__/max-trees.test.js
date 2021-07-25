const Node = require('../index').Node;
const BinaryTree = require('../index').BinaryTree;

describe('Find Max Value in a Tree',()=>{

    let tree = new BinaryTree();
    let node1 = new Node(9);
    let node2 = new Node(5);
    let node3 = new Node(1);
    let node4 = new Node(0);
    let node5 = new Node(13);
    let node6 = new Node(17);
    let node7 = new Node(3);
    let node8 = new Node(20);
    let node9 = new Node(2);

    tree.root = node1;
    tree.root.left = node2;
    tree.root.right = node3;
    tree.root.left.left = node4;
    tree.root.left.right = node5;
    tree.root.right.left = node6;
    tree.root.right.right = node7;
    tree.root.right.right.left = node8;
    tree.root.right.right.right = node9;

    let tree2 = new BinaryTree();
    

  test('Can successfully get the maximum value in a tree',()=>{
      expect(tree.findMax()).toEqual(20);
  });
  test('Test expected to fail on an empty tree',()=>{
     expect(tree2.findMax()).toBe('Cannot get the maximum value of an empty tree');
  });
})