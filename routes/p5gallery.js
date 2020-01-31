var express = require('express');
var router = express.Router();

router.post('/page_navigation', (req, res, next) => {
    let page = req.body.page;

    if (page === 'index') return res.render('index', {});
    if (page === 'p5') return res.render('p5', {});
    if (page === 'p5gallery') return res.render('p5gallery', {});
});

router.get('/', (req, res, next) => {
    res.render('p5gallery', {});
});


module.exports = router;