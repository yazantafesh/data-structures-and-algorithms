const BinarySearchTree = require('../index').BinarySearchTree;
const treeIntersection = require('../index').treeIntersection;

describe('Trees Intersection', () => {

  test('Gets the common node values between two identical trees', () => {

    let tree1 = new BinarySearchTree();
    let tree2 = new BinarySearchTree();

    tree1.add(10);
    tree1.add(5);
    tree1.add(3);
    tree1.add(7);
    tree1.add(15);
    tree1.add(13);
    tree1.add(17);
    tree2.add(10);
    tree2.add(5);
    tree2.add(3);
    tree2.add(7);
    tree2.add(15);
    tree2.add(13);
    tree2.add(17);

    expect(treeIntersection(tree1, tree2)).toEqual([10, 5, 3, 7, 15, 13, 17]);
  })
  test('Gets the common node values in two trees', () => {

    let tree1 = new BinarySearchTree();
    let tree2 = new BinarySearchTree();

    tree1.add(10);
    tree1.add(5);
    tree1.add(3);
    tree1.add(7);
    tree1.add(15);
    tree1.add(13);
    tree1.add(5);
    tree2.add(10);
    tree2.add(5);
    tree2.add(3);
    tree2.add(7);
    tree2.add(15);
    tree2.add(13);
    tree2.add(17);

    expect(treeIntersection(tree1, tree2)).toEqual([10, 5, 3, 7, 15, 13]);
  })
  test('No intersection', () => {

    let tree1 = new BinarySearchTree();
    let tree2 = new BinarySearchTree();

    tree1.add(10);
    tree1.add(5);
    tree1.add(3);
    tree1.add(7);
    tree1.add(15);
    tree1.add(13);
    tree1.add(5);
    tree2.add(0);
    tree2.add(0);
    tree2.add(0);
    tree2.add(0);
    tree2.add(0);
    tree2.add(0);
    tree2.add(0);

    expect(treeIntersection(tree1, tree2)).toEqual([]);
  })
})