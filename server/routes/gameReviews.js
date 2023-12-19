const express = require('express');
const router = express.Router();
const GameReview = require('../models/GameReview');

// GET all game reviews
router.get('/', async (req, res) => {
  try {
    const reviews = await GameReview.find();
    res.json(reviews);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// POST a new game review
router.post('/', async (req, res) => {
  const review = new GameReview({
    title: req.body.title,
    content: req.body.content
  });

  try {
    const newReview = await review.save();
    res.status(201).json(newReview);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Additional routes (PUT, DELETE) can be added here

module.exports = router;
