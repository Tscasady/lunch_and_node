var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.json({ body: { text: 'respond with a resource', other: 'other_text'}});
});

module.exports = router;
