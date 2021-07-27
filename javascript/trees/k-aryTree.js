class Node {
  constructor(value = null,NoOfChildren = null) {
      this.value = value;
      this.NoOfChildren = NoOfChildren;

      for(let i=1;i<=NoOfChildren;i++){
        this[`child${i}`]=(new Node())
      }
    }
}
class KaryTree{
constructor(){
  this.root=null;
}

add(newNode){
  if(!this.root){
    this.root = newNode;
  }else{
    if(newNode.NoOfChildren>this.root.NoOfChildren){
      return 'Number of children is higher than max';
    }else{
      _moveAndAdd(this.root);
    }

  function _moveAndAdd(curr){
        let vacancyCheck = false;
        for(let i=1; i<=curr.NoOfChildren;i++){
          if(curr[`child${i}`].value==null){
            vacancyCheck = true;
          }
        }
        if(vacancyCheck){
              for(let i=1;i<=curr.NoOfChildren;i++){
                if(curr[`child${i}`].value==null){
                curr[`child${i}`] = newNode;
                break;
               }
             }
        }else{
          for (let i=1;i<=curr.NoOfChildren;i++) {
            if(curr[`child${i}`][`child${curr[`child${i}`].NoOfChildren}`].value==null){
            _moveAndAdd(curr[`child${i}`]);
              break;
            }
          }
      }
    }
  }
}
}

function fizzBuzz(tree){
  let newKTree = new KaryTree();
   let root = {...tree.root};
    if (!tree.root) {
      return 'Empty Tree';
    }
      if(root.value%3==0&&root.value%5!==0){
        root.value='Fizz';
      }else if(root.value%3==0&&root.value%5==0){
        root.value='FizzBuzz';
      }else if(root.value%5==0&&root.value%3!==0){
        root.value='Buzz';
      }else{
        root.value=root.value.toString();
      }
      newKTree.add(new Node(root.value,root.NoOfChildren));
      move(root);
      function move(curr){
        for(let i=1;i<=curr.NoOfChildren;i++){
          if(curr[`child${i}`].value!==null){
            if(curr[`child${i}`].value%3==0&&curr[`child${i}`].value%5!==0){
            curr[`child${i}`].value='Fizz';
          }else if(curr[`child${i}`].value%3==0&&curr[`child${i}`].value%5==0){
            curr[`child${i}`].value='FizzBuzz';
          }else if(curr[`child${i}`].value%5==0&&curr[`child${i}`].value%3!==0){
            curr[`child${i}`].value='Buzz';
          }else{
            curr[`child${i}`].value=curr[`child${i}`].value.toString();
          }
          }
        }
        for(let i=1;i<=curr.NoOfChildren;i++){
          move(curr[`child${i}`])
        }
      }
    return root;
}
module.exports={
    Node,
    KaryTree,
    fizzBuzz
}