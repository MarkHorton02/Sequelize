const Router = require("express");
const bookRouter = Router();

const addBook = require("../controllers/Books_table/addBook");
const listBooks = require("../controllers/Books_table/listBooks");
const listBooksFromAuthor = require("../controllers/Books_table/listBooksFromAuthor");
const updateAuthor = require("../controllers/Books_table/updateAuthor");
const updateGenre = require("../controllers/Books_table/updateGenre");
const delBook = require("../controllers/Books_table/delBook");
const listABookFromAuthor = require("../controllers/Books_table/listABookFromAuthor");

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