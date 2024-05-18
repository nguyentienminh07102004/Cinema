const mongoose = require("mongoose");

const movie = new mongoose.Schema(
  {
    name : String,
    year:{
      type: Number,
      default: (new Date()).getFullYear()
    },
    runtime: Number,
    thumbnail: String,
    categories: Array,
    releaseDate: String,
    premiereDate: String,
    director: String,
    writer: Array,
    actors: Array,
    storyline: String,
    status: String,
    deleted: {
      type: Boolean,
      default: false
    }
  },
  {
    timestamps: true
  }
);

const Movie = new mongoose.model("movie", movie, "Movie");

module.exports = Movie;