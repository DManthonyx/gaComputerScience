const Student = require('../models/student')

function index(req, res, next) {
  // Make the query object to use with Student.find based up
  // the user has submitted the search form or now
  let modelQuery = req.query.name
    ? { name: new RegExp(req.query.name, 'i') }
    : {}
  // Default to sorting by name
  let sortKey = req.query.sort || 'name'
  Student.find(modelQuery)
    .sort(sortKey)
    .exec(function(err, students) {
      if (err) return next(err)
      // Passing search values, name & sortKey, for use in the EJS
      res.render('students/index', {
        students,
        user: req.user,
        name: req.query.name,
        sortKey,
      })
    })
}

const addFact = (req, res, next) => {
  req.user.facts.push(req.body)
  req.user.save(function(err) {
    res.redirect('/students')
  })
}

const delFact = (req, res, next) => {}

module.exports = {
  index,
  addFact,
  delFact,
}
