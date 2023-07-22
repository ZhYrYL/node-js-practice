const fs = require('fs');

//READ FILES - sa pag read ng files, it takes time kaya kung merong kang kinonsole.log sa files where you read files, uunahin niya yung i-execute
fs.readFile('./documents/3d.txt', (err, data) => {
    if(err){
        console.log(err);
    }
    console.log(data.toString());
});

console.log(`Hello World`);

//WRITE FILES




//CREATE/DELETE DIRECTORIES




//DELETE FILES