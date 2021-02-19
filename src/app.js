const express = require('express');
const path = require('path');
const hbs = require('hbs');
const { static } = require('express');

const port = 8000;

const app = express();

const staticPath = path.join(__dirname, '../public');
const views = path.join(__dirname, '../template/views');
const partials = path.join(__dirname, '../template/partials');

app.set('view engine', 'hbs');
app.set('views', views);
hbs.registerPartials(partials);

app.use(express.static(staticPath));

app.get('/', (req, res) => {
    res.render('index');
});

app.get('/about', (req, res) => {
    res.render('about');
    // res.end('About page is in progress');
});

app.get('/weather', (req, res) => {
    res.render('weather');
});

app.get('/quotes', (req, res) => {
    // res.render('about');
    res.end('Quotes page is in progress');
});

app.get('*', (req, res) => {
    res.render('404');
});

app.listen(port, (err) => {
    if(err) console.log(err);
    console.log(`server is running at port number ${port}`);
})