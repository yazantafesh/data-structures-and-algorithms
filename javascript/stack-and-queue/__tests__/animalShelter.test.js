const AnimalShelter = require('../index').AnimalShelter;

describe('animal Queue', () => {
  let animal;
  beforeEach(() => {
    animal = new AnimalShelter();
  });

  describe('Can successfully enqueue into a animal shelter', () => {
    it('enqueue into a animal shelter + enqueue multiple values into a queue', () => {
      animal.enqueue('cat');
      animal.enqueue('dog');
      animal.enqueue('dog');
      expect(animal.front.value).toEqual('cat');
    });

    it('get error when trying to enqueue something other than cat or dog', () => {
      expect(animal.enqueue(1)).toEqual('can only accept cat or dog');
    });
  });

  describe('Can successfully dequeue out of a animal shelter and return the expected value', () => {
    it('add animals to the animal shelter and then dequeue until empty', () => {
      animal.enqueue('cat');
      animal.enqueue('dog');
      animal.enqueue('dog');
      expect(animal.dequeue()).toEqual('cat');
      expect(animal.dequeue()).toEqual('dog');
      expect(animal.dequeue()).toEqual('dog');
      expect(animal.dequeue()).toEqual("Animal Shelter is Empty");
    });
  });
});