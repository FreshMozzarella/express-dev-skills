var express = require('express');
var router = express.Router();
var skillsCtrl = require('../controllers/skills')
// all acutal paths start with '/skills'
router.get('/', skillsCtrl.index);
router.get('/new', skillsCtrl.new)
router.get('/:id', skillsCtrl.show) //might have to switch to show()
router.post('/', skillsCtrl.create);
router.delete('/:id', skillsCtrl.delete) //go to controller
module.exports = router;
// GET /skills/new