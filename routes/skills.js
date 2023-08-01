var express = require('express');
var router = express.Router();
var skillsCtrl = require('../controllers/skills')
// all acutal paths start with '/skills'
router.get('/', skillsCtrl.index);
router.get('/:id', skillsCtrl.getOne)
module.exports = router;
