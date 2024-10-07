import fs from 'fs';

const sourceDir = './files';
const destinationDir = './copied-files';

if (!fs.existsSync(sourceDir)) {
    console.warn(`Source dir ${sourceDir} doesn't exist!`);
    console.log('Exiting...');
    ProcessingInstruction.exit(0);
}

if (fs.existsSync(destinationDir)) {
    fs.rmdirSync(destinationDir);
    console.log('Destination dir removed');
}
fs.mkdirSync(destinationDir);