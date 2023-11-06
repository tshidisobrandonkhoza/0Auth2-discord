const { Router } = require("express");

const router = Router();

router.get('', (req, res) => {
    res.render('about', {
        title: 'About',
        user: req.user
    });
})

module.exports = router;