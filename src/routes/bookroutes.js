const Router = require("express");
const bookRouter = Router();

const addBook = require("../controllers/addBook");
const listBooks = require("../controllers/listBooks");
const listBooksFromAuthor = require("../controllers/listBooksFromAuthor");
const updateAuthor = require("../controllers/updateAuthor");
const updateGenre = require("../controllers/updateGenre");
const delBook = require("../controllers/delBook");
const listABookFromAuthor = require("../controllers/listABookFromAuthor");

// Add book [CREATE]
bookRouter.post("/addBook", addBook);

// List books [READ]
bookRouter.get("/listBooks", listBooks);

// List a book by author [READ]
bookRouter.get("/listABookFromAuthor", listABookFromAuthor);

// List all books by author [READ]
bookRouter.get("/listBooksFromAuthor", listBooksFromAuthor);

// Update author of a given book [UPDATE]
bookRouter.put("/updateAuthor", updateAuthor);

// Update genre of a given book [UPDATE]
bookRouter.put("/updateGenre", updateGenre);

// Remove book [DELETE]
bookRouter.delete("/delBook", delBook);

module.exports = bookRouter;