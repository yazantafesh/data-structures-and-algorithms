class Node {
  constructor(value) {
    this.value = value;
    this.right = null;
    this.left = null;
  }
}
class BinaryTree {
  constructor(root) {
    this.root = null;
  }
  preOrder() {
    const result = [];
    const _move = (node) => {
      result.push(node.value);
      if (node.left) _move(node.left);
      if (node.right) _move(node.right);
    };
    _move(this.root);
    return result;
  }
  postOrder() {
    const result = [];
    const _move = (node) => {
      if (node.left) _move(node.left);
      if (node.right) _move(node.right);
      result.push(node.value);
    };
    _move(this.root);
    return result;
  }
  inOrder() {
    const result = [];
    const _move = (node) => {
      if (node.left) _move(node.left);
      result.push(node.value);
      if (node.right) _move(node.right);
    };
    _move(this.root);
    return result;
  }
  findMax(){
    if(this.root == null){
      return('Cannot get the maximum value of an empty tree');
    }
    let maximum = this.root.value;
    const _view =(node)=>{
      if(node.value >= maximum){
        maximum = node.value
      }
      if(node.left) _view(node.left);
      if(node.right)_view(node.right);
    }
    _view(this.root);
    return maximum;
  }
}
class BinarySearchTree extends BinaryTree {
  constructor(root) {
    super(root);
  }
  add(value) {
    let node = new Node(value);
    let pointer = this.root;

    const _add = (node) => {
      if (!this.root) {
        this.root = node;
      } else if (node.value > pointer.value) {
        if (pointer.right) {
          pointer = pointer.right;
          _add(node)
        } else {
          pointer.right = node;
        }
      } else if (node.value < pointer.value) {
        if (pointer.left) {
          pointer = pointer.left;

          _add(node)
        } else {
          pointer.left = node;
        }
      }
    }
    _add(node);
  }

search(value){
 let orderList= tree.inOrder()
 
 if(orderList.includes(value)){
   return true;
 }
 else{
   return false
 }
}
}

function breadthFirst(tree) {

  let rootNode = tree.root;

  if (rootNode === null) {
    return 'Empty Tree';
  }

  let tempQueue = [];
  let breadthOrder = [];

  tempQueue.push(rootNode);

  while (tempQueue.length > 0) {

    let currentNode = tempQueue[0];

    if (currentNode.left !== null) {
      tempQueue.push(currentNode.left)
    }

    if (currentNode.right !== null) {
      tempQueue.push(currentNode.right)
    }

    breadthOrder.push(tempQueue.shift().value)
  }
  return breadthOrder;
}

function treeIntersection(tree1,tree2){
  let array1 = tree1.preOrder();
  let array2 = tree2.preOrder();

  let results = [];

  for(let i=0;i<array1.length;i++){
      if(array2.includes(array1[i])){
          results.push(array1[i]);
      }
  }
  return results;
}

module.exports={ Node, BinaryTree, BinarySearchTree, breadthFirst, treeIntersection }