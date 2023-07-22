const fs = require('fs');
//STREAM - ginagamit naman yung stream para kahit na hindi pa tapos iread yung isang file, pwede ng gamitin yung ibang chunk of data na na-read
const readStream = fs.createReadStream('./documents/bigfile.txt', { encoding: 'utf8' });
const writeStream = fs.createWriteStream('./documents/newbigfile.txt');

//Nadi-display sa logline yung every new chunk of data kahit di pa siya tapos hanggang sa matapos
// readStream.on('data', (chunk) => {
//     console.log('\n-------NEW CHUNK------\n');
//     console.log(chunk);
//     writeStream.write('\n-------NEW CHUNK------\n');
//     writeStream.write(chunk);
// });


//PIPE - simpler version siya ng pagpasa ng file after mag create ng new file. Parang example lang sa taas pero shortcut method. Ang pinagkaiba lang is hindi na siya madi-display sa logline, sa new file agad
readStream.pipe(writeStream);

