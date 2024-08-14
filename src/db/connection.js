const { Sequelize } = require("sequelize");

const connection = new Sequelize(process.env.MYSQL_URI);

try {
  connection.authenticate();
  console.log("Connected to the database successfully");
} catch (error) {
  console.log(error);
}

module.exports = connection;