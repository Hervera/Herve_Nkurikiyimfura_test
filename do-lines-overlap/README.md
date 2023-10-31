# Line Overlap Checker

This JavaScript module provides a function `doLinesOverlap` that checks if two line segments on the x-axis overlap.

## Function Description

### `doLinesOverlap(line1, line2)`

- `line1` and `line2` are arrays representing line segments on the x-axis. Each array should contain two numbers: the left endpoint and the right endpoint of the line segment.

This function returns `true` if the two line segments overlap and `false` if they do not.

## Usage

You can use the `doLinesOverlap` function by including it in your JavaScript project and passing in two line segments as arguments.

Example:

```javascript
const { doLinesOverlap } = require('do-lines-overlap');

const line1 = [1, 5];
const line2 = [2, 6];

if (doLinesOverlap(line1, line2)) {
  console.log("The lines overlap.");
} else {
  console.log("The lines do not overlap.");
}
```

## Testing
To test the doLinesOverlap function, you can use the Yarn package manager. If you don't have Yarn installed, you can install it globally:

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
