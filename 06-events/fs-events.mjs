import EventEmitter  from 'events';
import fs from 'fs';

const fileEmitter = new EventEmitter();

const filePath = './06-events/first.txt';

fileEmitter.on('writeComplete', () => {
    console.log(`File ${filePath} was written`);
    fs.appendFile(filePath, '\nOne more line', () => {
        fileEmitter.emit('appendComplete');
    });
});

fileEmitter.on('appendComplete', () => {
    console.log(`Append text to the ${filePath} file`);
    fs.rename(filePath, './06-events/renamed-first.txt', () => {
        fileEmitter.emit('renameComlet');
    });
    console.log('File was renamed');
});

fileEmitter.on('renameComplete', () => {
    console.log('File first.txt was written');
});

fs.writeFile(filePath, 'first file text', () => {
    fileEmitter.emit('writeComplete');
});






