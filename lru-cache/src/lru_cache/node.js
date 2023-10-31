class Node {
  constructor(key = null, value = null, prev = null, next = null) {
    this._key = key;
    this._value = value;
    this._prev = prev;
    this._next = next;
    this._creation_time = Date.now();
  }

  getKey() {
    return this._key;
  }

  setKey(key = null) {
    this._key = key;
  }

  getValue() {
    return this._value;
  }

  setValue(value = null) {
    this._value = value;
  }

  getPrev() {
    return this._prev;
  }

  setPrev(prev = null) {
    this._prev = prev;
  }

  getNext() {
    return this._next;
  }

  setNext(next = null) {
    this._next = next;
  }

  isExpired(expiry) {
    const elapsedTime = Date.now() - this._creation_time;
    return elapsedTime > expiry;
  }

  toString() {
    return `Node: ${this._creation_time}, key: ${this._key}, value: ${this._value}, prev: ${this._prev}, next: ${this._next}\n`;
  }
}

module.exports = Node;
