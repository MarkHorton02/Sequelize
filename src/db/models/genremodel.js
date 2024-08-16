const { DataTypes } = require("sequelize");
const SQLconnection = require("../connection.js");

const Genre = SQLconnection.define("Genre", {
  genre: {
    type: DataTypes.STRING,
  },
});

module.exports = Genre;