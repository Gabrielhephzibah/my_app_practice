var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('did I mentioned descipline...yeah...You must be very descipline and patient ');
});

module.exports = router;
