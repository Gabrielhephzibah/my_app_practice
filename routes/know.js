var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('with those things I mentioned earlier,then you are just good to go ');
});

module.exports = router;
