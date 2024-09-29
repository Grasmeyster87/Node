
const fs = require('fs');

fs.writeFile('./05-fs/first.txt', 'First file text', (err) => {
    if (err) console.log(err);
    else {
        console.log('File first.txt was written');

        fs.appendFile('./05-fs/first.txt', '\nOne more line', (err) => {
            if (err) console.log(err);
            else {
                console.log('Append text to the first.txt file');
                fs.rename('./05-fs/first.txt', './05-fs/renamed-first.txt', (err) => {
                    if (err) console.log(err);
                    else console.log('File was renamed');
                });
            }
        });

    }
});

