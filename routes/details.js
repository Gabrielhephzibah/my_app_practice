var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('You will be so amazed at the things u will achieve within a short time');
});

module.exports = router;

