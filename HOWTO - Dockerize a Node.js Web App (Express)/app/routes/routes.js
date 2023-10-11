var express = require('express');
var router = express.Router();

// Home page route.
router.get("/", function (req, res) {
  res.render('index');
});

router.get("/user/:user", function (req, res) {
  res.render('user', { user: req.params.user });
});

module.exports = router;