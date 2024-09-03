const express = require("express");
const mongoose = require("mongoose");
const app = express();
require("dotenv").config();
// Middleware to parse JSON
app.use(express.json());
const userRoutes = require("./routes/user");
// Connect to MongoDB
mongoose
  .connect("mongodb://localhost:27017/mydatabase", {
    useNewUrlParser: true,
  })
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("Could not connect to MongoDB...", err));

// Basic route
app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use(
  "/api/users",
  (req, res, next) => {
    console.log("User routes middleware hit");
    next();
  },
  userRoutes
);

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server running on port ${port}`));
