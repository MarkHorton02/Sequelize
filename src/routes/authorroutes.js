const Router = require("express");
const authorRouter = Router();

const addAuthor = require("../controllers/addAuthor");
const listBooksFromAuthor = require("../controllers/listBooksFromAuthor");

// Add author [CREATE]
bookRouter.post("/addAuthor", addAuthor);

// List books from specified author [READ]
bookRouter.get("/listBooksFromAuthor", listBooksFromAuthor);

module.exports = bookRouter;