var express = require('express');
var router = express.Router();
var signupshopmodel = require("../models/signupshop")
var expressValidator = require('express-validator');
var flash = require('connect-flash');


/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('signup', { title: 'Signup' });
});


router.post('/', function(req, res, next) {
  var user_name = req.body.user_name;
  var user_email = req.body.user_email;
  var user_id = req.body.user_id;
  var userpassword = req.body.user_password;




    var newsignupshop = new signupshopmodel({username: user_name,
                                            useremail : user_email,
                                            userid : user_id,
                                            password : userpassword

    });
    newsignupshop.save(function (err) {
      if (err) {
        console.log(err);
      } else {
        res.send("Please check you email for confirmation ");
      }
    });

});



module.exports = router;
