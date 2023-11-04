const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20');
const keys = require('./keys');
const Users = require('../model/user-model');
const User = require('../model/user-model');


//register the strategy and its config
passport.use(new GoogleStrategy({
    clientID: keys.google.clientID,
    clientSecret: keys.google.clientSecret,
    callbackURL: '/auth/google/redirect',
}, async (accessToken, refreshToken, profile, done) => {
    //passport callback function

    await User.findOne({ googleId: profile.id })
        .then(async (results) => {
            if (results === null) {
                return User.create({
                    username: profile.displayName,
                    googleId: profile.id
                }).then((result) => console.log(`created well : ${result.username} All details ${result}`))
                    .catch(err => console.log(err))
            }
            else {
                console.log('User Already Exists')
            }

        }).catch(err => console.log(err))

}));
