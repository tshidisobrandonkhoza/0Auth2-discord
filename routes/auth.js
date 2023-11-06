
const { Router } = require("express");
const passport = require('passport');
const router = Router();

router.get('/login', (req, res) => {

    const user = req.user || null;
    res.render('login', {
        title: 'Login',
        user
    });
})


//make the request and 2nd para retrieve the details
router.get('/google', passport.authenticate('google', {
    scope: ['profile']
}));
//redirect with the code from google
router.get('/google/redirect', passport.authenticate('google'), (req, res) => {
    res.redirect('/profile');
    // res.send(req.user);
});

// const logout = () => {
//     // destry session
// }
router.get('/logout', (req, res, next) => {
    // res.send(req.user)
    req.logout((err) => {
        if (err) { return next(err) };
        res.redirect('/');
    });

});


module.exports = router;