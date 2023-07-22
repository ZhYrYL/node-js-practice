const fs = require('fs');

const readStream = fs.createReadStream('./documents/bigfile.txt', { encoding: 'utf8' });
const writeStream = fs.createWriteStream('./documents/newbigfile.txt');

readStream.on('data', (chunk) => {
    console.log('\n-------NEW CHUNK------\n');
    console.log(chunk);
    writeStream.write('\n-------NEW CHUNK------\n');
    writeStream.write(chunk);
});