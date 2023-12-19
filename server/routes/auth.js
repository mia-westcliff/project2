const express = require('express');
const router = express.Router();
const User = require('../models/User');
const bcrypt = require('bcryptjs');

router.post('/signin', async (req, res) => {
  // Find user by email
  const user = await User.findOne({ email: req.body.email });
  if (!user) {
    return res.status(400).send('User not found');
  }

  // Check password
  const validPass = await bcrypt.compare(req.body.password, user.password);
  if (!validPass) {
    return res.status(400).send('Invalid password');
  }

  // User authenticated
  res.send('Logged in!');
});

module.exports = router;
