const fs = require('fs/promises');

fs.writeFile('./05-fs/second.txt', 'Second file text')
    .then(() => console.log('File first.txt was written'))
    .then(() => fs.appendFile('./05-fs/second.txt', '\nOne more line'))
    .then(() => console.log('Append text to the first.txt file'))
    .then(() => fs.rename('./05-fs/second.txt', './05-fs/second.txt'))
    .then(() => console.log('File was renamed'))
    .then((err) => console.log(err));

