const LinkedList = require('../../linked-list/index').LinkedList;
const Stack = require('../index').Stack;

describe('Stack', () => {
  let stack;
  beforeEach(() => {
    stack = new Stack(new LinkedList);
  });

  describe('Can successfully push onto a stack', () => {
    it('add items to the top of the stack', () => {
      stack.push(1);
      stack.push(2);
      stack.push(3);
      expect(stack.peek()).toEqual(3);
    });
  });

  describe('Can successfully pop off the stack', () => {
    it('add items to the top of the stack and then pop until empty', () => {
      stack.push(1);
      stack.push(2);
      stack.push(3);
      expect(stack.pop()).toEqual(3);
      expect(stack.pop()).toEqual(2);
      expect(stack.pop()).toEqual(1);
      expect(stack.peek()).toBe('Empty Stack');
    });
  });

  describe('Can successfully peek the next item on the stack', () => {
    it('return Error on empty Stack', () => {
      expect(stack.peek()).toBe('Empty Stack');
    });
    it('return last item added on the Stack', () => {
      stack.push(1);
      expect(stack.peek()).toEqual(1);
      stack.push(2);
      expect(stack.peek()).toEqual(2);
    });
    it('point to the correct item after pop() on the stack', () => {
      stack.push(1);
      stack.push(2);
      expect(stack.pop()).toEqual(2);
      expect(stack.peek()).toEqual(1);
    });
  });

  it('Can successfully instantiate an empty stack', () => {
    expect(stack instanceof Stack).toBeTruthy();
  });

  it('Calling pop or peek on empty stack raises exception', () => {
    expect(stack.peek()).toBe('Empty Stack');
    expect(stack.pop()).toBe('Empty Stack');
  });
  
});

