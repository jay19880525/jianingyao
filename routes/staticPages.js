var router = require('express').Router();

var options = {
  root: __dirname + '/../public/'
};

router.get(/^\/(index(.html)?)?$/, function(req, res) {
  res.sendFile('Index.html', options);
});

module.exports = router;
