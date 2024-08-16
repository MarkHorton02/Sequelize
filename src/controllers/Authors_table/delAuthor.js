const Author = require("../../db/models/authormodel");

const delAuthor = async (req, res) => {
  try {
    const result = await Author.destroy({
      where: { name: req.body.name },
    });

    res.status(201).json({
      message: `Author ${req.body.name} removed from database successfully`,
      author: result,
    });
  } catch (error) {
    console.log(error.errors[0]);
    res.status(418).json({ msg: "Error: see error code", error: error });
  }
};

module.exports = delAuthor;