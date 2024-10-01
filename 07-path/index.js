const path = require('path');

const filePath = '/d/xampp/htdocs/Node/07-path/index.js';
const textFilePath = '/d/xampp/htdocs/Node/07-path/file.txt';
const relativePath = './07-path/movie.mov';
const directoryPath = './07-path/subfolder';

console.log(path.isAbsolute(filePath));     // true
console.log(path.isAbsolute(textFilePath)); //true
console.log(path.isAbsolute(relativePath)); // false

console.log(path.basename(filePath)); // index.js
console.log(path.basename(directoryPath)); // subfolder

console.log(path.dirname(filePath)); //  /d/xampp/htdocs/Node/07-path
console.log(path.dirname(directoryPath)); // ./07-path

console.log(path.resolve(relativePath));