var Movie = require('../models/movie')
var Performer = require('../models/performer')

const index = (req, res) => {
  Movie.find({}, (err, movies) => {
    res.render('movies/index', { title: 'All Movies', movies })
  })
}

const show = (req, res) => {
  Movie.findById(req.params.id)
    .populate('cast')
    .exec((err, movie) => {
      // Performer.find({}).where('_id').nin(movie.cast)
      Performer.find({ _id: { $nin: movie.cast } }).exec((err, performers) => {
        res.render('movies/show', {
          title: 'Movie Detail',
          movie,
          performers,
        })
      })
    })
}

const newMovie = (req, res) => {
  res.render('movies/new', { title: 'Add Movie' })
}

const create = (req, res) => {
  // convert nowShowing's checkbox of nothing or "on" to boolean
  req.body.nowShowing = !!req.body.nowShowing
  for (let key in req.body) {
    if (req.body[key] === '') delete req.body[key]
  }
  var movie = new Movie(req.body)
  movie.save(err => {
    if (err) return res.redirect('/movies/new')
    // res.redirect('/movies');
    res.redirect(`/movies/${movie._id}`)
  })
}

module.exports = {
  index,
  show,
  new: newMovie,
  create,
}
