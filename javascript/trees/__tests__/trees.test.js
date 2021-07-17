const Node = require('../index').Node;
const BinaryTree = require('../index').BinaryTree;
const BinarySearchTree = require('../index').BinarySearchTree;

describe('Trees Tests',()=>{
    test('Can successfully instantiate an empty tree',()=>{
        let tree = new BinaryTree();
        expect(tree instanceof BinaryTree).toBe(true);
    });
    test('Can successfully instantiate a tree with a single root node',()=>{
        let tree = new BinaryTree();
        let head = new Node(10);
        tree.root = head;
        expect(tree.root.value).toBe(10);
        expect(tree.root.right).toBe(null);
        expect(tree.root.left).toBe(null);
    });
    test('Can successfully add a left child and right child to a single root node',()=>{
        let tree = new BinarySearchTree();
        tree.add(10);
        tree.add(18);
        tree.add(5);
        expect(tree.root.value).toBe(10);
        expect(tree.root.right.value).toBe(18);
        expect(tree.root.left.value).toBe(5);
    });
    test('Can successfully return a collection from a preorder traversal',()=>{
        let tree = new BinarySearchTree();
        tree.add(10);
        tree.add(15);
        tree.add(5);
        tree.add(7);
        tree.add(20);
        tree.add(13);
        tree.add(12);
        expect(tree.preOrder()).toEqual([10,5,7,15,13,12,20]);
        expect(tree.inOrder()).toEqual([5,7,10,12,13,15,20]);
        expect(tree.postOrder()).toEqual([7,5,12,13,20,15,10]);
    });
    test('Can successfully return a collection from a inorder traversal',()=>{
        let tree = new BinarySearchTree();
        tree.add(10);
        tree.add(15);
        tree.add(5);
        tree.add(7);
        tree.add(20);
        tree.add(13);
        tree.add(12);
        expect(tree.inOrder()).toEqual([5,7,10,12,13,15,20]);
    })
    test('Can successfully return a collection from a postorder traversal',()=>{
        let tree = new BinarySearchTree();
        tree.add(10);
        tree.add(15);
        tree.add(5);
        tree.add(7);
        tree.add(20);
        tree.add(13);
        tree.add(12);
        expect(tree.postOrder()).toEqual([7,5,12,13,20,15,10]);
    })
})