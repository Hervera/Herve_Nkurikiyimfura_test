const chai = require('chai');
const { expect } = chai;
const LRUCache = require('../lru_cache/cache');

chai.should();

describe('LRU Cache', () => {
  let cache;

  beforeEach(() => {
    cache = new LRUCache(3, 2000); // Capacity of 3 and a 2-second expiry
  });

  it('should store and retrieve items', () => {
    cache.put('a', 1);
    cache.put('b', 2);
    cache.put('c', 3);

    expect(cache.get('a')).to.equal(1);
    expect(cache.get('b')).to.equal(2);
    expect(cache.get('c')).to.equal(3);
  });

  it('should delete the least recently used item when the cache is full', () => {
    cache.put('a', 1);
    cache.put('b', 2);
    cache.put('c', 3);
    cache.put('d', 4); // This should remove 'a'

    expect(cache.get('a')).to.be.null;
    expect(cache.get('b')).to.equal(2);
    expect(cache.get('c')).to.equal(3);
  });

  it('should remove expired items', function (done) {
    cache.put('a', 1);
    cache.put('b', 2);
  
    setTimeout(() => {
      cache.removeExpiredNodes();
      expect(cache.get('a')).to.be.null;
      expect(cache.get('b')).to.be.null;
      done();
    }, 3000);
  }).timeout(5000);
  

  it('should not remove non-expired items', (done) => {
    cache.put('a', 1);
    cache.put('b', 2);
  
    setTimeout(() => {
      cache.removeExpiredNodes();
      expect(cache.get('a')).to.equal(1);
      expect(cache.get('b')).to.equal(2);
      done();
    }, 1000); // Wait for 1 second within the 2-second expiry
  });

  it('should update the cache when an existing key is put', () => {
    cache.put('a', 1);
    cache.put('b', 2);
    cache.put('a', 3); // Update the value of 'a'

    expect(cache.get('a')).to.equal(3);
  });
});
