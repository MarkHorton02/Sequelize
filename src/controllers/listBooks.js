const Book = require("../db/models/bookmodel");

const listBooks = async (req, res) => {
  try {
    const result = await Book.findAll({});

    console.log(result);
    res.status(201).json({
      message: "Book added to database successfully",
      book: result,
    });
  } catch (error) {
    console.log(error.errors[0]);
    res.status(418).json({ msg: "Error: see error code", error: error });
  }
};

module.exports = listBooks;