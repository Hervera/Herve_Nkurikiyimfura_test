const LRUCache = require('./src/lru_cache/cache');
const Node = require('./src/lru_cache/node');

// Create an instance of LRUCache with a max capacity of 3 items and a 10-second expiration time
const cache = new LRUCache(3, 10000);

// Add some items to the cache
cache.put('key1', 'value1');
cache.put('key2', 'value2');
cache.put('key3', 'value3');

// Get an item from the cache
const result1 = cache.get('key1');
console.log('Result 1:', result1); // Should print 'value1'

// Wait for 11 seconds to let an item expire
setTimeout(() => {
  const result2 = cache.get('key2');
  console.log('Result 2:', result2); // Should print 'null' since 'key2' has expired
}, 11000);

// Add a new item to the cache
cache.put('key4', 'value4');

// Get the items in the cache
console.log('Cache Content:');
console.log(cache.toString());


module.exports = {
  LRUCache,
  Node,
};
