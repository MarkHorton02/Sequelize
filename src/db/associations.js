const { DataTypes, Op } = require("sequelize");
const Sequelize = require("sequelize");

const sequelize = new Sequelize("sequelize-video", "root", "toor", {
    dialect: "mysql"
})

const Book = require("./db/models/bookmodel");
const Author = require("./db/models/authormodel");
const Genre = require("./db/models/genremodel");

Author.hasMany(Book);
Book.belongsTo(Author);