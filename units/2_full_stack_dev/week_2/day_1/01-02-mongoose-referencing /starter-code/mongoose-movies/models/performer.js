const mongoose = require('mongoose')
const Schema = mongoose.Schema

const performerSchema = Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
    },
    born: Date,
  },
  {
    timestamps: true,
  }
)

module.exports = mongoose.model('Performer', performerSchema)
