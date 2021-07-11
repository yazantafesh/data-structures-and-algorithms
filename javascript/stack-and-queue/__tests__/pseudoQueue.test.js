const PseudoQueue = require('../index').PseudoQueue;

describe('Pseudo Queue', () => {
  let pseudo;
  beforeEach(() => {
    pseudo = new PseudoQueue();
  });

  describe('Can successfully enqueue into a pseudo queue', () => {
    it('enqueue into a pseudo queue + enqueue multiple values into a queue', () => {
      pseudo.enqueue(1);
      pseudo.enqueue(2);
      pseudo.enqueue(3);
      expect(pseudo.s1.top.value).toEqual(1);
    });
  });

  describe('Can successfully dequeue out of a pseudo queue and return the expected value', () => {
    it('add items to the top of the pseudo queue and then dequeue until empty', () => {
      pseudo.enqueue(1);
      pseudo.enqueue(2);
      pseudo.enqueue(3);
      expect(pseudo.dequeue()).toEqual(1);
      expect(pseudo.dequeue()).toEqual(2);
      expect(pseudo.dequeue()).toEqual(3);
      expect(pseudo.dequeue()).toEqual("Pseudo Queue is Empty");
    });
  });
});