
const { Router } = require("express");
const passport = require('passport');
const router = Router();

router.get('/login', (req, res) => {
    res.render('login');
})


//make the request and 2nd para retrieve the details
router.get('/google', passport.authenticate('google', {
    scope: ['profile']
}));
//redirect with the code from google
router.get('/google/redirect', passport.authenticate('google'),(req, res) => {
    res.send('you have been redirected');
});

router.get('/logout', (req, res) => {
    res.send('loggin out')
});


module.exports = router;