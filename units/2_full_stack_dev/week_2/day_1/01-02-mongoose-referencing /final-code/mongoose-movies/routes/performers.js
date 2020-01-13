var express = require('express')
var router = express.Router()
var performersCtrl = require('../controllers/performers')

router.post('/', performersCtrl.create)
router.get('/new', performersCtrl.new)
router.post('/:id', performersCtrl.addToCast)

module.exports = router
