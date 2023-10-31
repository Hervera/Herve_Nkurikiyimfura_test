const { expect } = require('chai');
const { LRUCache } = require('./index');

describe('LRUCache with index.js', () => {
  let cache;

  beforeEach(() => {
    cache = new LRUCache(3, 10000); // Capacity of 3 and a 10-second expiration
  });

  it('should store and retrieve items', () => {
    cache.put('key1', 'value1');
    cache.put('key2', 'value2');
    cache.put('key3', 'value3');

    const result1 = cache.get('key1');
    expect(result1).to.equal('value1');
  });

  it('should remove expired items', function (done) {
    this.timeout(20000); // Increase the timeout to 10 seconds
    cache.put('key1', 'value1');
    cache.put('key2', 'value2');

    setTimeout(() => {
      const result2 = cache.get('key2');
      expect(result2).to.be.null;
      done();
    }, 15000);
  });

  it('should add and retrieve items', () => {
    cache.put('key1', 'value1');
    cache.put('key2', 'value2');

    const result = cache.get('key1');
    expect(result).to.equal('value1');
  });

  it('should handle cache capacity', () => {
    cache.put('key1', 'value1');
    cache.put('key2', 'value2');
    cache.put('key3', 'value3');
    cache.put('key4', 'value4'); // This should trigger the eviction of 'key1'

    // key1 should be evicted, so it should return null
    const result1 = cache.get('key1');
    // key2, key3, and key4 should still be retrievable
    const result2 = cache.get('key2');
    const result3 = cache.get('key3');
    const result4 = cache.get('key4');

    expect(result1).to.be.null;
    expect(result2).to.equal('value2');
    expect(result3).to.equal('value3');
    expect(result4).to.equal('value4');
  });
});
