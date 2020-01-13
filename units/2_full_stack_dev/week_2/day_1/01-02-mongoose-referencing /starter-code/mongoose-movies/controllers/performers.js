const Performer = require('../models/performer')

const index = (req, res) => {
  Performer.find({}, (err, performers) => {
    res.render('performers/index', { title: 'All Performers', performers })
  })
}

const newPerformer = (req, res) => {
  res.render('performers/new', { title: 'Add Performer' })
}

const create = (req, res) => {
  Performer.findById(req.params.id, (err, performer) => {
    performer.reviews.push(req.body)
    performer.save(err => {
      res.redirect(`/performers/${performer._id}`)
    })
  })
}

module.exports = {
  index,
  new: newPerformer,
  create,
}
