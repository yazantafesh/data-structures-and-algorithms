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

module.exports={ Node, BinaryTree, BinarySearchTree }