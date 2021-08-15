const HashTable = require('../index').Hashtable;
const repeatedWord = require('../index').repeatedWord;

describe('Test repeatedWord Function',()=>{


  test('edge case',()=>{
      let test = '';
      expect(repeatedWord(test)).toBe('Empty String');
  })
  test('happy path',()=>{
      let test = "It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness, it was the epoch of belief, it was the epoch of incredulity, it was the season of Light, it was the season of Darkness, it was the spring of hope, it was the winter of despair, we had everything before us, we had nothing before us, we were all going direct to Heaven, we were all going direct the other way – in short, the period was so far like the present period, that some of its noisiest authorities insisted on its being received, for good or for evil, in the superlative degree of comparison only...";
      expect(repeatedWord(test)).toBe('it');
  })
  test('meant to fail',()=>{
      let test = 'some string with no repeated words';
      expect(repeatedWord(test)).toBe('No repeated words found');
  })
})