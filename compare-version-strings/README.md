# Version Comparison Library

This JavaScript library provides a utility function for comparing version strings. You can use it to determine whether one version is greater than, equal to, or less than another version.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Testing](#testing)

## Installation

To use this library in your project, you can install it via npm or Yarn:

```bash
npm install compare-version-strings
# or
yarn add compare-version-strings

```

## Usage

First, import the compareVersionStrings function from the library in your JavaScript code:

```javascript
const { compareVersionStrings } = require('compare-version-strings');

```

The `compareVersionStrings` function accepts two version strings as input and returns:

- `1` if the first version is greater than the second.
- `-1` if the first version is less than the second.
- `0` if both versions are equal.

### Example

```javascript
const { compareVersionStrings } = require('compare-version-strings');

const result = compareVersionStrings('1.2', '1.1');
console.log(result); // Output: 1 (1.2 is greater than 1.1)
```

## Testing
To test the compareVersionStrings function, you can use the Yarn package manager. If you don't have Yarn installed, you can install it globally:

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
