var express = require('express');
var admin = require('../controllers/admin.js');
var router = express.Router();

/* GET home page. */
router.get('/', admin.admin);

module.exports = router;
