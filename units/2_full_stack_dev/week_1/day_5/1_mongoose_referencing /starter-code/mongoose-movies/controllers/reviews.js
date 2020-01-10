var Movie = require('../models/movie');

const create = (req, res) => {
  Movie.findById(req.params.id, function(err, movie) {
    movie.reviews.push(req.body);
    movie.save(err => {
      res.redirect(`/movies/${movie._id}`);
    });
  });
};

module.exports = {
  create,
};
