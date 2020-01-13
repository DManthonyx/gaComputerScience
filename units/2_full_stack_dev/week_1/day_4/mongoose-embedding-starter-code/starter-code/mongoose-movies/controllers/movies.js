const Movie = require('../models/movie');

const index = (req, res) => {
  Movie.find({}, (err, movies) => {
    res.render('movies/index', {
      title: 'All Movies',
      movies,
    });
  });
};

const show = (req, res) => {
  Movie.findById(req.params.id, (err, movie) => {
    res.render('movies/show', {
      title: 'Movie Detail',
      movie,
    });
  });
};

const newMovie = (req, res) => {
  console.log('hit');
  res.render('movies/new', { title: 'Add Movie' });
};

const create = (req, res) => {
  // convert nowShowing's checkbox of nothing or "on" to boolean
  req.body.nowShowing = !!req.body.nowShowing;
  // remove whitespace next to commas
  req.body.cast = req.body.cast.replace(/\s*,\s*/g, ',');
  // split if it's not an empty string
  if (req.body.cast) req.body.cast = req.body.cast.split(',');
  for (let key in req.body) {
    if (req.body[key] === '') delete req.body[key];
  }
  var movie = new Movie(req.body);
  movie.save(err => {
    // one way to handle errors
    if (err) return res.redirect('/movies/new');
    console.log(movie);
    // for now, redirect right back to new.ejs
    res.redirect('/movies');
  });
};

module.exports = {
  index,
  show,
  new: newMovie,
  create,
};
