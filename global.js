// console.log(global);


// setTimeout(()=>{
//     console.log(`ITS BEEN 5 SECONDS`);
// }, 5000)

const int = setInterval(()=>{
    console.log(`Its gonna shut`);
}, 1000);

setTimeout(()=>{
    console.log('The interval will stop HERE!');
    clearInterval(int);
}, 5100);