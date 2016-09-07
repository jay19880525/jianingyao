var router = require('express').Router();

// Refer: http://www.hacksparrow.com/mobile-web-development-in-express-js-node-js.html
function is_mobile(req) {
  var ua = req.header('user-agent');
  if (/mobile/i.test(ua)) return true;
  else return false;
};

router.get(/^\/(index(.html)?)?$/, function(req, res) {
  if (is_mobile(req)) {
    res.render('mobile/index-mobi', {layout: 'layout-mobi'});
  }
  else {
    res.sendFile('/public/Index.html');
  }
});

module.exports = router;
