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
// fs.writeFile('./documents/3d.txt', 'Hello Ella', function () {
//     console.log('Rewritten Already');
// });

// //Example_2: Mag create ng new file, and gumawa ng content
// fs.writeFile('./documents/new.txt', 'Hello World', () => {
//     console.log('Rewritten Already');
// });





//CREATE/DELETE DIRECTORIES
// // Example_1: Add directory
// fs.mkdir('./assets', (err) => {
//     if(err){
//         console.log(err);
//     }
//     console.log('Folder Created');
// });
// //Example_2: Remove directory
// fs.rmdir('./assets', (err) => {
//     if(err){
//         console.log(err);
//     }
//     console.log('Folder Deleted');
// });
// //Example_3: Create directory if it dont exist but delete directory if it exist using if-else conditional statement
// if(!fs.existsSync('./assets')){
//     fs.mkdir('./assets', (err) => {
//        if(err){
//         console.log(err);
//        }
//        console.log('Folder Created');
//     });
// }else{
//     fs.rmdir('./assets', (err) => {
//         if(err){
//             console.log(err);
//         }
//         console.log('Folder Deleted');
//     });
// }


//DELETE FILES
//Example_1: Delete file directly
fs.unlink('./documents/deleteme.txt', (err) => {
    if(err){
        console.log(err)
    }
    console.log('File Deleted');
});
//Example_2: Checking if the file existed then deleting it using if-else statement
if(fs.existsSync('./documents/deleteme.txt')){
    fs.unlink('./documents/deleteme.txt', (err) => {
        if(err){
            console.log(err)
        }
        console.log(`File Deleted`)
    });
}else{
    fs.writeFile('./documents/deleteme.txt', 'Delete me Please!', () => {
        console.log('File Created');
    });
}