const fs = require('fs');

//READ FILES - 2 argument. Path and Callback Function with 2 parameters, err and data
//sa pag read ng files, it takes time kaya kung merong kang kinonsole.log sa files where you read files, uunahin niya yung i-execute
// fs.readFile('./documents/3d.txt', (err, data) => {
//     if(err){
//         console.log(err);
//     }
//     console.log(data.toString());
// });

// console.log(`Hello World`);




//WRITE FILES - 3 argument yung kailangang ilagay. Path, NewContent, Callback Function. Dapat string yung 2nd argument palagi
//Example_1: After ma-access yung files, pinalitan yung content
fs.writeFile('./documents/3d.txt', 'Hello Ella', function () {
    console.log('Rewritten Already');
});

//Example_2: Mag create ng new file, and gumawa ng content
fs.writeFile('./documents/new.txt', 'Hello World', () => {
    console.log('Rewritten Already');
});





//CREATE/DELETE DIRECTORIES




//DELETE FILES