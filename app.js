const express = require('express');

const app = express();

app.listen(3000);


//Response_1: Sending HTML tags as response using Express
// app.get('/', (req, res) => {
//     res.send('Hello');
// });

// // Response_2: Sending HTML file as response using Express
// app.get('/', (req, res) => {
//     res.sendFile('./html/homepage.html', { root: __dirname });
// });



// app.get('/about', (req, res) => {
//     res.sendFile('./html/about.html', { root: __dirname });

// });


// app.get('/about-me', (req, res)=>{
//     res.redirect('/about');
// });

// app.use((req, res) => {
//     res.status(404).sendFile('./html/404.html', { root: __dirname });
// });


//Response_3: Sending ejs file as response
app.set('view engine', 'ejs'); //Registering EJS


app.get('/', (req, res) => {
    const achievements = [
        {title: 'Elementary School', des: 'With Honors'},
        {title: 'High School', des: 'With High Honors'},
        {title: 'College', des: 'With Highest Honors'}
    ];
    res.render('homepage', { title: 'Home', achievements} );
});

app.get('/about', (req, res) => {
    res.render('about', { title: 'About'});
});
app.get('/create-blog', (req, res)=>{
    res.render('create', { title: 'Create Blog'});
});

app.use((req, res)=>{
    res.status(404).render('404', { title: '404'});
});