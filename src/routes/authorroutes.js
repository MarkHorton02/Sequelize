const Router = require("express");
const authorRouter = Router();

const addAuthor = require("../controllers/Authors_table/addAuthor");
const delAuthor = require("../controllers/Authors_table/delAuthor");

// Add author [CREATE]
authorRouter.post("/addAuthor", addAuthor);

// Remove book [DELETE]
authorRouter.delete("/delAuthor", delAuthor);

module.exports = authorRouter;