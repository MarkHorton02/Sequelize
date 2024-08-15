// .env and Express are required throughout project, so import them at the start of this base server.js
require("dotenv").config();
const express = require("express");
const app = express();
app.use(express.json());

// Routers: Determine the URL for each of the functions
const bookRouter = require("./routes/bookroutes");
const authorRouter = require("./routes/authorroutes");

app.use(authorRouter);
app.use(bookRouter);

// Models: formatting (fields) of the books and authors tables
const Book = require("./db/models/bookmodel");
const Author = require("./db/models/authormodel");

const syncTables = () => {
  Book.sync({ alter: true });
  Author.sync({ alter: true });
};

const port = process.env.PORT || 5001;

app.get("/health", (req, res) => {
  res.status(200).json({ message: "Server API is healthy" });
});

app.listen(port, () => {
  syncTables();
  console.log(`Server running on port ${port}`);
});