const Author = require("../../db/models/authormodel");

const addAuthor = async (req, res) => {
  try {
    const result = await Author.create({
      name: req.body.name,
    });

    res.status(201).json({
      message: `Author ${req.body.name} added to database successfully`,
      author: result,
    });
  } catch (error) {
    console.log(error.errors[0]);
    res.status(418).json({ msg: "Error: see error code", error: error });
  }
};

module.exports = addAuthor;