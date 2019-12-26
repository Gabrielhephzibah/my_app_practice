var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('index',{title:'Do want to be become a global full-stack developer'});
});

module.exports = router;
