const Mocha = require('mocha');
const mocha = new Mocha();

// Array of test file paths
const testFiles = [
  'index.test.js',
  'src/test/lru_cache.test.js',
  'src/test/lru_node.test.js',
];

// Loop through the test file paths and add them to Mocha
testFiles.forEach(function (filePath) {
  mocha.addFile(filePath);
});

// Run the tests
mocha.run(function(failures) {
  process.exitCode = failures ? 1 : 0;
});
