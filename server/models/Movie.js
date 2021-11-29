const mongoose = require("mongoose");

const schema = mongoose.Schema;

const Movie = new schema(
  {
    plot: { type: String, required: true },
    genre: { type: Array, required: true, default: [] },
    runtime: { type: Number, required: true, default: 0 },
    cast: { type: Array, required: true },
    num_mflix_comments: { type: Number, default: 0 },
    poster: { type: String, required: true },
    trailer: {type: String, required: true},
    video: {type: String, required: true},
    thumbnails: {type: Array, required: true},
    title: { type: String, required: true },
    fullplot: { type: String, required: true, default: "" },
    languages: { type: Array, required: true },
    released: { type: Date, required: true },
    directors: { type: Array, required: true },
    awards: {
      wins: { type: Number, default: 0 },
      nominations: { type: Number, default: 0 },
      text: { type: String, default: "" },
    },
    year: { type: Number, required: true },
    imdb: {
      rating: { type: Number, default: 0 },
      votes: { type: Number, default: 0 },
      id: { type: Number, default: 0 },
    },
    countries: { type: Array, required: true },
    type: { type: String, required: true },
    tomatoes: {
      viewers: {
        rating: { type: Number, default: 0 },
        numReviews: { type: Number, default: 0 },
      },
      production: { type: String, required: true },
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("movies", Movie);
