const http = require('http');
const fs = require('fs');
const _ = require('lodash');

const server = http.createServer((req, res)=>{
    // console.log(req.url, req.method);

    //lodash
    let num = _.random(1, 20);
    console.log(num);

    const greet = _.once(() => {
        console.log(`hello`);
    });

    greet();



    // //Response_Example_1: Sending Plain text as Response
    // res.setHeader('Content-type', 'text/plain');
    // res.write('Hello Zhyryll Posadas');
    // res.end();

    // //Response_Example_2: Send simple html tags as Response
    // res.setHeader('Content-type', 'text/html');
    // res.write('<style>h1{color: red;} h3{color: blue;}</style>');
    // res.write('<h1>Full Stack Web Developer</h1>');
    // res.write('<h3>Zhyryll Ryj C. Posadas</h3>');
    // res.end();

    // //Response_Example_3: Sending an HTML document as Response
    // res.setHeader('Content-type', 'text/html');
    // fs.readFile('./views/homepage.html', (err, data) => {
    //     if(err){
    //         console.log(err);
    //         res.end();
    //     }else{
    //         res.write(data);
    //         res.end();
    //     }
    // });

    //Response_Example_4: Sending an HTML document as Response but can now Route 
    res.setHeader('Content-type', 'text/html');

    let path = './html/';

    switch(req.url){
        case '/':
            path += 'homepage.html';
            res.statusCode = 200;
            break;
        case '/about':
            path += 'about.html';
            res.statusCode = 200;
            break;
        case '/about-me':
            res.statusCode = 301;
            res.setHeader('Location', '/about');
            res.end();
            break;
        default:
            path += '404.html';
            res.statusCode = 404;
            break;
    }

    fs.readFile(path, (err, data) => {
        if(err){
            console.log(err);
            res.end();
        }else{
            res.write(data);
            res.end();
        }
    });
    
});

server.listen(3000, 'localhost', () => {
    console.log('Listening for request on port 3000');
});

