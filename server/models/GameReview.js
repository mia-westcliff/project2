const mongoose = require('mongoose');

const gameReviewSchema = new mongoose.Schema({
  title: String,
  content: String
});

const GameReview = mongoose.model('GameReview', gameReviewSchema);

module.exports = GameReview;
