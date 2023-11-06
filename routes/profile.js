const { Router } = require("express");
const { model } = require("mongoose");
const router = Router();

const authCheck = (req, res, next) => {
    if (req.user) {
        next();
        console.log(req.user);
    } else {
        res.redirect('/auth/login');
    }
}
router.get('/', authCheck, (req, res) => {

    const user = req.user || null;

    res.render('profile', {
        title: 'Profile',
        user
    });
});

module.exports = router;