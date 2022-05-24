// How NodeJS differes from Vanilla JS:
// 1. Node runs on the server and not in the browser (back ebd not front end)
// 2. We can run any JS files through the terminal with node using syntax: node filename. Ex: node server
console.log('Hi!');
// 3. There is a global object instead of a window object in nodeJS
// console.log(global);
// 4. Node has common core modules
// 5. Node uses CommonJS modules (Ex:require()) instead of ES6 modules (Ex:import... from '...')

const os = require('node:os'); // The node:os module provides operating system-related utility methods and properties.
const path = require('node:path'); // The node:path module provides utilities for working with file and directory paths.
// using a custom module
// const math = require('./math');
const { add, subtract, multiply, divide } = require('./math');

console.log(os.type());
console.log(os.version());
console.log(os.homedir());
console.log(__dirname);
console.log(__filename);

console.log(path.dirname(__filename));
console.log(path.basename(__filename));
console.log(path.extname(__filename));
console.log(path.parse(__filename));

// console.log(math.add(2, 3));
// console.log(math.subtract(2, 3));
// console.log(math.multiply(2, 3));
// console.log(math.divide(2, 3));
console.log(add(2, 3));
console.log(subtract(2, 3));
console.log(multiply(2, 3));
console.log(divide(2, 3));

//6. NodeJS is missing some JS APIs like fetch but we can install different npm packages as alternatives.
