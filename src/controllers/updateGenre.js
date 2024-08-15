const Book = require("../db/models/bookmodel");

const updateGenre = async (req, res) => {
  try {
    const result = await Book.update(
      { genre: req.body.genre },
      { where: { title: req.body.title } }
    );

    const updatedBook = await Book.findOne({
      where: { title: req.body.title },
    });

    res.status(201).json({
      message: `Genre of ${req.body.title} updated successfully`,
      book: updatedBook,
    });
  } catch (error) {
    console.log(error.errors[0]);
    res.status(418).json({ msg: "Error: see error code", error: error });
  }
};

module.exports = updateGenre;