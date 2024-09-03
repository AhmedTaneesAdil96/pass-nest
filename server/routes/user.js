const express = require("express");
const router = express.Router();
const User = require("../models/User");

// Create a new user
router.post("/register", async (req, res) => {
  console.log(req);
  const { name, email, password } = req.body;
  let user = new User({ name, email, password });
  user = await user.save();
  res.send(user);
});

module.exports = router;
