const { Router } = require("express");

const router = Router();

router.get('/', (req, res) => {
    res.render('home',  {
        title: 'Home',
        user: req.user
    });
})

module.exports = router;