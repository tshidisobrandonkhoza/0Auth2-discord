const express = require('express');

const app = express();

//set up view engine
app.set('view engine', 'ejs');


//create home routes
app.get('/', (req, res) => {
    res.render('home');
})

app.get('/about', (req, res) => {
    res.render('about');
})


app.use((req, res) => {
    res.render('404');
})


app.listen(3000, () => {
    console.log('app now listening for requests on port 3000');
});