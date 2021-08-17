const Hashmap =require('../left-join.js').Hashmap;
const repeatedWord =require('../left-join.js').repeatedWord;
const hash = require('../left-join.js');
const leftJoin = require('../left-join.js').leftJoin;  

let mapOne = new hash.Hashmap(50);
let mapTwo = new hash.Hashmap(50);
let mapThree = new hash.Hashmap(50);

mapOne.add('fond', 'enamored');
mapOne.add('wrath', 'anger');
mapOne.add('diligent', 'employed');
mapOne.add('outfit', 'garb');
mapOne.add('guide', 'usher');

mapTwo.add('fond', 'averse');
mapTwo.add('wrath', 'delight');
mapTwo.add('diligent', 'idle');
mapTwo.add('guide', 'follow');
mapTwo.add('flow', 'jam');

mapThree.add('amro', 'averse');
mapThree.add('daeed', 'delight');
mapThree.add('barah', 'idle');
mapThree.add('batool', 'follow');
mapThree.add('yazan', 'jam');

describe('Testing left join of two hashTables', () => {

  it('Successfully left join two hashTables', () => {

    expect(leftJoin(mapOne, mapTwo)).toEqual([
      ['wrath', 'anger', 'delight'],
      ['diligent', 'employed', 'idle'],
      ['guide', 'usher', 'follow'],
      ['fond', 'enamored', 'averse'],
      ['outfit', 'garb', null],
    ]);
  });

  it('Same table joined twice', () => {

    expect(leftJoin(mapOne, mapOne)).toEqual([
      ['wrath', 'anger', 'anger'],
      ['diligent', 'employed', 'employed'],
      ['guide', 'usher', 'usher'],
      ['fond', 'enamored', 'enamored'],
      ['outfit', 'garb', 'garb'],
    ]);
  });

  it('Should successfully return data structure with null as third element in every array for two tables with no matching keys', () => {
      
    expect(leftJoin(mapOne, mapThree)).toEqual([
      ['wrath', 'anger', null],
      ['diligent', 'employed', null],
      ['guide', 'usher', null],
      ['fond', 'enamored', null],
      ['outfit', 'garb', null],
    ]);
  });
});
  
  
  
  