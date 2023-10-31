# Geo-Distributed LRU Cache with Time Expiration

This is a JavaScript implementation of a Geo-Distributed LRU (Least Recently Used) cache with time expiration. The library is designed to meet specific criteria for use in distributed systems.

## Features

- **Simplicity:** The integration is straightforward, and the code is designed to be easy to use.

- **Resilience:** The cache is designed to handle network failures and crashes gracefully.

- **Near Real-Time Replication:** Data is replicated across geolocations in near real-time to ensure consistency.

- **Data Consistency:** The cache maintains data consistency across regions.

- **Locality of Reference:** Data is accessed from the closest region to improve performance.

- **Flexible Schema:** The cache is designed to accommodate various data structures.

- **Cache Expiration:** The cache supports item expiration based on time.

## Installation

To use this LRU Cache library, you can install it via npm:

```bash
npm install lru-cache
```

## Usage

Here's an example of how to use the LRU Cache in your JavaScript project:

```javascript
const { LRUCache } = require('lru-cache');

// Create an LRU Cache with a maximum capacity of 10 and a 1-hour expiry time
const cache = new LRUCache(10, 3600000);

// Store and retrieve items
cache.put('key1', 'value1');
const value = cache.get('key1');
console.log(value); // Should output 'value1'

// Handle expired items
cache.removeExpiredNodes();
```

## Testing
This library includes tests to ensure its functionality. If you don't have Yarn installed, you can install it globally:

```bash
npm install -g yarn
```

Next, install the project dependencies using Yarn:

```bash
yarn install
```

Run the tests with the following command:

```bash
yarn test
```

This will execute the tests and provide the test results.

## License

This LRU Cache library is provided under the MIT License. Feel free to use and modify it as needed.

## Author

- Herve Nkurikiyimfura
