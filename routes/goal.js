var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('Be ready to meet a lot of amazing and intelligent people in the Academy ');
});

module.exports = router;
