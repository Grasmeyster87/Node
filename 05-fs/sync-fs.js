const fs = require('fs');

// Avoid using sync versions! They block event loop!
try {
    fs.writeFileSync('./05-fs/third.txt', 'third file text');
    console.log('File third.txt was written');
    fs.appendFileSync('./05-fs/third.txt', '\nOne more line');
    console.log('Append text to the third.txt file');
    fs.renameSync('./05-fs/third.txt', './05-fs/renamed-third.txt');
    console.log('File was renamed');
} catch (error) {
    console.log(err);
}


