var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('All that is required of you are 1. a laptop 2.your time 3.committment and 4.willingness to learn');
});

module.exports = router