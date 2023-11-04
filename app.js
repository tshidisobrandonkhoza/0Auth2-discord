const express = require('express');

const app = express();
//database

const mongoose = require('mongoose');
const db = 'mongodb://127.0.0.1:27017/sample_passport';

mongoose.connect(db).then(() => console.log('well connected')).catch(err => console.log(err))

//passport setupt

const passportSetup = require('./strategies/passport');

//import routecs
const Home = require('./routes/home');
const About = require('./routes/about');
const Auth = require('./routes/auth');

//set up view engine
app.set('view engine', 'ejs');



// register routes
app.use('/', Home);
app.use('/about', About);
app.use('/auth', Auth);

app.use((req, res) => {
    res.render('404');
})


app.listen(3000, () => {
    console.log('app now listening for requests on port 3000');
});