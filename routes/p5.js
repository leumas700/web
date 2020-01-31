var express = require('express');
var router = express.Router();

router.get('/', (req, res) => {
    res.render('p5', );
});

router.get('/', (req, res, next) => {
    res.render('p5', {test: 'abc'});
});



module.exports = router;