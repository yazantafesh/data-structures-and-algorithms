'use strict';

const graph = require('../index');

describe('Graphs', () => {

  it('add vertex', () => {
    let test = new graph.Graph();
    const one = new graph.Vertex('one');
    test.addVertex(one);

    expect(test.adjacencyList).toBeTruthy();
    expect(test.adjacencyList.get(one)).toEqual([]);
  });

  it('add edge', () => {
    let test = new graph.Graph();
    const one = new graph.Vertex('one');
    const two = new graph.Vertex('two');
    test.addVertex(one);
    test.addVertex(two);
    test.addEdge(one, two);
    const testValue = test.adjacencyList.get(one);
    const expectedValue = [{ 'vertex': { 'value': 'two' }, 'weight': 0 }];

    expect(testValue).toEqual(expectedValue);
  });

  it('retreive all vertices from graph', () => {
    let test = new graph.Graph();
    const one = new graph.Vertex('one');
    const two = new graph.Vertex('two');
    test.addVertex(one);
    test.addVertex(two);
    test.addEdge(one, two);
    test.addEdge(two, one);
    const testValue = test.adjacencyList.get(one);
    const testValueTwo = test.adjacencyList.get(two);
    const expectedValue = [{ 'vertex': { 'value': 'two' }, 'weight': 0 }];
    const expectedValueTwo = [{ 'vertex': { 'value': 'one' }, 'weight': 0 }];

    expect(testValue).toEqual(expectedValue);
    expect(testValueTwo).toEqual(expectedValueTwo);
  });

  it('retrteive neighbors', () => {
    let test = new graph.Graph();
    const one = new graph.Vertex('one');
    const two = new graph.Vertex('two');
    const three = new graph.Vertex('three');
    test.addVertex(one);
    test.addVertex(two);
    test.addVertex(three);
    test.addEdge(one, two);
    test.addEdge(one, three);

    const testValue = test.getNeighbors(one);
    const expectedValue = [{ 'vertex': { 'value': 'two' }, 'weight': 0 }, { 'vertex': { 'value': 'three' }, 'weight': 0 }];

    expect(testValue).toEqual(expectedValue);
  });

  it('return neighbors with weight', () => {
    let test = new graph.Graph();
    const one = new graph.Vertex('one');
    const two = new graph.Vertex('two');
    const three = new graph.Vertex('three');
    test.addVertex(one);
    test.addVertex(two);
    test.addVertex(three);
    test.addEdge(one, two);
    test.addEdge(one, three);
    const testValue = test.getNeighbors(one);
    const testWeight = testValue[0]['weight'];
    const testWeightTwo = testValue[1]['weight'];

    expect(testWeight).toEqual(0);
    expect(testWeightTwo).toEqual(0);
  });

  it('return size', () => {
    let test = new graph.Graph();
    const one = new graph.Vertex('one');
    const two = new graph.Vertex('two');
    test.addVertex(one);
    test.addVertex(two);
    test.addEdge(one, two);

    expect(test.size(one)).toEqual(2);
  });

  it('A graph with only one node and edge can be properly returned', () => {
    let test = new graph.Graph();
    const one = new graph.Vertex('one');
    test.addVertex(one);
    test.addEdge(one);
    const testValue = test.adjacencyList.get(one);
    const expectedValue = [{ 'vertex': undefined, 'weight': 0 }];


    expect(testValue).toEqual(expectedValue);
  });

  it('empty graph returns null', () => {
    let test = new graph.Graph();
    let testValue = test.adjacencyList.values();

    expect(testValue).not.toBeUndefined();
  });
});