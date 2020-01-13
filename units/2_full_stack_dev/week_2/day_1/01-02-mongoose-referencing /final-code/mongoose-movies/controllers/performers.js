var Performer = require('../models/performer')
var Movie = require('../models/movie')

const addToCast = (req, res) => {
  Movie.findById(req.params.id, (err, movie) => {
    movie.cast.push(req.body.performerId)
    movie.save(err => {
      res.redirect(`/movies/${movie._id}`)
    })
  })
}

const create = (req, res) => {
  // Need to "fix" date formatting to prevent day off by 1
  // This is due to the <input type="date"> returning the date
  // string in this format:  "YYYY-MM-DD"
  var s = req.body.born
  req.body.born = `${s.substr(5, 2)}-${s.substr(8, 2)}-${s.substr(0, 4)}`
  Performer.create(req.body, (err, performer) => {
    res.redirect('/performers/new')
  })
}

const newPerformer = (req, res) => {
  Performer.find({}, (err, performers) => {
    res.render('performers/new', {
      title: 'Add Performer',
      performers,
    })
  })
}

module.exports = {
  new: newPerformer,
  create,
  addToCast,
}
