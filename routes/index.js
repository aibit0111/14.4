var express = require('express');
var router = express.Router();
var signupshop = require("../models/signupshop")

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('home', { title: 'Express' });
});

router.get('/login', function(req, res, next) {
  res.render('login', { title: 'Express' });
});




module.exports = router;
