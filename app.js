const express = require('express'), cons = require('consolidate');
const app = express();

const passport = require('passport');
// const cookieSession = require('cookie-session');
const session = require('express-session');
const MongoStore = require('connect-mongo');

const keys = require('./strategies/keys');
//database

const mongoose = require('mongoose');
const db = 'mongodb://127.0.0.1:27017/sample_passport';

mongoose.connect(db).then(() => console.log('well connected')).catch(err => console.log(err))


//enable passport sessions
app.use(passport.initialize());
app.use(session({
    secret: keys.sessions.cookieKey,
    resave: false,
    saveUninitialized: false,
    store: MongoStore.create({
        mongoUrl: 'mongodb://127.0.0.1:27017/sample_passport'
    }),
}));

app.use(passport.session());


//passport setup

const passportSetup = require('./strategies/passport');


//set up view engine
// app.engine('ejs', cons.swig);
app.set('view engine', 'ejs');
app.use(express.static('public'));

// app.use(cookieSession({ 
//     maxAge: 24 * 60 * 60 * 1000,
//     keys: [keys.sessions.cookieKey],
// }));

//import routes
const Home = require('./routes/home');
const About = require('./routes/about');
const Auth = require('./routes/auth');
const Profile = require('./routes/profile');



// register routes
app.use('/', Home);
app.use('/about', About);
app.use('/auth', Auth);
app.use('/profile', Profile);

app.use((req, res) => {

    const user = req.user || null;

    res.render('404', {
        title: '404',
        user
    });
});

app.listen(3000, () => {
    console.log('app now listening for requests on port 3000');
});
