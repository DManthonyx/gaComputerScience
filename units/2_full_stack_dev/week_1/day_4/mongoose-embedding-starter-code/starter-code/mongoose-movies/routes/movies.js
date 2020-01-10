const express = require('express');
const router = express.Router();
const moviesCtrl = require('../controllers/movies');

router.get('/', moviesCtrl.index);
router.post('/', moviesCtrl.create);

router.get('/new', moviesCtrl.new);
router.get('/:id', moviesCtrl.show);

module.exports = router;
