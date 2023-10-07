const { DataType } = require("sequelize");

const { sequelize } = require("../config/database");

const Product = sequelize.define("Product", {
  name: {
    type: DataType.STRING,
  },
  imageURL: {
    type: DataType.STRING,
  },
  type: {
    type: DataType.STRING,
  },
});

module.exports = Product;
