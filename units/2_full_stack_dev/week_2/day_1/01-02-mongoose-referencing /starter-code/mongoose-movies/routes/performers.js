const express = require('express')
const router = express.Router()
const performersCtrl = require('../controllers/performers')

router.get('/', performersCtrl.index)
router.get('/new', performersCtrl.new)
// router.get('/:id', performersCtrl.show);
// router.post('/', performersCtrl.create);

module.exports = router
