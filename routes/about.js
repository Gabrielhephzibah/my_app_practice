var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('Then you are in  the right place.........here you will taught all what you need to become full-stack developer.........we have experienced and competent teachers and veteran developers you can learn from');
});

module.exports = router;
