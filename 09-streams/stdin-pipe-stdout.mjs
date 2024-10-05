import { Transform } from 'stream';
import fs from 'fs';

const upperCaseStream = new Transform({
    transform: function (chunk, encoding, cb) {
        const upperCased = chunk.toString().toUpperCase(); // convert buffer to string
        //console.log(upperCased);
        cb(null, upperCased);
    }
});

process.stdin.pipe(upperCaseStream).pipe(process.stdout);

// Pipe to file
/*const filePath = './files/stdin-dump.txt';
const writeStream = fs.createWriteStream(filePath);
process.stdin.pipe(writeStream);
*/
// Pipe to stdout
// process.stdin.pipe(process.stdout);

// Вывод обекта process
// console.log(process);

