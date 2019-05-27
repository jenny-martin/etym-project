var express = require('express');
var router = express.Router();
var passport = require('passport');
var User = require('../models/user');

/* GET home page. */
router.get('/', function(req, res) {
  res.render('./index');
});

//Google OAuth login route
router.get('/auth/google', passport.authenticate('google',
  { scope: ['profile', 'email'] }
));

//Google OAuth callback route
router.get('/oauth2callback', passport.authenticate(
  'google',
  {
    successRedirect: '/index',
    failureRedirect: '/index'
  }
));

//OAuth logout route
router.get('/logout', function(req, res) {
  req.logout();
  res.redirect('/index');
});

module.exports = router;
