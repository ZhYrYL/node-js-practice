const express = require('express');

const app = express();

app.listen(3000);

//Response_1: Sending HTML tags as response using Express
// app.get('/', (req, res) => {
//     res.send('Hello');
// });

// Response_2: Sending HTML file as response using Express
app.get('/', (req, res) => {
    res.sendFile('./views/homepage.html', { root: __dirname });
});



app.get('/about', (req, res) => {
    res.sendFile('./views/about.html', { root: __dirname });

});


app.get('/about-me', (req, res)=>{
    res.redirect('/about');
});

app.use((req, res) => {
    res.status(404).sendFile('./views/404.html', { root: __dirname });
});
