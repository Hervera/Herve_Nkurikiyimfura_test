// test/node.test.js
const chai = require('chai');
const { expect } = chai;
const Node = require('../lru_cache/node');

chai.should();

describe('Node', () => {
  it('should create a new node', () => {
    const node = new Node('key', 'value');
    expect(node.getKey()).to.equal('key');
    expect(node.getValue()).to.equal('value');
    expect(node.getPrev()).to.be.null;
    expect(node.getNext()).to.be.null;
  });

  it('should set and get prev and next nodes', () => {
    const node1 = new Node('key1', 'value1');
    const node2 = new Node('key2', 'value2');
    node1.setNext(node2);
    node2.setPrev(node1);

    expect(node1.getNext()).to.equal(node2);
    expect(node2.getPrev()).to.equal(node1);
  });

  it('should check if a node is expired', function (done) {
    this.timeout(5000); // Set the test timeout to 5 seconds
  
    const node = new Node('key', 'value');
    // Adjust the elapsed time to exceed the expiration time
    node._creation_time = Date.now() - 3600001; // Exceed the 1-hour expiration time
  
    const isExpired = node.isExpired(3600000); // Check if the node is expired within a 1-hour expiry time
    expect(isExpired).to.equal(true);
  
    done();
  });

  it('should not be expired if within the expiry time', (done) => {
    const node = new Node('key', 'value');
    setTimeout(() => {
      expect(node.isExpired(2000)).to.be.false;
      done();
    }, 1000); // Wait for 1 second within the 2-second expiry
  });
});
