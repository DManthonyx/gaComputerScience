var express = require('express')
var router = express.Router()
var moviesCtrl = require('../controllers/movies')

router.get('/', moviesCtrl.index)
router.post('/', moviesCtrl.create)
router.get('/new', moviesCtrl.new)
router.get('/:id', moviesCtrl.show)

module.exports = router
