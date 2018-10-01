var router = require('express').Router();
var controller = require('./controller.js');


router
.route('/display')
.get(controller.getData)
.post(controller.addData);

module.exports = router;