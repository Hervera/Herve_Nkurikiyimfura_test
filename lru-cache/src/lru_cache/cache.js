const Node = require('./node');

class LRUCache {
  constructor(max_capacity = 10, expiry = 3600000) {
    this._max_capacity = max_capacity;
    this._expiry = expiry;
    this._cache = new Map(); // Use a Map instead of an object for better performance
    this._head = null;
    this._tail = null;
  }

  get(key) {
    if (this._cache.has(key)) {
      const node = this._cache.get(key);
      if (node.isExpired(this._expiry)) {
        this.deleteFromList(node);
        return null; // Expired item
      }
      this.deleteFromList(node);
      this.insertHead(node);
      return node.getValue();
    } else {
      return null;
    }
  }

  deleteFromList(node) {
    const prevNode = node.getPrev();
    const nextNode = node.getNext();

    if (prevNode === null) {
      this._head = nextNode;
    } else {
      this._cache.get(prevNode).setNext(nextNode);
    }

    if (nextNode === null) {
      this._tail = prevNode;
    } else {
      this._cache.get(nextNode).setPrev(prevNode);
    }

    this._cache.delete(node.getKey());
  }

  insertHead(node) {
    const currentHead = this._head;
    node.setPrev(null);
    node.setNext(currentHead);

    if (currentHead !== null) {
      this._cache.get(currentHead).setPrev(node.getKey());
    } else {
      this._tail = node.getKey();
    }

    this._head = node.getKey();
    this._cache.set(node.getKey(), node);
  }

  put(key, value) {
    if (this._cache.has(key)) {
      const node = this._cache.get(key);
      node.setValue(value); // Update the value of the existing key
      this.deleteFromList(node);
      this.insertHead(node); // Move the updated node to the head
    } else {
      if (this.getLength() >= this._max_capacity) {
        this.deleteFromList(this._cache.get(this.getTail()));
      }
      const node = new Node(key, value);
      this.insertHead(node);
      this._cache.set(key, node); // Add the key to the cache
    }
  }
  
  
  removeExpiredNodes() {
    const keysToDelete = [];
    for (const [key, node] of this._cache) {
      if (node.isExpired(this._expiry)) {
        keysToDelete.push(key);
      }
    }
    keysToDelete.forEach((key) => this.deleteFromList(this._cache.get(key)));
  }

  getLength() {
    return this._cache.size;
  }

  getHead() {
    return this._head;
  }

  getTail() {
    return this._tail;
  }

  toString() {
    let output = `CACHE: Head: ${this.getHead()}, Tail: ${this.getTail()}, Content: `;
    let keyIterator = this.getHead();
    while (keyIterator !== null) {
      const node = this._cache.get(keyIterator);
      output += `[key: ${node.getKey()}, value: ${node.getValue()}, prev: ${node.getPrev()}, next: ${node.getNext()}]-->`;
      keyIterator = node.getNext();
    }
    return output;
  }
}

module.exports = LRUCache;
