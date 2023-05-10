require('dotenv').config();
const authenticationMiddleware = require("../middlewareExercise/middleware/authenticationMiddleware");
const decodeJwtMiddleware = require("../middlewareExercise/middleware/decodeJwtMiddleware");

const express = require("express");

const app = express();
app.use(decodeJwtMiddleware);

app.get("/private-route", authenticationMiddleware, (req, res) => {
  res.send("Welcome to the private route");
});

app.get("/public-route", (req, res) => {
  res.send("Welcome to the public route");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
